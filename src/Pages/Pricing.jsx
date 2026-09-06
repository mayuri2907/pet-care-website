import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Check,
  Crown,
  Heart,
  PawPrint,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Pricing() {
  const pageRef = useRef(null);

  const plans = [
    {
      name: "Basic Care",
      price: "₹499",
      description: "Essential care for your furry friend.",
      icon: PawPrint,
      features: [
        "Basic Health Checkup",
        "General Consultation",
        "Basic Grooming",
        "Health Guidance",
      ],
      popular: false,
    },
    {
      name: "Premium Care",
      price: "₹999",
      description: "Complete care for a healthier, happier pet.",
      icon: Sparkles,
      features: [
        "Complete Health Checkup",
        "Vaccination",
        "Premium Grooming",
        "Nutrition Guidance",
        "Health Monitoring",
      ],
      popular: true,
    },
    {
      name: "VIP Care",
      price: "₹1,499",
      description: "The ultimate care experience for your pet.",
      icon: Crown,
      features: [
        "Full Health Assessment",
        "Vaccination",
        "Premium Grooming",
        "Nutrition Plan",
        "Priority Consultation",
        "Regular Follow-ups",
      ],
      popular: false,
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // HERO
      const hero = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      hero
        .from(".pricing-badge", {
          y: 25,
          opacity: 0,
          duration: 0.5,
        })
        .from(
          ".pricing-title",
          {
            y: 45,
            opacity: 0,
            scale: 0.96,
            duration: 0.7,
          },
          "-=0.25"
        )
        .from(
          ".pricing-description",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.3"
        );

      // PRICING CARDS
      gsap.from(".pricing-card", {
        scrollTrigger: {
          trigger: ".pricing-grid",
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
        y: 55,
        opacity: 0,
        scale: 0.9,
        duration: 0.7,
        stagger: 0.15,
        ease: "back.out(1.4)",
      });

      // ICONS
      gsap.from(".pricing-icon", {
        scrollTrigger: {
          trigger: ".pricing-grid",
          start: "top 78%",
        },
        scale: 0,
        rotation: -25,
        opacity: 0,
        duration: 0.55,
        stagger: 0.15,
        ease: "back.out(1.8)",
      });

      // FEATURES
      gsap.from(".pricing-feature", {
        scrollTrigger: {
          trigger: ".pricing-grid",
          start: "top 72%",
        },
        x: -15,
        opacity: 0,
        duration: 0.4,
        stagger: 0.07,
        ease: "power2.out",
        delay: 0.35,
      });

      // CTA
      gsap.from(".pricing-cta", {
        scrollTrigger: {
          trigger: ".pricing-cta",
          start: "top 88%",
        },
        y: 40,
        opacity: 0,
        scale: 0.96,
        duration: 0.7,
        ease: "power3.out",
      });

      // HOVER
      const cards = document.querySelectorAll(".pricing-card");

      cards.forEach((card) => {
        const icon = card.querySelector(".pricing-icon");
        const button = card.querySelector(".pricing-button");

        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -12,
            scale: 1.025,
            duration: 0.25,
            ease: "power2.out",
          });

          gsap.to(icon, {
            scale: 1.12,
            rotate: 8,
            duration: 0.3,
            ease: "back.out(1.5)",
          });

          if (button) {
            gsap.to(button, {
              x: 5,
              duration: 0.25,
              ease: "power2.out",
            });
          }
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });

          gsap.to(icon, {
            scale: 1,
            rotate: 0,
            duration: 0.3,
            ease: "power2.out",
          });

          if (button) {
            gsap.to(button, {
              x: 0,
              duration: 0.25,
              ease: "power2.out",
            });
          }
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={pageRef}
      className="min-h-screen bg-[#fffaf3] text-[#3d2b1f] overflow-hidden"
    >
      {/* HERO */}
      <section className="px-6 pt-24 pb-14">
        <div className="max-w-6xl mx-auto text-center">
          <div className="pricing-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ead8c0] text-[#8b5e3c] text-sm font-semibold mb-6">
            <Heart size={17} />
            Simple & Transparent Pricing
          </div>

          <h1 className="pricing-title text-4xl md:text-6xl font-extrabold leading-tight">
            Choose The Best
            <span className="block text-[#9a6545]">
              Care For Your Pet
            </span>
          </h1>

          <p className="pricing-description max-w-2xl mx-auto mt-6 text-[#765c4c] text-lg leading-8">
            Flexible plans designed to give your pet quality care without
            making things complicated.
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section className="px-6 py-12">
        <div className="pricing-grid max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <div
                key={index}
                className={`pricing-card relative bg-white rounded-3xl p-7 border shadow-sm cursor-pointer ${
                  plan.popular
                    ? "border-[#9a6545] shadow-lg"
                    : "border-[#ead8c0]"
                }`}
              >
                {/* POPULAR */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="px-5 py-2 rounded-full bg-[#8b5e3c] text-white text-xs font-bold shadow-lg">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                {/* ICON */}
                <div className="pricing-icon w-14 h-14 rounded-2xl bg-[#f1e4d4] text-[#8b5e3c] flex items-center justify-center mb-6">
                  <Icon size={28} />
                </div>

                <h2 className="text-2xl font-bold">
                  {plan.name}
                </h2>

                <p className="mt-2 text-[#765c4c] text-sm leading-6">
                  {plan.description}
                </p>

                {/* PRICE */}
                <div className="mt-7 mb-7">
                  <span className="text-4xl font-extrabold text-[#3d2b1f]">
                    {plan.price}
                  </span>

                  <span className="text-[#8b7566] ml-2 text-sm">
                    / visit
                  </span>
                </div>

                {/* FEATURES */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div
                      key={i}
                      className="pricing-feature flex items-center gap-3 text-sm text-[#654b3c]"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#f1e4d4] text-[#8b5e3c] flex items-center justify-center flex-shrink-0">
                        <Check size={14} />
                      </div>

                      {feature}
                    </div>
                  ))}
                </div>

                {/* BUTTON */}
                <Link
                  to="/appointment"
                  className={`pricing-button w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold transition ${
                    plan.popular
                      ? "bg-[#8b5e3c] text-white hover:bg-[#70482f]"
                      : "bg-[#f1e4d4] text-[#3d2b1f] hover:bg-[#ead8c0]"
                  }`}
                >
                  Choose Plan
                  <ArrowRight size={17} />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16">
        <div className="pricing-cta max-w-5xl mx-auto rounded-3xl bg-[#3d2b1f] text-white px-8 py-12 md:px-14 text-center shadow-xl">
          <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#ead8c0] text-[#8b5e3c] flex items-center justify-center">
            <PawPrint size={30} />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold">
            Not Sure Which Plan To Choose?
          </h2>

          <p className="mt-4 text-[#ead8c0] max-w-2xl mx-auto leading-7">
            Our team can help you choose the right care plan according to
            your pet's needs.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-7 px-7 py-3.5 rounded-full bg-[#ead8c0] text-[#3d2b1f] font-bold hover:bg-white transition"
          >
            Talk To Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Pricing;