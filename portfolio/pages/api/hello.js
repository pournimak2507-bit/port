export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Simple validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // For now, just log the message
    console.log("New contact form submission:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // You can integrate email sending here using nodemailer if needed

    return res.status(200).json({ success: true, message: "Message received" });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
