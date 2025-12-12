"use client";
import { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      const res = await fetch("/api/hello", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Pournima",
          email: "pournimak7401@gmail.com",
          message,
        }),
      });

      if (res.ok) {
        setSuccess(true);
        setMessage("");
      } else {
        setError("Something went wrong, please try again.");
      }
    } catch (err) {
      setError("Server error, please try again.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="w-full py-16 px-4 sm:px-6 bg-gray-100 dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">
          Contact Me
        </h2>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md transition-all">
          <form onSubmit={handleSubmit} className="grid gap-6">
            <textarea
              name="message"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="6"
              className="w-full p-4 border rounded-lg focus:outline-none 
              focus:ring-2 focus:ring-blue-500 
              dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white font-semibold py-3 rounded-lg 
              hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-green-500 text-center">
                Message sent successfully!
              </p>
            )}
            {error && <p className="text-red-500 text-center">{error}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
