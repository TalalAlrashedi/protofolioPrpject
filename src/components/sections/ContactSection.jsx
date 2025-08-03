import Underline from "../Underline";

const ContactSection = () => (
  <section id="contact">
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center text-[var(--color-text)]">
        Contact Me
        <Underline />
      </h2>

      <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Your Name"
          required
          className="border border-gray-300 px-4 py-2 rounded bg-transparent text-white placeholder-gray-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          className="border border-gray-300 px-4 py-2 rounded bg-transparent text-white placeholder-gray-400"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          required
          className="border border-gray-300 px-4 py-2 rounded bg-transparent text-white placeholder-gray-400"
        />
        <button
          type="submit"
          className="bg-[var(--color-text)] text-white px-6 py-2 rounded hover:bg-white hover:text-[var(--color-text)] transition"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default ContactSection;
