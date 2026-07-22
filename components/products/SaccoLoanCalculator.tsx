"use client";

import { useMemo, useState } from "react";
import Container from "@/components/ui/Container";

type RepaymentMethod = "flat" | "reducing";

interface ScheduleItem {
  installment: number;
  dueDate: string;
  openingBalance: number;
  principal: number;
  interest: number;
  payment: number;
  closingBalance: number;
}

const UGX_FORMATTER = new Intl.NumberFormat("en-UG", {
  style: "currency",
  currency: "UGX",
  maximumFractionDigits: 0,
});

function toNumber(value: string) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function formatDate(date: Date) {
  return date.toLocaleDateString("en-UG", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function addMonths(base: Date, months: number) {
  const dueDate = new Date(base);
  dueDate.setMonth(dueDate.getMonth() + months);
  return dueDate;
}

function createSchedule(
  amount: number,
  annualRate: number,
  termMonths: number,
  method: RepaymentMethod
) {
  const monthlyRate = annualRate / 100 / 12;
  let openingBalance = amount;
  const startDate = new Date();
  const schedule: ScheduleItem[] = [];

  if (termMonths <= 0 || amount <= 0) {
    return schedule;
  }

  if (method === "flat") {
    const principalPerMonth = amount / termMonths;
    const monthlyInterest = amount * monthlyRate;

    for (let installment = 1; installment <= termMonths; installment += 1) {
      const principal = installment === termMonths ? openingBalance : principalPerMonth;
      const payment = principal + monthlyInterest;
      const closingBalance = Math.max(0, openingBalance - principal);

      schedule.push({
        installment,
        dueDate: formatDate(addMonths(startDate, installment)),
        openingBalance,
        principal,
        interest: monthlyInterest,
        payment,
        closingBalance,
      });

      openingBalance = closingBalance;
    }

    return schedule;
  }

  const monthlyPayment =
    monthlyRate === 0
      ? amount / termMonths
      : (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -termMonths));

  for (let installment = 1; installment <= termMonths; installment += 1) {
    const interest = openingBalance * monthlyRate;
    const principal =
      installment === termMonths
        ? openingBalance
        : Math.min(openingBalance, monthlyPayment - interest);
    const payment = principal + interest;
    const closingBalance = Math.max(0, openingBalance - principal);

    schedule.push({
      installment,
      dueDate: formatDate(addMonths(startDate, installment)),
      openingBalance,
      principal,
      interest,
      payment,
      closingBalance,
    });

    openingBalance = closingBalance;
  }

  return schedule;
}

function createScheduleTableHtml(schedule: ScheduleItem[]) {
  const rows = schedule
    .map(
      (item) => `
      <tr>
        <td>${item.installment}</td>
        <td>${item.dueDate}</td>
        <td>${UGX_FORMATTER.format(item.openingBalance)}</td>
        <td>${UGX_FORMATTER.format(item.principal)}</td>
        <td>${UGX_FORMATTER.format(item.interest)}</td>
        <td>${UGX_FORMATTER.format(item.payment)}</td>
        <td>${UGX_FORMATTER.format(item.closingBalance)}</td>
      </tr>`
    )
    .join("");

  return `
    <table border="1" cellspacing="0" cellpadding="8" style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif;">
      <thead>
        <tr>
          <th>Installment</th>
          <th>Due Date</th>
          <th>Opening Balance</th>
          <th>Principal</th>
          <th>Interest</th>
          <th>Payment</th>
          <th>Closing Balance</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

export default function SaccoLoanCalculator() {
  const [loanAmount, setLoanAmount] = useState("5000000");
  const [interestRate, setInterestRate] = useState("16");
  const [loanTermMonths, setLoanTermMonths] = useState("24");
  const [repaymentMethod, setRepaymentMethod] = useState<RepaymentMethod>("reducing");

  const amount = toNumber(loanAmount);
  const annualRate = toNumber(interestRate);
  const termMonths = Math.floor(toNumber(loanTermMonths));

  const errors = useMemo(() => {
    const messages: string[] = [];

    if (amount <= 0) {
      messages.push("Loan amount must be greater than zero.");
    }

    if (annualRate < 0 || annualRate > 100) {
      messages.push("Interest rate must be between 0% and 100%.");
    }

    if (termMonths <= 0 || termMonths > 600) {
      messages.push("Loan term must be between 1 and 600 months.");
    }

    return messages;
  }, [amount, annualRate, termMonths]);

  const schedule = useMemo(() => {
    if (errors.length > 0) {
      return [];
    }

    return createSchedule(amount, annualRate, termMonths, repaymentMethod);
  }, [amount, annualRate, termMonths, repaymentMethod, errors]);

  const totals = useMemo(() => {
    const totalInterest = schedule.reduce((sum, item) => sum + item.interest, 0);
    const totalRepayment = schedule.reduce((sum, item) => sum + item.payment, 0);
    const monthlyPayment = schedule[0]?.payment ?? 0;
    const monthlyInterest = schedule[0]?.interest ?? 0;

    return {
      principal: amount,
      monthlyPayment,
      monthlyInterest,
      totalInterest,
      totalRepayment,
      dueDate: schedule[0]?.dueDate ?? "-",
    };
  }, [amount, schedule]);

  const exportPdf = () => {
    if (schedule.length === 0) {
      return;
    }

    const printWindow = window.open("", "_blank", "width=1024,height=768");
    if (!printWindow) {
      return;
    }

    printWindow.document.write(`
      <html>
        <head>
          <title>SACCO Loan Repayment Schedule</title>
        </head>
        <body style="font-family: Arial, sans-serif; padding: 24px;">
          <h1>SACCO Loan Repayment Schedule</h1>
          ${createScheduleTableHtml(schedule)}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  const downloadExcel = () => {
    if (schedule.length === 0) {
      return;
    }

    const tableHtml = createScheduleTableHtml(schedule);
    const blob = new Blob([tableHtml], {
      type: "application/vnd.ms-excel",
    });

    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "sacco-loan-schedule.xls";
    anchor.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="bg-slate-50 py-16">
      <Container>
        <div className="rounded-2xl bg-white shadow-lg border border-slate-200 p-6 md:p-8">
          <div className="flex flex-col gap-2">
            <p className="text-sky-600 font-semibold uppercase tracking-widest text-sm">
              Loan Tools
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              SACCO Loan Calculator
            </h2>
            <p className="text-slate-600">
              Estimate repayments in real-time for flat rate and reducing balance loans.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 mt-8">
            <label className="flex flex-col gap-2 text-slate-700">
              <span className="font-medium">Loan Amount (UGX)</span>
              <input
                type="number"
                min="1"
                value={loanAmount}
                onChange={(event) => setLoanAmount(event.target.value)}
                className="rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </label>

            <label className="flex flex-col gap-2 text-slate-700">
              <span className="font-medium">Interest Rate (%)</span>
              <input
                type="number"
                min="0"
                max="100"
                step="0.01"
                value={interestRate}
                onChange={(event) => setInterestRate(event.target.value)}
                className="rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </label>

            <label className="flex flex-col gap-2 text-slate-700">
              <span className="font-medium">Loan Term (Months)</span>
              <input
                type="number"
                min="1"
                max="600"
                value={loanTermMonths}
                onChange={(event) => setLoanTermMonths(event.target.value)}
                className="rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </label>

            <label className="flex flex-col gap-2 text-slate-700">
              <span className="font-medium">Repayment Method</span>
              <select
                value={repaymentMethod}
                onChange={(event) => setRepaymentMethod(event.target.value as RepaymentMethod)}
                className="rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="flat">Flat Rate</option>
                <option value="reducing">Reducing Balance</option>
              </select>
            </label>
          </div>

          {errors.length > 0 && (
            <div className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-700" role="alert" aria-live="polite">
              <ul className="list-disc list-inside space-y-1">
                {errors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {[
              ["Monthly Payment", totals.monthlyPayment],
              ["Principal", totals.principal],
              ["Interest", totals.monthlyInterest],
              ["Total Interest", totals.totalInterest],
              ["Total Repayment", totals.totalRepayment],
            ].map(([label, value]) => (
              <div key={String(label)} className="rounded-lg border border-slate-200 p-4 bg-slate-50">
                <p className="text-slate-500 text-sm">{label}</p>
                <p className="text-slate-900 text-2xl font-bold mt-2">
                  {UGX_FORMATTER.format(Number(value))}
                </p>
              </div>
            ))}

            <div className="rounded-lg border border-slate-200 p-4 bg-slate-50">
              <p className="text-slate-500 text-sm">Payment Due Date</p>
              <p className="text-slate-900 text-2xl font-bold mt-2">{totals.dueDate}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => window.print()}
              className="rounded-full bg-slate-900 text-white px-5 py-2.5 font-semibold hover:bg-slate-700 transition"
            >
              Print Schedule
            </button>
            <button
              onClick={exportPdf}
              className="rounded-full bg-sky-600 text-white px-5 py-2.5 font-semibold hover:bg-sky-700 transition"
            >
              Export PDF
            </button>
            <button
              onClick={downloadExcel}
              className="rounded-full bg-emerald-600 text-white px-5 py-2.5 font-semibold hover:bg-emerald-700 transition"
            >
              Download Excel
            </button>
          </div>

          <div className="mt-8 overflow-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <caption className="sr-only">Loan amortization schedule</caption>
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left">Installment</th>
                  <th scope="col" className="px-4 py-3 text-left">Due Date</th>
                  <th scope="col" className="px-4 py-3 text-left">Opening</th>
                  <th scope="col" className="px-4 py-3 text-left">Principal</th>
                  <th scope="col" className="px-4 py-3 text-left">Interest</th>
                  <th scope="col" className="px-4 py-3 text-left">Payment</th>
                  <th scope="col" className="px-4 py-3 text-left">Closing</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((item) => (
                  <tr key={item.installment} className="border-t border-slate-200">
                    <td className="px-4 py-3">{item.installment}</td>
                    <td className="px-4 py-3">{item.dueDate}</td>
                    <td className="px-4 py-3">{UGX_FORMATTER.format(item.openingBalance)}</td>
                    <td className="px-4 py-3">{UGX_FORMATTER.format(item.principal)}</td>
                    <td className="px-4 py-3">{UGX_FORMATTER.format(item.interest)}</td>
                    <td className="px-4 py-3 font-semibold">{UGX_FORMATTER.format(item.payment)}</td>
                    <td className="px-4 py-3">{UGX_FORMATTER.format(item.closingBalance)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </section>
  );
}
