import { Mail, Phone, Globe } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "./Card";
import Input from "./Input";
import Textarea from "./Textarea";
import Button from './Button';

const Contact = () => {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions, feedback, or partnership inquiries? We'd love to hear from you.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <p className="text-gray-700">
              Fill out the form, or contact us using the details below. Our team will get back to you within 24 hours.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-blue-600" />
                <a href="mailto:contact@trustguard.ai" className="text-gray-700 hover:text-blue-600">contact@trustguard.ai</a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start gap-4">
                <Globe className="h-5 w-5 text-blue-600 mt-1" />
                <div className="text-gray-700">
                  123 Information Highway<br />
                  Truthville, TC 54321<br />
                  United States
                </div>
              </div>
            </div>
          </div>
          <Card className="p-6 shadow-lg neon-hover">
            <form className="space-y-4">
              <div>
                <Input type="text" placeholder="Your Name" required />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" required />
              </div>
              <div>
                <Textarea placeholder="Your Message" rows="5" required />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
