import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Integrate with Formspree, EmailJS, or your own backend here
    alert('Message sent! (Integrate with a service like Formspree)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-center text-slate-600 dark:text-slate-300 mb-12">Have a project in mind or just want to say hi? Drop me a message!</p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Let's Connect</h3>
            <p className="text-slate-600 dark:text-slate-300">I'm currently open to new opportunities and freelance projects. Whether you have a question or just want to connect, my inbox is always open!</p>
            <div className="space-y-4 pt-4">
              <a href="mailto:alex.carter@example.com" className="flex items-center gap-3 text-teal-600 dark:text-teal-400 hover:underline">
                <span className="text-2xl">✉️</span> alex.carter@example.com
              </a>
              <a href="https://github.com/alexcarter" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-teal-600 dark:text-teal-400 hover:underline">
                <span className="text-2xl">💻</span> github.com/alexcarter
              </a>
              <a href="https://linkedin.com/in/alexcarter" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-teal-600 dark:text-teal-400 hover:underline">
                <span className="text-2xl">💼</span> linkedin.com/in/alexcarter
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-teal-500 outline-none transition" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-teal-500 outline-none transition" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-medium">Message</label>
              <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-teal-500 outline-none transition resize-none"></textarea>
            </div>
            <button type="submit" className="w-full py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 shadow-lg transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
