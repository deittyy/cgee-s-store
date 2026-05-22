import { useState, useEffect } from "react";
import { useForm } from "@formspree/react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const NewsletterPopup = () => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [state, handleSubmit] = useForm("https://formspree.io/f/xwvyganb"); // Replace with your Formspree form ID

  // EmailJS configuration – replace with your own
  const EMAILJS_SERVICE_ID = "service_jut92at";
  const EMAILJS_TEMPLATE_ID = "t15r4vj";
  const EMAILJS_PUBLIC_KEY = "mBq2ptmbpwnaD2kpX";

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem("newsletter_seen");
    if (!alreadySeen) {
      const timer = setTimeout(() => setVisible(true), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    // First, submit to Formspree (so you get the submission in your dashboard / email)
    await handleSubmit(e);

    // If Formspree submission succeeded, send the EmailJS welcome email
    if (state.succeeded) {
      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            user_email: email,
            to_name: email.split("@")[0],
            message:
              "Thanks for joining the Cgee_here multiverse! Use code WELCOME10 for 10% off your first order.",
          },
          EMAILJS_PUBLIC_KEY,
        );
        toast.success(
          "Thanks for subscribing! Check your inbox for a welcome message.",
        );
        sessionStorage.setItem("newsletter_seen", "true");
        setVisible(false);
        setEmail("");
      } catch (error) {
        console.error("EmailJS error:", error);
        toast.error(
          "Subscription saved, but welcome email failed. We’ll still keep you posted!",
        );
      }
    } else if (state.errors && !state.submitting) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  // Reset email field when Formspree succeeds (already handled in onSubmit)
  useEffect(() => {
    if (state.succeeded) {
      // Additional cleanup if needed
    }
  }, [state.succeeded]);

  if (!visible) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-popup" onClick={() => setVisible(false)}>
          ✖
        </button>
        <h3>Join the Multiverse ✨</h3>
        <p>Get 10% off your first order + exclusive drops</p>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" disabled={state.submitting}>
            {state.submitting ? "Subscribing..." : "Subscribe →"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterPopup;
