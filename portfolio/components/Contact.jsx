<section id="contact" className="w-full py-16 px-4 sm:px-6 bg-gray-100">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center">
      Contact Me
    </h2>

    <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-md transition-all hover:shadow-xl">
      <form onSubmit={handleSubmit} className="grid gap-4">
        <textarea
          name="message"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="6"
          className="w-full p-3 sm:p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 transition-colors"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white font-semibold py-2 sm:py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success && (
          <p className="text-green-500 text-center mt-2 font-medium">
            Message sent successfully!
          </p>
        )}
        {error && (
          <p className="text-red-500 text-center mt-2 font-medium">{error}</p>
        )}
      </form>
    </div>
  </div>
</section>;
