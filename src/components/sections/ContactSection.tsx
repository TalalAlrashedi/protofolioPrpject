import { useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2"; // ✅ استيراد SweetAlert
import AnimatedSection from "../../utils/AnimatedSection.jsx";

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6xh3qxp",
        "template_v1chthn",
        form.current,
        "HaqdmsY28KhldUDKF"
      )
      .then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Thank you for reaching out. I'll get back to you soon.",
            confirmButtonColor: "#1b3e38",
          });
          form.current.reset();
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong. Please try again later.",
            confirmButtonColor: "#1b3e38",
          });
        }
      );
  };

  return (
    <AnimatedSection id="contact">
      <div className="max-w-2xl p-10 mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center text-[var(--color-text)]">
          Contact Me
        </h2>

        <form ref={form} onSubmit={sendEmail} className="grid gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="border border-gray-300 px-4 py-2 rounded bg-transparent text-black placeholder-gray-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="border border-gray-300 px-4 py-2 rounded bg-transparent text-black placeholder-gray-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="border border-gray-300 px-4 py-2 rounded bg-transparent text-black placeholder-gray-400"
          />
          <button
            type="submit"
            className="bg-[var(--color-text)] text-white px-6 py-2 hover:cursor-pointer  transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;