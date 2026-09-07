
"use client";

import { useEffect, useMemo, useState, ChangeEvent, FormEvent } from "react";
import {
  X,
  Search,
  User,
  Smartphone,
  Building2,
  Send,
  Loader2,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

type PaymentMethod = "mobile" | "bank";

type Staff = {
  id: string;
  name: string;
  position: string;
  phone: string;
  email: string;
  paymentMethod: PaymentMethod;
  mobileNetwork?: string;
  mobileNumber?: string;
  mobileName?: string;
  bankName?: string;
  accountNumber?: string;
  accountName?: string;
};

type FormData = {
  staffId: string;
  staffName: string;
  position: string;
  phone: string;
  email: string;
  amount: string;
  paymentMethod: PaymentMethod;
  mobileNetwork: string;
  mobileNumber: string;
  mobileName: string;
  bankName: string;
  accountNumber: string;
  accountName: string;
  confirmation: boolean;
};

const emptyForm: FormData = {
  staffId: "",
  staffName: "",
  position: "",
  phone: "",
  email: "",
  amount: "",
  paymentMethod: "mobile",
  mobileNetwork: "",
  mobileNumber: "",
  mobileName: "",
  bankName: "",
  accountNumber: "",
  accountName: "",
  confirmation: false,
};

export default function FloatingStaffPaymentButton() {
  const [open, setOpen] = useState(false);
  const [staff, setStaff] = useState<Staff[]>([]);
  const [staffSearch, setStaffSearch] = useState("");
  const [showStaff, setShowStaff] = useState(false);
  const [form, setForm] = useState<FormData>(emptyForm);
  const [loadingStaff, setLoadingStaff] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [requestId, setRequestId] = useState("");

  useEffect(() => {
    if (!open) return;

    const loadStaff = async () => {
      try {
        setLoadingStaff(true);

        const response = await fetch("/api/staff", {
          cache: "no-store",
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Unable to load staff.");
        }

        setStaff(data.staff || []);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Unable to load staff."
        );
      } finally {
        setLoadingStaff(false);
      }
    };

    loadStaff();
  }, [open]);

  const filteredStaff = useMemo(() => {
    const search = staffSearch.toLowerCase().trim();

    if (!search) return staff.slice(0, 8);

    return staff
      .filter(
        (person) =>
          person.name.toLowerCase().includes(search) ||
          person.position.toLowerCase().includes(search) ||
          person.phone.includes(search)
      )
      .slice(0, 8);
  }, [staff, staffSearch]);

  const selectStaff = (person: Staff) => {
    setForm({
      staffId: person.id,
      staffName: person.name,
      position: person.position,
      phone: person.phone,
      email: person.email,
      amount: "",
      paymentMethod: person.paymentMethod || "mobile",
      mobileNetwork: person.mobileNetwork || "",
      mobileNumber: person.mobileNumber || person.phone || "",
      mobileName: person.mobileName || person.name || "",
      bankName: person.bankName || "",
      accountNumber: person.accountNumber || "",
      accountName: person.accountName || person.name || "",
      confirmation: false,
    });

    setStaffSearch(person.name);
    setShowStaff(false);
    setError("");
    setSuccess("");
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = event.target;
    const { name, value, type } = target;

    const checked =
      type === "checkbox" && target instanceof HTMLInputElement
        ? target.checked
        : false;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setError("");
  };

  const handleAmount = (event: ChangeEvent<HTMLInputElement>) => {
    const raw = event.target.value.replace(/\D/g, "");

    setForm((prev) => ({
      ...prev,
      amount: raw
        ? Number(raw).toLocaleString("en-UG")
        : "",
    }));

    setError("");
  };

  const changePaymentMethod = (method: PaymentMethod) => {
    setForm((prev) => ({
      ...prev,
      paymentMethod: method,
    }));

    setError("");
  };

  const validate = () => {
    if (!form.staffId) {
      return "Please select a staff member.";
    }

    const amount = Number(form.amount.replace(/,/g, ""));

    if (!amount || amount <= 0) {
      return "Enter a valid payment amount.";
    }

    if (form.paymentMethod === "mobile") {
      if (
        !form.mobileNetwork ||
        !form.mobileNumber ||
        !form.mobileName
      ) {
        return "Complete the Mobile Money details.";
      }
    }

    if (form.paymentMethod === "bank") {
      if (
        !form.bankName ||
        !form.accountNumber ||
        !form.accountName
      ) {
        return "Complete the bank details.";
      }
    }

    if (!form.confirmation) {
      return "Please confirm that the information is correct.";
    }

    return "";
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationError = validate();

    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setSubmitting(true);
      setError("");
      setSuccess("");

      const response = await fetch("/api/staff-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          staffId: form.staffId,
          staffName: form.staffName,
          position: form.position,
          phone: form.phone,
          email: form.email,
          amount: Number(form.amount.replace(/,/g, "")),
          paymentMethod: form.paymentMethod,
          mobileNetwork: form.mobileNetwork,
          mobileNumber: form.mobileNumber,
          mobileName: form.mobileName,
          bankName: form.bankName,
          accountNumber: form.accountNumber,
          accountName: form.accountName,
          confirmation: form.confirmation,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Unable to submit payment request."
        );
      }

      setSuccess("Payment request submitted successfully.");
      setRequestId(data.requestId || "");

      setForm(emptyForm);
      setStaffSearch("");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to submit payment request."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const closeForm = () => {
    if (submitting) return;

    setOpen(false);
    setError("");
    setSuccess("");
    setRequestId("");
  };

  return (
    <>
      {/* Floating Button */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-xl transition hover:bg-blue-700 active:scale-95"
        >
          <Send size={17} />
          Staff Payment
        </button>
      )}

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-[2px]">
          <div className="absolute bottom-0 left-1/2 w-full max-w-2xl -translate-x-1/2">
            <div className="max-h-[92vh] overflow-y-auto rounded-t-2xl bg-white shadow-2xl">
              
              {/* Header */}
              <div className="sticky top-0 z-20 flex items-center justify-between border-b bg-white px-5 py-3">
                <div>
                  <h2 className="text-base font-bold text-gray-900">
                    Staff Payment Request
                  </h2>
                  <p className="text-[11px] text-gray-500">
                    Select staff, confirm details and enter amount
                  </p>
                </div>

                <button
                  type="button"
                  onClick={closeForm}
                  className="rounded-full p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  <X size={19} />
                </button>
              </div>

              {success ? (
                /* Success */
                <div className="px-5 py-10 text-center">
                  <CheckCircle2
                    size={52}
                    className="mx-auto mb-3 text-green-500"
                  />

                  <h3 className="text-lg font-bold text-gray-900">
                    Request Submitted
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    The staff payment request has been sent successfully.
                  </p>

                  {requestId && (
                    <div className="mx-auto mt-4 w-fit rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700">
                      {requestId}
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={closeForm}
                    className="mt-6 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className="px-5 py-4">
                  
                  {/* Error */}
                  {error && (
                    <div className="mb-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-medium text-red-700">
                      {error}
                    </div>
                  )}

                  {/* Staff */}
                  <div className="mb-3">
                    <label className="mb-1 block text-xs font-semibold text-gray-700">
                      Staff Member
                    </label>

                    <div className="relative">
                      <div className="flex items-center rounded-lg border border-gray-200 bg-gray-50 focus-within:border-blue-500 focus-within:bg-white">
                        <Search
                          size={16}
                          className="ml-3 text-gray-400"
                        />

                        <input
                          type="text"
                          value={staffSearch}
                          onChange={(e) => {
                            setStaffSearch(e.target.value);
                            setShowStaff(true);
                            setError("");
                          }}
                          onFocus={() => setShowStaff(true)}
                          placeholder={
                            loadingStaff
                              ? "Loading staff..."
                              : "Search staff name..."
                          }
                          className="w-full bg-transparent px-2.5 py-2 text-sm outline-none"
                        />

                        <ChevronDown
                          size={16}
                          className="mr-3 text-gray-400"
                        />
                      </div>

                      {showStaff && !loadingStaff && (
                        <div className="absolute left-0 right-0 top-full z-30 mt-1 max-h-48 overflow-y-auto rounded-lg border bg-white shadow-lg">
                          {filteredStaff.length > 0 ? (
                            filteredStaff.map((person) => (
                              <button
                                type="button"
                                key={person.id}
                                onClick={() => selectStaff(person)}
                                className="flex w-full items-center gap-3 border-b px-3 py-2 text-left last:border-0 hover:bg-blue-50"
                              >
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                  <User size={15} />
                                </div>

                                <div className="min-w-0">
                                  <p className="truncate text-xs font-semibold text-gray-900">
                                    {person.name}
                                  </p>
                                  <p className="truncate text-[11px] text-gray-500">
                                    {person.position}
                                  </p>
                                </div>
                              </button>
                            ))
                          ) : (
                            <p className="px-3 py-4 text-center text-xs text-gray-500">
                              No staff found
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Staff Details */}
                  <div className="mb-3 rounded-lg border border-gray-200 bg-gray-50 p-3">
                    <div className="mb-2 flex items-center gap-2">
                      <User size={15} className="text-blue-600" />
                      <span className="text-xs font-bold text-gray-800">
                        Staff Details
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <Input
                        label="Name"
                        name="staffName"
                        value={form.staffName}
                        onChange={handleChange}
                        placeholder="Staff name"
                      />

                      <Input
                        label="Position"
                        name="position"
                        value={form.position}
                        onChange={handleChange}
                        placeholder="Position"
                      />

                      <Input
                        label="Phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                      />

                      <Input
                        label="Email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email"
                      />
                    </div>
                  </div>

                  {/* Amount */}
                  <div className="mb-3">
                    <label className="mb-1 block text-xs font-semibold text-gray-700">
                      Payment Amount
                    </label>

                    <div className="flex items-center rounded-lg border border-blue-200 bg-blue-50 focus-within:border-blue-500">
                      <span className="pl-3 text-xs font-bold text-blue-700">
                        UGX
                      </span>

                      <input
                        type="text"
                        inputMode="numeric"
                        value={form.amount}
                        onChange={handleAmount}
                        placeholder="0"
                        className="w-full bg-transparent px-3 py-2 text-lg font-bold text-blue-700 outline-none placeholder:text-blue-200"
                      />
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="mb-3">
                    <label className="mb-1 block text-xs font-semibold text-gray-700">
                      Payment Method
                    </label>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          changePaymentMethod("mobile")
                        }
                        className={
                          "flex items-center justify-center gap-2 rounded-lg border px-3 py-2 text-xs font-semibold transition " +
                          (form.paymentMethod === "mobile"
                            ? "border-blue-600 bg-blue-50 text-blue-700"
                            : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50")
                        }
                      >
                        <Smartphone size={15} />
                        Mobile Money
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          changePaymentMethod("bank")
                        }
                        className={
                          "flex items-center justify-center gap-2 rounded-lg border px-3 py-2 text-xs font-semibold transition " +
                          (form.paymentMethod === "bank"
                            ? "border-blue-600 bg-blue-50 text-blue-700"
                            : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50")
                        }
                      >
                        <Building2 size={15} />
                        Bank
                      </button>
                    </div>
                  </div>

                  {/* Mobile Money */}
                  {form.paymentMethod === "mobile" && (
                    <div className="mb-3 rounded-lg border border-gray-200 p-3">
                      <div className="grid grid-cols-2 gap-2">
                        <SelectInput
                          label="Network"
                          name="mobileNetwork"
                          value={form.mobileNetwork}
                          onChange={handleChange}
                          options={[
                            { value: "", label: "Select network" },
                            { value: "MTN", label: "MTN" },
                            { value: "Airtel", label: "Airtel" },
                          ]}
                        />

                        <Input
                          label="Mobile Number"
                          name="mobileNumber"
                          value={form.mobileNumber}
                          onChange={handleChange}
                          placeholder="0700000000"
                        />

                        <div className="col-span-2">
                          <Input
                            label="Mobile Name"
                            name="mobileName"
                            value={form.mobileName}
                            onChange={handleChange}
                            placeholder="Account holder name"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Bank */}
                  {form.paymentMethod === "bank" && (
                    <div className="mb-3 rounded-lg border border-gray-200 p-3">
                      <div className="grid grid-cols-2 gap-2">
                        <Input
                          label="Bank Name"
                          name="bankName"
                          value={form.bankName}
                          onChange={handleChange}
                          placeholder="Bank name"
                        />

                        <Input
                          label="Account Number"
                          name="accountNumber"
                          value={form.accountNumber}
                          onChange={handleChange}
                          placeholder="Account number"
                        />

                        <div className="col-span-2">
                          <Input
                            label="Account Name"
                            name="accountName"
                            value={form.accountName}
                            onChange={handleChange}
                            placeholder="Account holder name"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Confirmation */}
                  <label className="mb-3 flex cursor-pointer items-start gap-2 rounded-lg bg-gray-50 px-3 py-2">
                    <input
                      type="checkbox"
                      name="confirmation"
                      checked={form.confirmation}
                      onChange={handleChange}
                      className="mt-0.5 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />

                    <span className="text-[11px] leading-4 text-gray-600">
                      I confirm that the staff and payment information
                      entered above is correct.
                    </span>
                  </label>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={17} className="animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send size={17} />
                        Submit Payment Request
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* Compact Input */
function Input({
  label,
  name,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-0.5 block text-[10px] font-semibold uppercase tracking-wide text-gray-500">
        {label}
      </label>

      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-md border border-gray-200 bg-white px-2.5 py-1.5 text-xs text-gray-800 outline-none transition placeholder:text-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
      />
    </div>
  );
}

/* Compact Select */
function SelectInput({
  label,
  name,
  value,
  onChange,
  options,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  options: {
    value: string;
    label: string;
  }[];
}) {
  return (
    <div>
      <label className="mb-0.5 block text-[10px] font-semibold uppercase tracking-wide text-gray-500">
        {label}
      </label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-md border border-gray-200 bg-white px-2.5 py-1.5 text-xs text-gray-800 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
