import { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

const SERVICE_ID = "service_bdagcir";
const TEMPLATE_ID = "template_bf0mtvb";
const PUBLIC_KEY = "37Ej6QBsT";

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
      SERVICE_ID,
      TEMPLATE_ID,
      form,
      PUBLIC_KEY
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
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <textarea
        name="message"
        placeholder="Message"
        rows="5"
        value={form.message}
        onChange={handleChange}
        required
      />

      <button type="submit">Send</button>
    </form>
  );
}
