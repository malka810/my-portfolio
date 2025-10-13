import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"" | "sending" | "success" | "error">("");


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setStatus("success");
          setForm({ name: "", email: "", message: "" });
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center text-white py-20 px-6"
      data-aos="fade-up"
    >
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 md:mb-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 animate-pulse">
          Contact me
        </h2>

      <p className="text-gray-300 text-center max-w-2xl mb-10">
        Let’s connect! Whether you have a question, want to collaborate,
        or just want to say hi — feel free to drop me a message below 👇
      </p>

      <form
        onSubmit={sendEmail}
        className="w-full max-w-lg bg-gray-800/60 p-8 rounded-2xl shadow-lg border border-gray-700"
      >
        <div className="mb-6">
          <label className="block text-gray-300 text-sm mb-2">Name</label>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-300 text-sm mb-2">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-300 text-sm mb-2">Message</label>
          <textarea
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message..."
            required
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-indigo-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold rounded-lg transition duration-300"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send Message ✉️"}
        </button>

        {status === "success" && (
          <p className="text-green-400 text-center mt-4">
            ✅ Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-400 text-center mt-4">
            ❌ Failed to send. Try again later.
          </p>
        )}
      </form>

      <div className="flex gap-6 mt-10">
        <a
          href="https://github.com/malka810"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-400 hover:text-indigo-400"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://linkedin.com/in/malka810"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-400 hover:text-indigo-400"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="mailto:malka@gmail.com"
          className="text-2xl text-gray-400 hover:text-indigo-400"
        >
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
