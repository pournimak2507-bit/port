import { useState } from "react";
import InvoiceGenerator from "@/components/InvoiceGenerator";

export default function InvoicePage() {
  const [open, setOpen] = useState(true);
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-6">
      {open && <InvoiceGenerator onClose={() => setOpen(false)} />}
      {!open && (
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => setOpen(true)}
        >
          Open Invoice Generator
        </button>
      )}
    </div>
  );
}
