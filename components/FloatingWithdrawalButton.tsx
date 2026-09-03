"use client";

import { FormEvent, useState } from "react";
import {
  X,
  Wallet,
  Smartphone,
  Building2,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowLeft,
} from "lucide-react";

type WithdrawalMethod = "mobile" | "bank";

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  amount: string;

  network: string;
  mobileNumber: string;
  mobileName: string;

  bankName: string;
  accountName: string;
  accountNumber: string;

  reason: string;
  confirmation: boolean;
};

type Status = "idle" | "success" | "error";

export default function FloatingWithdrawalButton() {
  const [open, setOpen] = useState(false);

  const [method, setMethod] = useState<WithdrawalMethod>("mobile");

  const [status, setStatus] = useState<Status>("idle");

  const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const [requestId, setRequestId] = useState("");

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    amount: "",

    network: "",
    mobileNumber: "",
    mobileName: "",

    bankName: "",
    accountName: "",
    accountNumber: "",

    reason: "",
    confirmation: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      amount: "",

      network: "",
      mobileNumber: "",
      mobileName: "",

      bankName: "",
      accountName: "",
      accountNumber: "",

      reason: "",
      confirmation: false,
    });

    setMethod("mobile");
    setStatus("idle");
    setErrorMessage("");
    setRequestId("");
  };

  const closeModal = () => {
    if (loading) return;

    setOpen(false);

    setTimeout(() => {
      resetForm();
    }, 300);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrorMessage("");
    setStatus("idle");

    if (!formData.confirmation) {
      setStatus("error");
      setErrorMessage(
        "Please confirm that the information you have provided is correct."
      );
      return;
    }

    const amount = Number(formData.amount);

    if (!amount || amount <= 0) {
      setStatus("error");
      setErrorMessage("Please enter a valid withdrawal amount.");
      return;
    }

    if (method === "mobile") {
      if (
        !formData.network ||
        !formData.mobileNumber ||
        !formData.mobileName
      ) {
        setStatus("error");
        setErrorMessage(
          "Please complete all Mobile Money payment details."
        );
        return;
      }
    }

    if (method === "bank") {
      if (
        !formData.bankName ||
        !formData.accountName ||
        !formData.accountNumber
      ) {
        setStatus("error");
        setErrorMessage("Please complete all bank account details.");
        return;
      }
    }

    setLoading(true);

    try {
      const response = await fetch("/api/withdrawal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          amount,
          withdrawalMethod: method,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message ||
            "We could not submit your withdrawal request. Please try again."
        );
      }

      setRequestId(result.requestId || "");

      setStatus("success");
    } catch (error) {
      console.error("Withdrawal submission error:", error);

      setStatus("error");

      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage(
          "Something went wrong while submitting your request. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* FLOATING BUTTON */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-blue-700 px-5 py-3.5 text-sm font-bold text-white shadow-xl transition hover:bg-blue-800 hover:shadow-2xl active:scale-95"
      >
        <Wallet size={20} />

        <span className="hidden sm:inline">
          Request Withdrawal
        </span>

        <span className="sm:hidden">
          Withdraw
        </span>
      </button>

      {/* OVERLAY */}
      {open && (
        <div className="fixed inset-0 z-100 bg-black/60 backdrop-blur-sm">
          {/* MODAL CONTAINER */}
          <div className="flex min-h-screen items-end justify-center sm:items-center sm:p-6">
            <div className="relative flex max-h-[95vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:max-h-[90vh] sm:rounded-3xl">
              
              {/* HEADER */}
              <div className="flex items-center justify-between border-b bg-white px-5 py-4 sm:px-7">
                <div>
                  <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                    Withdrawal Request
                  </h2>

                  <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                    YPA Wealth Depot
                  </p>
                </div>

                <button
                  type="button"
                  onClick={closeModal}
                  disabled={loading}
                  className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <X size={22} />
                </button>
              </div>

              {/* CONTENT */}
              <div className="overflow-y-auto px-5 py-5 sm:px-7 sm:py-6">

                {/* SUCCESS SCREEN */}
                {status === "success" && (
                  <div className="flex min-h-112.5 flex-col items-center justify-center text-center">
                    <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                      <CheckCircle2
                        size={48}
                        className="text-green-600"
                      />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900">
                      Submission Successful
                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-6 text-gray-600">
                      Your withdrawal request has been successfully
                      submitted to YPA Wealth Depot.
                    </p>

                    {requestId && (
                      <div className="mt-5 rounded-xl bg-gray-50 px-5 py-3">
                        <p className="text-xs text-gray-500">
                          Request ID
                        </p>

                        <p className="mt-1 font-bold text-gray-900">
                          {requestId}
                        </p>
                      </div>
                    )}

                    <div className="mt-4 rounded-xl bg-blue-50 px-5 py-3">
                      <p className="text-xs text-blue-600">
                        Amount Requested
                      </p>

                      <p className="mt-1 text-lg font-bold text-blue-800">
                        UGX{" "}
                        {Number(formData.amount || 0).toLocaleString()}
                      </p>
                    </div>

                    <p className="mt-5 text-xs text-gray-500">
                      Please keep your request ID for future reference.
                    </p>

                    <button
                      type="button"
                      onClick={closeModal}
                      className="mt-7 rounded-xl bg-blue-700 px-7 py-3 font-semibold text-white transition hover:bg-blue-800"
                    >
                      Done
                    </button>
                  </div>
                )}

                {/* ERROR SCREEN / FORM */}
                {status !== "success" && (
                  <>
                    {/* ERROR MESSAGE */}
                    {status === "error" && (
                      <div className="mb-5 flex gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
                        <AlertCircle
                          size={22}
                          className="mt-0.5 shrink-0 text-red-600"
                        />

                        <div>
                          <p className="font-semibold text-red-800">
                            Submission Failed
                          </p>

                          <p className="mt-1 text-sm leading-5 text-red-700">
                            {errorMessage}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* INTRO */}
                    <div className="mb-6 rounded-xl bg-blue-50 p-4">
                      <p className="text-sm leading-6 text-blue-900">
                        Complete the form below to request a withdrawal.
                        Your request will be reviewed by YPA Wealth Depot.
                        
                      </p>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      {/* MEMBER DETAILS */}
                      <div>
                        <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-gray-800">
                          Member Details
                        </h3>

                        <div className="grid gap-4 sm:grid-cols-2">
                          {/* first Name */}
                          <div>
                            <label className="mb-1.5 block text-sm font-medium text-gray-700">
                             First Name
                            </label>

                            <input
                              type="text"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              placeholder="Enter your First name"
                              required
                              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                            />
                          </div>

                          {/* Last Name */}
                          <div>
                            <label className="mb-1.5 block text-sm font-medium text-gray-700">
                             Last Name
                            </label>

                            <input
                              type="text"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              placeholder="Enter your Last name"
                              required
                              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                            />
                          </div>

                          {/* PHONE */}
                          <div className="sm:col-span-2">
                            <label className="mb-1.5 block text-sm font-medium text-gray-700">
                              Phone Number
                            </label>

                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="e.g. 0774......."
                              required
                              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                            />
                          </div>
                        </div>
                      </div>

                      {/* AMOUNT */}
                      <div>
                        <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-gray-800">
                          Withdrawal Amount
                        </h3>

                        <label className="mb-1.5 block text-sm font-medium text-gray-700">
                          Amount (UGX)
                        </label>

                        <input
                          type="number"
                          name="amount"
                          value={formData.amount}
                          onChange={handleChange}
                          placeholder="Enter amount"
                          min="1"
                          required
                          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                        />
                      </div>

                      {/* WITHDRAWAL METHOD */}
                      <div>
                        <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-gray-800">
                          Withdrawal Method
                        </h3>

                        <div className="grid grid-cols-2 gap-3">
                          {/* MOBILE MONEY */}
                          <button
                            type="button"
                            onClick={() => setMethod("mobile")}
                            className={`flex flex-col items-center justify-center rounded-2xl border-2 p-4 transition ${
                              method === "mobile"
                                ? "border-blue-600 bg-blue-50 text-blue-700"
                                : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                            }`}
                          >
                            <Smartphone size={26} />

                            <span className="mt-2 text-sm font-semibold">
                              Mobile Money
                            </span>
                          </button>

                          {/* BANK */}
                          <button
                            type="button"
                            onClick={() => setMethod("bank")}
                            className={`flex flex-col items-center justify-center rounded-2xl border-2 p-4 transition ${
                              method === "bank"
                                ? "border-blue-600 bg-blue-50 text-blue-700"
                                : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                            }`}
                          >
                            <Building2 size={26} />

                            <span className="mt-2 text-sm font-semibold">
                              Bank
                            </span>
                          </button>
                        </div>
                      </div>

                      {/* MOBILE MONEY DETAILS */}
                      {method === "mobile" && (
                        <div className="rounded-2xl bg-gray-50 p-4 sm:p-5">
                          <h3 className="mb-4 text-sm font-bold text-gray-800">
                            Mobile Money Details
                          </h3>

                          <div className="space-y-4">
                            {/* NETWORK */}
                            <div>
                              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                                Network
                              </label>

                              <select
                                name="network"
                                value={formData.network}
                                onChange={handleChange}
                                required
                                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                              >
                                <option value="">
                                  Select network
                                </option>

                                <option value="MTN">
                                  MTN Mobile Money
                                </option>

                                <option value="Airtel">
                                  Airtel Money
                                </option>
                              </select>
                            </div>

                            {/* MOBILE NUMBER */}
                            <div>
                              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                                Mobile Money Number
                              </label>

                              <input
                                type="tel"
                                name="mobileNumber"
                                value={formData.mobileNumber}
                                onChange={handleChange}
                                placeholder="e.g. 0774350727"
                                required
                                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                              />
                            </div>

                            {/* ACCOUNT NAME */}
                            <div>
                              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                                Mobile Money Account Name
                              </label>

                              <input
                                type="text"
                                name="mobileName"
                                value={formData.mobileName}
                                onChange={handleChange}
                                placeholder="Name registered on Mobile Money"
                                required
                                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* BANK DETAILS */}
                      {method === "bank" && (
                        <div className="rounded-2xl bg-gray-50 p-4 sm:p-5">
                          <h3 className="mb-4 text-sm font-bold text-gray-800">
                            Bank Account Details
                          </h3>

                          <div className="space-y-4">
                            {/* BANK NAME */}
                            <div>
                              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                                Bank Name
                              </label>

                              <input
                                type="text"
                                name="bankName"
                                value={formData.bankName}
                                onChange={handleChange}
                                placeholder="Enter bank name"
                                required
                                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                              />
                            </div>

                            {/* ACCOUNT NAME */}
                            <div>
                              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                                Account Name
                              </label>

                              <input
                                type="text"
                                name="accountName"
                                value={formData.accountName}
                                onChange={handleChange}
                                placeholder="Name on bank account"
                                required
                                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                              />
                            </div>

                            {/* ACCOUNT NUMBER */}
                            <div>
                              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                                Account Number
                              </label>

                              <input
                                type="text"
                                name="accountNumber"
                                value={formData.accountNumber}
                                onChange={handleChange}
                                placeholder="Enter bank account number"
                                required
                                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* CONFIRMATION */}
                      <label className="flex cursor-pointer gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4">
                        <input
                          type="checkbox"
                          name="confirmation"
                          checked={formData.confirmation}
                          onChange={handleChange}
                          className="mt-1 h-4 w-4 shrink-0 accent-blue-700"
                        />

                        <span className="text-sm leading-5 text-gray-600">
                          I confirm that the information provided is
                          correct and I authorize YPA Wealth Depot
                          to process this withdrawal request.
                        </span>
                      </label>

                      {/* SUBMIT */}
                      <button
                        type="submit"
                        disabled={loading}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-3.5 font-bold text-white shadow-lg transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        {loading ? (
                          <>
                            <Loader2
                              size={20}
                              className="animate-spin"
                            />

                            Submitting Request...
                          </>
                        ) : (
                          <>
                            <Wallet size={20} />

                            Submit Withdrawal Request
                          </>
                        )}
                      </button>

                      {/* SECURITY NOTE */}
                      <p className="text-center text-xs leading-5 text-gray-400">
                        Your withdrawal request will be securely submitted
                        for review by YPA Wealth Depot.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}