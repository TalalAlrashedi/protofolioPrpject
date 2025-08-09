import { useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import AnimatedSection from "../../utils/AnimatedSection.jsx";
import { useTranslation } from "react-i18next";
import Underline from "../common/Underline.jsx";

const ContactSection = () => {
  const form = useRef();
  const { t } = useTranslation();

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !email || !message) {
      Swal.fire({
        icon: "warning",
        title: "Incomplete Form",
        text: "Please fill out all fields before sending.",
        confirmButtonColor: "#1b3e38",
      });
      return; // Stop submission
    }

    // Simple email format validation (optional)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address.",
        confirmButtonColor: "#1b3e38",
      });
      return; // Stop submission
    }

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      () => {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thank you for reaching out!",
          confirmButtonColor: "#1b3e38",
        });
        form.current.reset();
      },
      () => {
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
      <div className="max-w-2xl p-10 md:w-full mx-auto bg-[var(--color-cards)] w-90  rounded-3xl shadow-md">
        <h2 className="text-3xl font-semibold mb-6 text-center text-[var(--color-font)]">
          {t("contact_title")}
          <Underline />
        </h2>

        <form ref={form} onSubmit={sendEmail} className="grid gap-6 ">
          <input
            type="text"
            name="name"
            placeholder={t("contact_name_placeholder")}
            required
            className="border outline-[var(--color-secondary)] border-gray-300 px-4 py-4 rounded-3xl bg-transparent text-black placeholder-gray-400"
          />
          <input
            type="email"
            name="email"
            placeholder={t("contact_email_placeholder")}
            required
            className="border outline-[var(--color-secondary)] border-gray-300 px-4 py-4 rounded-3xl  bg-transparent text-black placeholder-gray-400"
          />
          <textarea
            name="message"
            placeholder={t("contact_message_placeholder")}
            rows={5}
            required
            className="border outline-[var(--color-secondary)] resize-none border-gray-300 px-4 py-4 rounded-3xl  bg-transparent text-black placeholder-gray-400"
          />
          <button
            type="submit"
            className="bg-[var(--color-secondary)] mx-auto rounded-3xl text-white p-4 hover:cursor-pointer transition hover:opacity-70"
          >
            {t("contact_send_button")}
          </button>
        </form>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;
