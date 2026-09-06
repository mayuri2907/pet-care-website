import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  PawPrint,
  ArrowRight,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const pageRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const hero = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      hero
        .from(".contact-badge", {
          y: 25,
          opacity: 0,
          duration: 0.5,
        })
        .from(
          ".contact-title",
          {
            y: 40,
            opacity: 0,
            scale: 0.96,
            duration: 0.7,
          },
          "-=0.25"
        )
        .from(
          ".contact-description",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.3"
        );

      // CONTACT INFO
      gsap.from(".contact-info-card", {
        scrollTrigger: {
          trigger: ".contact-info-wrapper",
          start: "top 82%",
        },
        x: -45,
        opacity: 0,
        duration: 0.65,
        stagger: 0.12,
        ease: "power3.out",
      });

      // FORM
      gsap.from(".contact-form", {
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 82%",
        },
        x: 45,
        opacity: 0,
        scale: 0.96,
        duration: 0.7,
        ease: "power3.out",
      });

      // FORM FIELDS
      gsap.from(".contact-field", {
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 78%",
        },
        y: 15,
        opacity: 0,
        duration: 0.4,
        stagger: 0.08,
        ease: "power2.out",
        delay: 0.2,
      });

      // CTA
      gsap.from(".contact-cta", {
        scrollTrigger: {
          trigger: ".contact-cta",
          start: "top 88%",
        },
        y: 40,
        opacity: 0,
        scale: 0.96,
        duration: 0.7,
        ease: "power3.out",
      });

      // INFO CARD HOVER
      document.querySelectorAll(".contact-info-card").forEach((card) => {
        const icon = card.querySelector(".contact-icon");

        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -7,
            scale: 1.02,
            duration: 0.25,
            ease: "power2.out",
          });

          gsap.to(icon, {
            scale: 1.12,
            rotate: 6,
            duration: 0.25,
            ease: "back.out(1.5)",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
          });

          gsap.to(icon, {
            scale: 1,
            rotate: 0,
            duration: 0.3,
          });
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      gsap.fromTo(
        ".contact-success",
        {
          opacity: 0,
          scale: 0.8,
          y: 30,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
        }
      );

      gsap.fromTo(
        ".contact-success-icon",
        {
          scale: 0,
          rotation: -30,
        },
        {
          scale: 1,
          rotation: 0,
          duration: 0.7,
          ease: "back.out(1.8)",
          delay: 0.15,
        }
      );
    }, 50);
  };

  if (submitted) {
    return (
      <div
        ref={pageRef}
        className="min-h-screen bg-[#fffaf3] flex items-center justify-center px-6 py-20"
      >
        <div className="contact-success max-w-xl w-full bg-white border border-[#ead8c0] rounded-3xl p-10 md:p-14 text-center shadow-xl">
          <div className="contact-success-icon w-20 h-20 mx-auto mb-6 rounded-full bg-[#f1e4d4] text-[#8b5e3c] flex items-center justify-center">
            <CheckCircle2 size={42} />
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold">
            Message Sent!
          </h1>

          <p className="mt-4 text-[#765c4c] leading-7">
            Thank you, {formData.name}! We have received your message
            and our team will get back to you soon.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-full bg-[#8b5e3c] text-white font-bold hover:bg-[#70482f] transition"
          >
            Back To Home
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={pageRef}
      className="min-h-screen bg-[#fffaf3] text-[#3d2b1f] overflow-hidden"
    >
      {/* HERO */}
      <section className="px-6 pt-24 pb-14">
        <div className="max-w-6xl mx-auto text-center">
          <div className="contact-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ead8c0] text-[#8b5e3c] text-sm font-semibold mb-6">
            <PawPrint size={17} />
            We Would Love To Hear From You
          </div>

          <h1 className="contact-title text-4xl md:text-6xl font-extrabold leading-tight">
            Let's Talk About
            <span className="block text-[#9a6545]">
              Your Pet
            </span>
          </h1>

          <p className="contact-description max-w-2xl mx-auto mt-6 text-[#765c4c] text-lg leading-8">
            Have a question, need help or want to know more about our
            services? Send us a message.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* INFO */}
          <div className="contact-info-wrapper lg:col-span-2 space-y-5">
            <div className="contact-info-card bg-[#3d2b1f] text-white rounded-3xl p-7 cursor-pointer">
              <div className="contact-icon w-12 h-12 rounded-2xl bg-[#ead8c0] text-[#8b5e3c] flex items-center justify-center mb-5">
                <MapPin size={24} />
              </div>

              <h3 className="text-xl font-bold">Visit Us</h3>

              <p className="mt-3 text-[#ead8c0] text-sm leading-6">
                PawCare Pet Clinic
                <br />
                Main Road, Sanchore
                <br />
                Rajasthan, India
              </p>
            </div>

            <div className="contact-info-card bg-white border border-[#ead8c0] rounded-3xl p-7 cursor-pointer">
              <div className="contact-icon w-12 h-12 rounded-2xl bg-[#f1e4d4] text-[#8b5e3c] flex items-center justify-center mb-5">
                <Phone size={24} />
              </div>

              <h3 className="text-xl font-bold">Call Us</h3>

              <p className="mt-3 text-[#765c4c] text-sm">
                +91 98765 43210
              </p>

              <p className="mt-1 text-[#765c4c] text-sm">
                Mon - Sat, 9 AM - 7 PM
              </p>
            </div>

            <div className="contact-info-card bg-white border border-[#ead8c0] rounded-3xl p-7 cursor-pointer">
              <div className="contact-icon w-12 h-12 rounded-2xl bg-[#f1e4d4] text-[#8b5e3c] flex items-center justify-center mb-5">
                <Mail size={24} />
              </div>

              <h3 className="text-xl font-bold">Email Us</h3>

              <p className="mt-3 text-[#765c4c] text-sm">
                hello@pawcare.com
              </p>
            </div>

            <div className="contact-info-card bg-white border border-[#ead8c0] rounded-3xl p-7 cursor-pointer">
              <div className="contact-icon w-12 h-12 rounded-2xl bg-[#f1e4d4] text-[#8b5e3c] flex items-center justify-center mb-5">
                <Clock size={24} />
              </div>

              <h3 className="text-xl font-bold">Opening Hours</h3>

              <p className="mt-3 text-[#765c4c] text-sm leading-6">
                Monday - Friday: 9 AM - 7 PM
                <br />
                Saturday: 10 AM - 6 PM
                <br />
                Sunday: 10 AM - 4 PM
              </p>
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="contact-form lg:col-span-3 bg-white border border-[#ead8c0] rounded-3xl p-7 md:p-10 shadow-sm"
          >
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">
                Send Us A Message
              </h2>

              <p className="mt-2 text-[#765c4c] text-sm">
                Fill out the form and we'll get back to you.
              </p>
            </div>

            <div className="space-y-5">
              <div className="contact-field">
                <label className="block text-sm font-semibold mb-2">
                  Your Name
                </label>

                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3.5 rounded-xl border border-[#ead8c0] outline-none focus:border-[#8b5e3c] focus:ring-2 focus:ring-[#ead8c0] transition"
                />
              </div>

              <div className="contact-field grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email Address
                  </label>

                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3.5 rounded-xl border border-[#ead8c0] outline-none focus:border-[#8b5e3c] focus:ring-2 focus:ring-[#ead8c0] transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Phone Number
                  </label>

                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="w-full px-4 py-3.5 rounded-xl border border-[#ead8c0] outline-none focus:border-[#8b5e3c] focus:ring-2 focus:ring-[#ead8c0] transition"
                  />
                </div>
              </div>

              <div className="contact-field">
                <label className="block text-sm font-semibold mb-2">
                  Message
                </label>

                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3.5 rounded-xl border border-[#ead8c0] outline-none resize-none focus:border-[#8b5e3c] focus:ring-2 focus:ring-[#ead8c0] transition"
                />
              </div>

              <button
                type="submit"
                className="contact-field w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-[#8b5e3c] text-white font-bold hover:bg-[#70482f] hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
              >
                Send Message
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16">
        <div className="contact-cta max-w-5xl mx-auto rounded-3xl bg-[#3d2b1f] text-white px-8 py-12 md:px-14 text-center shadow-xl">
          <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#ead8c0] text-[#8b5e3c] flex items-center justify-center">
            <PawPrint size={30} />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold">
            Your Pet Is Always Welcome At PawCare
          </h2>

          <p className="mt-4 text-[#ead8c0] max-w-2xl mx-auto leading-7">
            From tiny paws to big personalities, we're here to care for
            every furry friend.
          </p>

          <Link
            to="/appointment"
            className="inline-flex items-center gap-2 mt-7 px-7 py-3.5 rounded-full bg-[#ead8c0] text-[#3d2b1f] font-bold hover:bg-white transition"
          >
            Book Appointment
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Contact;