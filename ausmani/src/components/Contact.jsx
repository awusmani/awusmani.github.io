import { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/contact.css';

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
    <div className="contact-card frosted-card">
      <form className="contact-form" onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          className="frosted-input"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="frosted-input"
        />

        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
          className="frosted-input"
        />

        <button type="submit" className="frosted-button">Send</button>
      </form>
    </div>
  );
}
