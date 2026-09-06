import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  Heart,
  PawPrint,
  ShieldCheck,
  Stethoscope,
  Star,
} from "lucide-react";
import gsap from "gsap";

function Home() {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-badge", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      })
        .from(
          ".hero-title",
          {
            y: 50,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".hero-text",
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.5"
        )
        .from(
          ".hero-buttons",
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ".hero-image",
          {
            x: 80,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8"
        )
        .from(
          ".stats-card",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
          },
          "-=0.5"
        );

      gsap.from(".feature-card", {
        scrollTrigger: {
          trigger: ".features-section",
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="bg-[#fffaf3] text-[#3d2b1f]">

      {/* HERO */}
      <section className="overflow-hidden px-5 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          {/* Left */}
          <div>
            <div className="hero-badge inline-flex items-center gap-2 rounded-full bg-[#ead8c0] px-4 py-2 text-sm font-semibold text-[#765039]">
              <PawPrint size={17} />
              Trusted Pet Care
            </div>

            <h1 className="hero-title mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Loving Care For
              <span className="block text-[#9a6545]">
                Your Best Friend 🐾
              </span>
            </h1>

            <p className="hero-text mt-6 max-w-xl text-lg leading-8 text-[#765f50]">
              Professional and compassionate healthcare services
              designed to keep your pets happy, healthy and full of life.
            </p>

            <div className="hero-buttons mt-8 flex flex-wrap gap-4">
              <Link
                to="/appointment"
                className="inline-flex items-center gap-2 rounded-xl bg-[#8b5e3c] px-6 py-3.5 font-bold text-white shadow-md transition hover:bg-[#70482f] hover:shadow-lg"
              >
                <CalendarDays size={19} />
                Book Appointment
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-[#cdb99f] bg-white px-6 py-3.5 font-bold text-[#70482f] transition hover:bg-[#f5ecdf]"
              >
                Explore Services
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="hero-image relative">
            <div className="overflow-hidden rounded-[2rem] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1000&q=80"
                alt="Happy pet"
                className="h-[420px] w-full object-cover sm:h-[500px]"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl sm:left-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ead8c0] text-[#8b5e3c]">
                <Heart size={23} className="fill-current" />
              </div>

              <div>
                <p className="font-bold">Happy Pets</p>
                <p className="text-sm text-[#765f50]">
                  5,000+ cared for
                </p>
              </div>
            </div>

            {/* Rating */}
            <div className="absolute right-4 top-5 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-xl sm:right-7">
              <Star
                size={19}
                className="fill-[#c58b52] text-[#c58b52]"
              />
              <span className="font-bold">4.9</span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-5 pb-20">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 lg:grid-cols-4">

          <div className="stats-card rounded-2xl bg-white p-6 text-center shadow-sm">
            <h3 className="text-3xl font-extrabold text-[#8b5e3c]">
              10+
            </h3>
            <p className="mt-1 text-sm text-[#765f50]">
              Years Experience
            </p>
          </div>

          <div className="stats-card rounded-2xl bg-white p-6 text-center shadow-sm">
            <h3 className="text-3xl font-extrabold text-[#8b5e3c]">
              5K+
            </h3>
            <p className="mt-1 text-sm text-[#765f50]">
              Happy Pets
            </p>
          </div>

          <div className="stats-card rounded-2xl bg-white p-6 text-center shadow-sm">
            <h3 className="text-3xl font-extrabold text-[#8b5e3c]">
              15+
            </h3>
            <p className="mt-1 text-sm text-[#765f50]">
              Expert Doctors
            </p>
          </div>

          <div className="stats-card rounded-2xl bg-white p-6 text-center shadow-sm">
            <h3 className="text-3xl font-extrabold text-[#8b5e3c]">
              24/7
            </h3>
            <p className="mt-1 text-sm text-[#765f50]">
              Pet Support
            </p>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section px-5 pb-20">
        <div className="mx-auto max-w-6xl">

          <div className="mb-10 text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-[#9a6545]">
              Why Choose Us
            </span>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Everything Your Pet Needs
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[#765f50]">
              Quality care, experienced professionals and a loving
              environment for every pet.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            <div className="feature-card rounded-3xl border border-[#eadcca] bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f1e4d4] text-[#8b5e3c]">
                <Stethoscope size={28} />
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Expert Veterinary Care
              </h3>

              <p className="mt-3 leading-7 text-[#765f50]">
                Professional health checkups and treatment from
                experienced veterinary experts.
              </p>
            </div>

            <div className="feature-card rounded-3xl border border-[#eadcca] bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f1e4d4] text-[#8b5e3c]">
                <Heart size={28} />
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Loving Environment
              </h3>

              <p className="mt-3 leading-7 text-[#765f50]">
                We treat every pet with kindness, patience and
                genuine care.
              </p>
            </div>

            <div className="feature-card rounded-3xl border border-[#eadcca] bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f1e4d4] text-[#8b5e3c]">
                <ShieldCheck size={28} />
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Safe & Trusted
              </h3>

              <p className="mt-3 leading-7 text-[#765f50]">
                Your pet's safety and comfort are always our top
                priorities.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20">
        <div className="mx-auto max-w-6xl rounded-3xl bg-[#3d2b1f] px-6 py-12 text-center text-white sm:px-12">

          <PawPrint className="mx-auto" size={36} />

          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Give Your Pet the Care They Deserve
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[#e5d8ce]">
            Book an appointment today and take the first step toward
            a healthier and happier pet.
          </p>

          <Link
            to="/appointment"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-[#3d2b1f] transition hover:bg-[#f0e1cf]"
          >
            <CalendarDays size={19} />
            Book Appointment
          </Link>

        </div>
      </section>

    </div>
  );
}

export default Home;