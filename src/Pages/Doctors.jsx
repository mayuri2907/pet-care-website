import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Star,
  CalendarDays,
  Stethoscope,
  Award,
  ArrowRight,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Doctors() {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // HERO ANIMATION
      const hero = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      hero
        .from(".doctors-badge", {
          y: 25,
          opacity: 0,
          duration: 0.5,
        })
        .from(
          ".doctors-title",
          {
            y: 45,
            opacity: 0,
            scale: 0.96,
            duration: 0.7,
          },
          "-=0.25"
        )
        .from(
          ".doctors-description",
          {
            y: 25,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.35"
        );

      // DOCTOR CARDS
      gsap.from(".doctor-card", {
        scrollTrigger: {
          trigger: ".doctors-grid",
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        scale: 0.9,
        duration: 0.65,
        stagger: 0.14,
        ease: "back.out(1.5)",
      });

      // DOCTOR IMAGES
      gsap.from(".doctor-image", {
        scrollTrigger: {
          trigger: ".doctors-grid",
          start: "top 78%",
        },
        scale: 1.18,
        opacity: 0,
        duration: 0.8,
        stagger: 0.14,
        ease: "power2.out",
      });

      // BOTTOM CTA
      gsap.from(".doctors-cta", {
        scrollTrigger: {
          trigger: ".doctors-cta",
          start: "top 88%",
        },
        y: 45,
        opacity: 0,
        scale: 0.96,
        duration: 0.7,
        ease: "power3.out",
      });

      // HOVER EFFECT
      const cards = document.querySelectorAll(".doctor-card");

      cards.forEach((card) => {
        const image = card.querySelector(".doctor-image");
        const button = card.querySelector(".doctor-button");

        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -10,
            scale: 1.025,
            duration: 0.25,
            ease: "power2.out",
          });

          gsap.to(image, {
            scale: 1.08,
            duration: 0.4,
            ease: "power2.out",
          });

          gsap.to(button, {
            x: 5,
            duration: 0.25,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });

          gsap.to(image, {
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
          });

          gsap.to(button, {
            x: 0,
            duration: 0.25,
            ease: "power2.out",
          });
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const doctors = [
    {
      name: "Dr. Rahul Sharma",
      role: "Veterinary Surgeon",
      experience: "10+ Years Experience",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=80",
    },
    {
      name: "Dr. Priya Patel",
      role: "Pet Care Specialist",
      experience: "8+ Years Experience",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=700&q=80",
    },
    {
      name: "Dr. Neha Shah",
      role: "Animal Health Expert",
      experience: "7+ Years Experience",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=700&q=80",
    },
  ];

  return (
    <div
      ref={pageRef}
      className="min-h-screen bg-[#fffaf3] text-[#3d2b1f] overflow-hidden"
    >
      {/* HERO */}
      <section className="px-6 pt-24 pb-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="doctors-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ead8c0] text-[#8b5e3c] text-sm font-semibold mb-6">
            <Stethoscope size={17} />
            Meet Our Experts
          </div>

          <h1 className="doctors-title text-4xl md:text-6xl font-extrabold leading-tight">
            Caring Hands Behind
            <span className="block text-[#9a6545]">
              Your Pet's Health
            </span>
          </h1>

          <p className="doctors-description max-w-2xl mx-auto mt-6 text-[#765c4c] text-lg leading-8">
            Our experienced veterinary professionals are dedicated to
            providing your pets with the best possible care.
          </p>
        </div>
      </section>

      {/* DOCTORS */}
      <section className="px-6 py-14">
        <div className="max-w-6xl mx-auto">
          <div className="doctors-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className="doctor-card bg-white border border-[#ead8c0] rounded-3xl overflow-hidden shadow-sm cursor-pointer"
              >
                {/* IMAGE */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="doctor-image w-full h-full object-cover"
                  />

                  {/* RATING */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/95 text-[#3d2b1f] text-sm font-bold shadow-md">
                    <Star
                      size={15}
                      fill="currentColor"
                      className="text-[#d99b45]"
                    />
                    {doctor.rating}
                  </div>
                </div>

                {/* INFO */}
                <div className="p-7">
                  <h2 className="text-2xl font-bold">
                    {doctor.name}
                  </h2>

                  <p className="mt-1 text-[#9a6545] font-semibold">
                    {doctor.role}
                  </p>

                  <div className="mt-5 space-y-3">
                    <div className="flex items-center gap-3 text-[#765c4c]">
                      <div className="w-9 h-9 rounded-xl bg-[#f1e4d4] flex items-center justify-center text-[#8b5e3c]">
                        <Award size={18} />
                      </div>

                      <span className="text-sm">
                        {doctor.experience}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-[#765c4c]">
                      <div className="w-9 h-9 rounded-xl bg-[#f1e4d4] flex items-center justify-center text-[#8b5e3c]">
                        <Stethoscope size={18} />
                      </div>

                      <span className="text-sm">
                        Professional Veterinary Care
                      </span>
                    </div>
                  </div>

                  <Link
                    to="/appointment"
                    className="doctor-button mt-6 inline-flex items-center gap-2 text-[#8b5e3c] font-bold"
                  >
                    Book Appointment
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16">
        <div className="doctors-cta max-w-5xl mx-auto rounded-3xl bg-[#3d2b1f] text-white px-8 py-12 md:px-14 text-center shadow-xl">
          <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#ead8c0] text-[#8b5e3c] flex items-center justify-center">
            <CalendarDays size={30} />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold">
            Your Pet Deserves The Best Care
          </h2>

          <p className="mt-4 text-[#ead8c0] max-w-2xl mx-auto leading-7">
            Schedule a consultation with one of our experienced
            veterinary doctors today.
          </p>

          <Link
            to="/appointment"
            className="inline-flex items-center gap-2 mt-7 px-7 py-3.5 rounded-full bg-[#ead8c0] text-[#3d2b1f] font-bold hover:bg-white transition"
          >
            Schedule Now
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Doctors;