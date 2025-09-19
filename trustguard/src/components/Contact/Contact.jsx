import { useState } from "react";
import { Mail, Phone, Globe, CheckCircle } from "lucide-react";
import { Card } from "../Card";
import Input from "../Input";
import Textarea from "../Textarea";
import Button from '../Button';

const initialForm = { name: '', email: '', message: '' };

const validate = ({ name, email, message }) => {
  const errors = {};
  if (!name.trim()) errors.name = "Name is required.";
  if (!email.trim()) errors.email = "Email is required.";
  else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) errors.email = "Invalid email address.";
  if (!message.trim()) errors.message = "Message is required.";
  return errors;
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1200));
    setSuccess(true);
    setForm(initialForm);
    setSubmitting(false);
    setTimeout(() => setSuccess(false), 3500);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-to-b from-black via-violet-900 to-violet-700">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-violet-100 drop-shadow">Get In Touch</h2>
          <p className="text-xl text-violet-200 max-w-2xl mx-auto">
            Have questions, feedback, or partnership inquiries? We'd love to hear from you.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-violet-100">Contact Information</h3>
            <p className="text-violet-200">
              Fill out the form, or contact us using the details below. Our team will get back to you within 24 hours.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-violet-300" />
                <a href="mailto:contact@trustguard.ai" className="text-violet-100 hover:text-violet-400">contact@trustguard.ai</a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-violet-300" />
                <span className="text-violet-100">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start gap-4">
                <Globe className="h-5 w-5 text-violet-300 mt-1" />
                <div className="text-violet-100">
                  123 Information Highway<br />
                  Truthville, TC 54321<br />
                  United States
                </div>
              </div>
            </div>
          </div>
          <Card className="p-8 shadow-xl bg-black/80 border-violet-900">
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  className={errors.name ? 'border-red-500' : ''}
                  disabled={submitting}
                  required
                />
                {errors.name && <div className="text-red-400 text-xs mt-1">{errors.name}</div>}
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  className={errors.email ? 'border-red-500' : ''}
                  disabled={submitting}
                  required
                />
                {errors.email && <div className="text-red-400 text-xs mt-1">{errors.email}</div>}
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  className={errors.message ? 'border-red-500' : ''}
                  disabled={submitting}
                  required
                />
                {errors.message && <div className="text-red-400 text-xs mt-1">{errors.message}</div>}
              </div>
              <Button type="submit" className="w-full bg-violet-700 hover:bg-violet-800 text-white" disabled={submitting}>
                {submitting ? 'Sending...' : 'Send Message'}
              </Button>
              {success && (
                <div className="flex items-center justify-center gap-2 mt-4 text-green-400 text-sm font-semibold">
                  <CheckCircle className="h-5 w-5" />
                  Your message has been sent!
                </div>
              )}
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
