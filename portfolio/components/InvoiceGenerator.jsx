// components/InvoiceGenerator.jsx
"use client";

import { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable"; // ✅ Correct import

const defaultTax = 18;

const InvoiceGenerator = ({ onClose }) => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState({ name: "", qty: 1, price: "" });
  const [tax, setTax] = useState(defaultTax);

  const addItem = () => {
    if (!item.name || !item.price || Number(item.qty) <= 0) return;

    setItems((prev) => [
      ...prev,
      { name: item.name, qty: Number(item.qty), price: Number(item.price) },
    ]);
    setItem({ name: "", qty: 1, price: "" });
  };

  // Calculations
  const grandTotal = items.reduce((acc, it) => acc + it.qty * it.price, 0);
  const totalCGST = (grandTotal * (tax / 2)) / 100;
  const totalSGST = totalCGST;
  const totalWithTax = grandTotal + totalCGST + totalSGST;

  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("GST Invoice", 14, 20);

    doc.setFontSize(11);
    doc.text("Name: Pournima Kamble", 14, 28);
    doc.text("Email: pournimak7401@gmail.com", 14, 34);
    doc.text(`Tax: ${tax}%`, 14, 40);

    const tableColumn = ["Item", "Qty", "Price", "CGST", "SGST", "Total"];
    const tableRows = items.map((it) => {
      const total = it.qty * it.price;
      const cgst = (total * (tax / 2)) / 100;
      const sgst = cgst;
      return [
        it.name,
        it.qty,
        it.price.toFixed(2),
        cgst.toFixed(2),
        sgst.toFixed(2),
        (total + cgst + sgst).toFixed(2),
      ];
    });

    // ✅ Correct autoTable usage
    autoTable(doc, {
      startY: 48,
      head: [tableColumn],
      body: tableRows,
    });

    const finalY = doc.lastAutoTable?.finalY || 60;
    doc.text(`Grand Total: ${grandTotal.toFixed(2)}`, 14, finalY + 10);
    doc.text(`Total CGST: ${totalCGST.toFixed(2)}`, 14, finalY + 16);
    doc.text(`Total SGST: ${totalSGST.toFixed(2)}`, 14, finalY + 22);
    doc.text(`Final Amount: ${totalWithTax.toFixed(2)}`, 14, finalY + 28);

    doc.save("invoice.pdf");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-2xl p-6 rounded-lg transition-all bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">
            GST Calculator & Mini Invoice
          </h3>
        </div>

        {/* Form */}
        <div className="grid gap-3">
          <input
            value={item.name}
            onChange={(e) => setItem({ ...item, name: e.target.value })}
            placeholder="Item Name"
            className="p-2 border rounded bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-100"
          />
          <input
            value={item.qty}
            onChange={(e) => setItem({ ...item, qty: Number(e.target.value) })}
            placeholder="Quantity"
            type="number"
            min={1}
            className="p-2 border rounded bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-100"
          />
          <input
            value={item.price}
            onChange={(e) =>
              setItem({ ...item, price: Number(e.target.value) })
            }
            placeholder="Price"
            type="number"
            min={0}
            className="p-2 border rounded bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-100"
          />
          <select
            value={tax}
            onChange={(e) => setTax(Number(e.target.value))}
            className="p-2 border rounded bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-100"
          >
            <option value={5}>5%</option>
            <option value={12}>12%</option>
            <option value={18}>18%</option>
            <option value={28}>28%</option>
          </select>
          <button
            onClick={addItem}
            className="bg-blue-500 text-white py-2 rounded w-36"
          >
            Add Item
          </button>
        </div>

        {/* Invoice Table */}
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b">
                <th>Item Name</th>
                <th>Qty</th>
                <th>Price</th>
                <th>CGST</th>
                <th>SGST</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 ? (
                <tr>
                  <td colSpan="6" className="py-4 text-center text-gray-500">
                    No items added
                  </td>
                </tr>
              ) : (
                items.map((it, i) => {
                  const total = it.qty * it.price;
                  const cgst = (total * (tax / 2)) / 100;
                  const sgst = cgst;
                  return (
                    <tr key={i} className="border-t">
                      <td className="text-gray-900 dark:text-gray-100">
                        {it.name}
                      </td>
                      <td className="text-gray-900 dark:text-gray-100">
                        {it.qty}
                      </td>
                      <td className="text-gray-900 dark:text-gray-100">
                        {it.price.toFixed(2)}
                      </td>
                      <td className="text-gray-900 dark:text-gray-100">
                        {cgst.toFixed(2)}
                      </td>
                      <td className="text-gray-900 dark:text-gray-100">
                        {sgst.toFixed(2)}
                      </td>
                      <td className="text-gray-900 dark:text-gray-100">
                        {(total + cgst + sgst).toFixed(2)}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
            {items.length > 0 && (
              <tfoot>
                <tr className="border-t font-semibold">
                  <td colSpan="5" className="text-right pr-4">
                    Grand Total
                  </td>
                  <td>{grandTotal.toFixed(2)}</td>
                </tr>
                <tr>
                  <td colSpan="5" className="text-right pr-4">
                    Total CGST
                  </td>
                  <td>{totalCGST.toFixed(2)}</td>
                </tr>
                <tr>
                  <td colSpan="5" className="text-right pr-4">
                    Total SGST
                  </td>
                  <td>{totalSGST.toFixed(2)}</td>
                </tr>
                <tr className="font-bold">
                  <td colSpan="5" className="text-right pr-4">
                    Final Amount
                  </td>
                  <td>{totalWithTax.toFixed(2)}</td>
                </tr>
              </tfoot>
            )}
          </table>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex gap-3">
          <button
            onClick={downloadPdf}
            disabled={items.length === 0}
            className="bg-green-500 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Download Invoice
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceGenerator;
