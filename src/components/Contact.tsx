import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiPhone } from 'react-icons/fi';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      );

      alert('Message sent successfully!');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-dark-navy relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 border border-neon-blue rounded-full" />
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-neon-green/20 rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto section-padding relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Contact <span className="text-neon-blue">Me</span>
          </h2>
          <div className="w-16 h-1 bg-neon-blue rounded-full" />
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* LEFT COLUMN — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-lightest-slate mb-4">
                Let's Work Together
              </h3>
              <p className="text-light-slate leading-relaxed text-sm md:text-base">
                I'm open to SDE internships, junior full-stack / backend roles, and
                collaborations on serious, long-term projects. If you're building
                something real and need someone who can own features end-to-end,
                let's connect.
              </p>
            </div>

            {/* Direct Contact Info */}
            <div className="space-y-4">
              <a
                href="mailto:manyamjagadeeswar7989@gmail.com"
                className="flex items-center gap-3 text-light-slate hover:text-neon-blue transition-colors group"
              >
                <div className="p-2 rounded-lg bg-lightest-navy/30 text-neon-blue group-hover:bg-neon-blue/10 transition-colors">
                  <FiMail className="w-5 h-5" />
                </div>
                <span className="text-sm md:text-base break-all">manyamjagadeeswar7989@gmail.com</span>
              </a>

              <a
                href="tel:+917989461178"
                className="flex items-center gap-3 text-light-slate hover:text-neon-blue transition-colors group"
              >
                <div className="p-2 rounded-lg bg-lightest-navy/30 text-neon-blue group-hover:bg-neon-blue/10 transition-colors">
                  <FiPhone className="w-5 h-5" />
                </div>
                <span className="text-sm md:text-base">+91 9110385587</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              {[
                { icon: FiGithub, href: 'https://github.com/Jagadeesh9110', label: 'GitHub' },
                { icon: FiLinkedin, href: 'https://linkedin.com/in/jagadeeswar-reddy-manyam', label: 'LinkedIn' },
                { icon: FiMail, href: 'mailto:manyamjagadeeswar7989@gmail.com', label: 'Email' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-target p-3 rounded-full border border-neon-blue/30 text-neon-blue hover:bg-neon-blue hover:text-dark-navy transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  name="user_name"
                  placeholder="Enter Your Name"
                  required
                  className="w-full px-4 py-3 bg-lightest-navy/30 border border-white/10 rounded-md text-lightest-slate placeholder-slate/60 focus:outline-none focus:border-neon-blue transition-colors text-sm md:text-base"
                />
              </div>
              <div>
                <input
                  name="user_email"
                  type="email"
                  placeholder="Enter Your Email"
                  required
                  className="w-full px-4 py-3 bg-lightest-navy/30 border border-white/10 rounded-md text-lightest-slate placeholder-slate/60 focus:outline-none focus:border-neon-blue transition-colors text-sm md:text-base"
                />
              </div>
              <div>
                <input
                  name="subject"
                  placeholder="Enter Your Subject"
                  className="w-full px-4 py-3 bg-lightest-navy/30 border border-white/10 rounded-md text-lightest-slate placeholder-slate/60 focus:outline-none focus:border-neon-blue transition-colors text-sm md:text-base"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Enter Your Message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-lightest-navy/30 border border-white/10 rounded-md text-lightest-slate placeholder-slate/60 focus:outline-none focus:border-neon-blue transition-colors resize-none text-sm md:text-base"
                />
              </div>

              {/* Submit Button with neon glow */}
              <div className="relative">
                {/* Glow effect behind button */}
                <div className="absolute -inset-1 bg-neon-blue/40 rounded-lg blur-md opacity-70" />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cursor-target relative w-full bg-dark-navy border border-neon-blue/20 text-lightest-slate font-medium py-3 rounded-lg transition-all duration-300 hover:bg-neon-blue/10 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-lightest-slate border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="w-4 h-4" />
                      Submit
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
