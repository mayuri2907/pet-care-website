import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  CalendarDays,
  Clock,
  User,
  Phone,
  Mail,
  PawPrint,
  CheckCircle2,
  ArrowLeft,
  Send,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Appointment() {
  const pageRef = useRef(null);

  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    petName: "",
    date: "",
    time: "",
    service: "",
  });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const hero = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      hero
        .from(".appointment-badge", {
          y: 25,
          opacity: 0,
          duration: 0.5,
        })
        .from(
          ".appointment-title",
          {
            y: 40,
            opacity: 0,
            scale: 0.96,
            duration: 0.7,
          },
          "-=0.25"
        )
        .from(
          ".appointment-description",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.3"
        );

      // FORM
      gsap.from(".appointment-form", {
        scrollTrigger: {
          trigger: ".appointment-form",
          start: "top 82%",
        },
        y: 45,
        opacity: 0,
        scale: 0.96,
        duration: 0.7,
        ease: "power3.out",
      });

      // INFO CARDS
      gsap.from(".appointment-info", {
        scrollTrigger: {
          trigger: ".appointment-info-wrapper",
          start: "top 82%",
        },
        x: 45,
        opacity: 0,
        duration: 0.65,
        stagger: 0.12,
        ease: "power3.out",
      });

      // FORM FIELDS
      gsap.from(".form-field", {
        scrollTrigger: {
          trigger: ".appointment-form",
          start: "top 78%",
        },
        y: 15,
        opacity: 0,
        duration: 0.4,
        stagger: 0.07,
        ease: "power2.out",
        delay: 0.2,
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
        ".success-card",
        {
          scale: 0.8,
          opacity: 0,
          y: 30,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
        }
      );

      gsap.fromTo(
        ".success-icon",
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
        <div className="success-card max-w-xl w-full bg-white border border-[#ead8c0] rounded-3xl p-10 md:p-14 text-center shadow-xl">
          <div className="success-icon w-20 h-20 mx-auto mb-6 rounded-full bg-[#f1e4d4] text-[#8b5e3c] flex items-center justify-center">
            <CheckCircle2 size={42} />
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold">
            Appointment Booked!
          </h1>

          <p className="mt-4 text-[#765c4c] leading-7">
            Thank you, {formData.name}! Your appointment request for{" "}
            <span className="font-bold text-[#8b5e3c]">
              {formData.petName}
            </span>{" "}
            has been received.
          </p>

          <div className="mt-7 p-5 rounded-2xl bg-[#fffaf3] border border-[#ead8c0] text-left space-y-3">
            <p>
              <strong>Date:</strong> {formData.date}
            </p>

            <p>
              <strong>Time:</strong> {formData.time}
            </p>

            <p>
              <strong>Service:</strong> {formData.service}
            </p>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-full bg-[#8b5e3c] text-white font-bold hover:bg-[#70482f] transition"
          >
            <ArrowLeft size={18} />
            Back To Home
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
      <section className="px-6 pt-24 pb-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="appointment-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ead8c0] text-[#8b5e3c] text-sm font-semibold mb-6">
            <CalendarDays size={17} />
            Easy Online Booking
          </div>

          <h1 className="appointment-title text-4xl md:text-6xl font-extrabold leading-tight">
            Book An Appointment
            <span className="block text-[#9a6545]">
              For Your Best Friend
            </span>
          </h1>

          <p className="appointment-description max-w-2xl mx-auto mt-6 text-[#765c4c] text-lg leading-8">
            Fill in the details below and our team will be ready to take
            care of your furry friend.
          </p>
        </div>
      </section>

      {/* MAIN */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="appointment-form lg:col-span-2 bg-white border border-[#ead8c0] rounded-3xl p-7 md:p-10 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-[#f1e4d4] text-[#8b5e3c] flex items-center justify-center">
                <PawPrint size={24} />
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  Appointment Details
                </h2>

                <p className="text-sm text-[#765c4c]">
                  Tell us about you and your pet.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* NAME */}
              <div className="form-field">
                <label className="block text-sm font-semibold mb-2">
                  Your Name
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9a6545]"
                  />

                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-[#ead8c0] outline-none focus:border-[#8b5e3c] focus:ring-2 focus:ring-[#ead8c0] transition"
                  />
                </div>
              </div>

              {/* PHONE */}
              <div className="form-field">
                <label className="block text-sm font-semibold mb-2">
                  Phone Number
                </label>

                <div className="relative">
                  <Phone
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9a6545]"
                  />

                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-[#ead8c0] outline-none focus:border-[#8b5e3c] focus:ring-2 focus:ring-[#ead8c0] transition"
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div className="form-field">
                <label className="block text-sm font-semibold mb-2">
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9a6545]"
                  />

                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-[#ead8c0] outline-none focus:border-[#8b5e3c] focus:ring-2 focus:ring-[#ead8c0] transition"
                  />
                </div>
              </div>

              {/* PET NAME */}
              <div className="form-field">
                <label className="block text-sm font-semibold mb-2">
                  Pet Name
                </label>

                <div className="relative">
                  <PawPrint
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9a6545]"
                  />

                  <input
                    required
                    type="text"
                    name="petName"
                    value={formData.petName}
                    onChange={handleChange}
                    placeholder="Your pet's name"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-[#ead8c0] outline-none focus:border-[#8b5e3c] focus:ring-2 focus:ring-[#ead8c0] transition"
                  />
                </div>
              </div>

              {/* DATE */}
              <div className="form-field">
                <label className="block text-sm font-semibold mb-2">
                  Appointment Date
                </label>

                <div className="relative">
                  <CalendarDays
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9a6545]"
                  />

                  <input
                    required
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-[#ead8c0] outline-none focus:border-[#8b5e3c] focus:ring-2 focus:ring-[#ead8c0] transition"
                  />
                </div>
              </div>

              {/* TIME */}
              <div className="form-field">
                <label className="block text-sm font-semibold mb-2">
                  Preferred Time
                </label>

                <div className="relative">
                  <Clock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9a6545]"
                  />

                  <select
                    required
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-[#ead8c0] outline-none focus:border-[#8b5e3c] focus:ring-2 focus:ring-[#ead8c0] transition bg-white"
                  >
                    <option value="">Select time</option>
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>12:00 PM</option>
                    <option>02:00 PM</option>
                    <option>03:00 PM</option>
                    <option>04:00 PM</option>
                    <option>05:00 PM</option>
                    <option>06:00 PM</option>
                  </select>
                </div>
              </div>

              {/* SERVICE */}
              <div className="form-field md:col-span-2">
                <label className="block text-sm font-semibold mb-2">
                  Select Service
                </label>

                <select
                  required
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl border border-[#ead8c0] outline-none focus:border-[#8b5e3c] focus:ring-2 focus:ring-[#ead8c0] transition bg-white"
                >
                  <option value="">Choose a service</option>
                  <option>Veterinary Care</option>
                  <option>Pet Grooming</option>
                  <option>Vaccination</option>
                  <option>Pet Bath & Spa</option>
                  <option>Pet Health Care</option>
                  <option>Pet Training</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="form-field mt-7 w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-[#8b5e3c] text-white font-bold hover:bg-[#70482f] hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
            >
              Confirm Appointment
              <Send size={18} />
            </button>
          </form>

          {/* INFO */}
          <div className="appointment-info-wrapper space-y-5">
            <div className="appointment-info bg-[#3d2b1f] text-white rounded-3xl p-7">
              <div className="w-12 h-12 rounded-2xl bg-[#ead8c0] text-[#8b5e3c] flex items-center justify-center mb-5">
                <Clock size={24} />
              </div>

              <h3 className="text-xl font-bold">
                Opening Hours
              </h3>

              <div className="mt-4 space-y-3 text-[#ead8c0] text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9 AM - 7 PM</span>
                </div>

                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10 AM - 6 PM</span>
                </div>

                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>10 AM - 4 PM</span>
                </div>
              </div>
            </div>

            <div className="appointment-info bg-white border border-[#ead8c0] rounded-3xl p-7">
              <div className="w-12 h-12 rounded-2xl bg-[#f1e4d4] text-[#8b5e3c] flex items-center justify-center mb-5">
                <PawPrint size={24} />
              </div>

              <h3 className="text-xl font-bold">
                Why Choose PawCare?
              </h3>

              <ul className="mt-5 space-y-3 text-sm text-[#765c4c]">
                <li className="flex gap-2">
                  <CheckCircle2
                    size={18}
                    className="text-[#9a6545] flex-shrink-0"
                  />
                  Experienced veterinary professionals
                </li>

                <li className="flex gap-2">
                  <CheckCircle2
                    size={18}
                    className="text-[#9a6545] flex-shrink-0"
                  />
                  Friendly and comfortable environment
                </li>

                <li className="flex gap-2">
                  <CheckCircle2
                    size={18}
                    className="text-[#9a6545] flex-shrink-0"
                  />
                  Complete pet care under one roof
                </li>

                <li className="flex gap-2">
                  <CheckCircle2
                    size={18}
                    className="text-[#9a6545] flex-shrink-0"
                  />
                  Loving care for every pet
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Appointment;