import { useRef } from "react";
import "./contact.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initials: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_v30vwcu", "template_749j9sl", form.current, {
        publicKey: "vtRg08GyAhJe5KEtZ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initials"
      whileInView="animate"
    >
      <motion.div className="textContainer9" variants={variants}>
        <motion.h1 variants={variants}>Let's Work Together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>sourabhkashyap309@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </motion.div>

        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+91 8767******</span>
        </motion.div>
      </motion.div>
      <div className="formContainer3">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" required placeholder="Name"  name="user_name"/>
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Message" name="message"/>
          <button>Submit</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
