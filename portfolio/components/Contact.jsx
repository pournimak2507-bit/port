import { useState } from "react";

const Contact = () => {
  const [success, setSuccess] = useState(false);

  return (
    <section
      id="contact"
      className="w-full py-16 px-4 sm:px-6 bg-gray-100 dark:bg-gray-900"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">
          Contact Me
        </h2>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={() => setSuccess(true)}
            className="grid gap-5"
          >
            {/* Netlify hidden input */}
            <input type="hidden" name="form-name" value="contact" />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
              required
            />

            <button
              type="submit"
              className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>

            {success && (
              <p className="text-green-500 text-center">
                Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
