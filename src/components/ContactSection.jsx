import { useState } from 'react'; 
import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';
import '../styles/ContactSection.css';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${form.name}, your message was sent!`);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-section fade-in">
      <div className="background-illustration"></div>
      <h2 className="contact-title">Contact Me</h2>
      <form className="contact-form bounce-in" onSubmit={handleSubmit}>
        <div className="input-icon-group">
          <FaUser className="input-icon" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className="input-icon-group">
          <FaEnvelope className="input-icon" />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-icon-group textarea-group">
          <FaCommentDots className="input-icon" />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            value={form.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="glow-button">Send Message</button>
      </form>
    </section>
  );
};

export default ContactSection;
