import { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_bdagcir",
      "template_bf0mtvb",
      form,
      "37Ej6QBsT-w3dpzm8"
    ).then(() => {
      alert("Message sent!");
      setForm({ name: "", email: "", message: "" });
    }).catch(err => {
      console.error(err);
      alert("Failed to send. Check console.");
    });
  };

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <textarea
        name="message"
        placeholder="Your Message"
        rows="5"
        value={form.message}
        onChange={handleChange}
        required
      />

      <button type="submit">Send</button>
    </form>
  );
}
