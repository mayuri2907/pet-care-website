import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Scissors,
  Stethoscope,
  Syringe,
  Bath,
  HeartPulse,
  Dog,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // HERO
      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      heroTimeline
        .from(".services-hero-badge", {
          y: 25,
          opacity: 0,
          duration: 0.6,
        })
        .from(
          ".services-hero-title",
          {
            y: 45,
            opacity: 0,
            scale: 0.96,
            duration: 0.8,
          },
          "-=0.35"
        )
        .from(
          ".services-hero-text",
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.45"
        )
        .from(
          ".services-hero-btn",
          {
            y: 20,
            opacity: 0,
            scale: 0.9,
            duration: 0.5,
          },
          "-=0.3"
        );

      // SERVICE CARDS
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        scale: 0.92,
        duration: 0.7,
        stagger: 0.12,
        ease: "back.out(1.4)",
      });

      // CARD ICONS
      gsap.from(".service-icon", {
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 75%",
        },
        scale: 0,
        rotation: -25,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "back.out(1.8)",
        delay: 0.15,
      });

      // HEADING
      gsap.from(".services-heading", {
        scrollTrigger: {
          trigger: ".services-heading",
          start: "top 85%",
        },
        y: 35,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      // CTA
      gsap.from(".services-cta", {
        scrollTrigger: {
          trigger: ".services-cta",
          start: "top 85%",
        },
        y: 45,
        opacity: 0,
        scale: 0.96,
        duration: 0.8,
        ease: "power3.out",
      });

      // CARD HOVER
      const cards = document.querySelectorAll(".service-card");

      cards.forEach((card) => {
        const icon = card.querySelector(".service-icon");
        const arrow = card.querySelector(".service-arrow");

        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -10,
            scale: 1.025,
            duration: 0.25,
            ease: "power2.out",
          });

          gsap.to(icon, {
            rotate: 8,
            scale: 1.12,
            duration: 0.25,
            ease: "power2.out",
          });

          gsap.to(arrow, {
            x: 7,
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

          gsap.to(icon, {
            rotate: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });

          gsap.to(arrow, {
            x: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Stethoscope,
      title: "Veterinary Care",
      description:
        "Complete medical care and regular health checkups for your pets.",
      features: ["Health Checkup", "Diagnosis", "Treatment"],
    },
    {
      icon: Scissors,
      title: "Pet Grooming",
      description:
        "Professional grooming to keep your pet clean, fresh and happy.",
      features: ["Hair Cutting", "Nail Trimming", "Styling"],
    },
    {
      icon: Syringe,
      title: "Vaccination",
      description:
        "Essential vaccinations to protect your pets from common diseases.",
      features: ["Core Vaccines", "Booster Shots", "Health Records"],
    },
    {
      icon: Bath,
      title: "Pet Bath & Spa",
      description:
        "Relaxing bath and spa treatments designed specially for pets.",
      features: ["Deep Cleaning", "Skin Care", "Pet Massage"],
    },
    {
      icon: HeartPulse,
      title: "Pet Health Care",
      description:
        "Regular health monitoring and personalized wellness plans.",
      features: ["Health Monitoring", "Nutrition", "Wellness Plans"],
    },
    {
      icon: Dog,
      title: "Pet Training",
      description:
        "Positive and friendly training programs for better pet behavior.",
      features: ["Basic Training", "Obedience", "Behavior Training"],
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
          <div className="services-hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ead8c0] text-[#8b5e3c] text-sm font-semibold mb-6">
            <Dog size={17} />
            Professional Pet Care
          </div>

          <h1 className="services-hero-title text-4xl md:text-6xl font-extrabold leading-tight">
            Everything Your Pet
            <span className="block text-[#9a6545]">
              Needs Under One Roof
            </span>
          </h1>

          <p className="services-hero-text max-w-2xl mx-auto mt-6 text-[#765c4c] text-lg leading-8">
            From regular checkups to grooming and training, we provide
            complete care to keep your furry friends healthy and happy.
          </p>

          <Link
            to="/appointment"
            className="services-hero-btn inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-full bg-[#8b5e3c] text-white font-semibold shadow-lg hover:bg-[#70482f] transition"
          >
            Book Appointment
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="services-heading text-center mb-12">
            <p className="text-[#9a6545] font-semibold mb-2">
              OUR SERVICES
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Complete Care For Your Pet
            </h2>

            <p className="mt-4 text-[#765c4c]">
              Quality services delivered with love and care.
            </p>
          </div>

          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="service-card group relative bg-white border border-[#ead8c0] rounded-3xl p-7 shadow-sm cursor-pointer"
                >
                  <div className="service-icon w-14 h-14 flex items-center justify-center rounded-2xl bg-[#f1e4d4] text-[#8b5e3c] mb-6">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-bold mb-3">
                    {service.title}
                  </h3>

                  <p className="text-[#765c4c] leading-7 mb-5">
                    {service.description}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    {service.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-[#654b3c]"
                      >
                        <CheckCircle2
                          size={17}
                          className="text-[#9a6545]"
                        />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="service-arrow inline-flex items-center gap-2 text-[#8b5e3c] font-semibold">
                    Learn More
                    <ArrowRight size={17} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16">
        <div className="services-cta max-w-5xl mx-auto rounded-3xl bg-[#3d2b1f] text-white px-8 py-12 md:px-14 text-center shadow-xl">
          <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#ead8c0] text-[#8b5e3c] flex items-center justify-center">
            <HeartPulse size={30} />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold">
            Give Your Pet The Care They Deserve
          </h2>

          <p className="mt-4 text-[#ead8c0] max-w-2xl mx-auto leading-7">
            Book an appointment with our caring team and give your furry
            friend the best care possible.
          </p>

          <Link
            to="/appointment"
            className="inline-flex items-center gap-2 mt-7 px-7 py-3.5 rounded-full bg-[#ead8c0] text-[#3d2b1f] font-bold hover:bg-white transition"
          >
            Book Now
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Services;