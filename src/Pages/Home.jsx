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

     {/* ================= WHY CHOOSE US ================= */}
<section className="why-section px-6 md:px-12 lg:px-20 py-12 md:py-14">
  <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <div className="why-title text-center max-w-2xl mx-auto">
      <span className="text-[#a66a44] font-semibold text-sm tracking-wider">
        WHY CHOOSE US
      </span>

      <h2 className="text-3xl md:text-4xl font-bold text-[#3d2b1f] mt-2">
        Everything Your Pet Needs
      </h2>

      <p className="text-[#735f52] mt-3 text-base md:text-lg leading-relaxed">
        Quality care, experienced professionals and a loving environment
        for every pet.
      </p>
    </div>

    {/* Trust Stats */}
    <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 mt-7 mb-7">
      
      <div className="bg-[#f3e5d8] px-4 py-2 rounded-full text-sm font-semibold text-[#70482f]">
        🐾 1000+ Happy Pets
      </div>

      <div className="bg-[#f3e5d8] px-4 py-2 rounded-full text-sm font-semibold text-[#70482f]">
        ⭐ 4.9/5 Rating
      </div>

      <div className="bg-[#f3e5d8] px-4 py-2 rounded-full text-sm font-semibold text-[#70482f]">
        🩺 Expert Care
      </div>

    </div>

    {/* Cards */}
    <div className="why-cards grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">

      {/* Card 1 */}
      <div className="why-card group bg-white rounded-2xl p-6 border border-[#eadbce] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

        <div className="flex items-start gap-4">

          <div className="w-12 h-12 shrink-0 rounded-xl bg-[#f3e5d8] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <ShieldCheck
              size={25}
              className="text-[#a66a44]"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#3d2b1f]">
              Expert Veterinary Care
            </h3>

            <p className="text-[#735f52] mt-2 leading-relaxed">
              Professional health checkups and treatment from experienced
              veterinary experts.
            </p>
          </div>

        </div>

      </div>

      {/* Card 2 */}
      <div className="why-card group bg-white rounded-2xl p-6 border border-[#eadbce] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

        <div className="flex items-start gap-4">

          <div className="w-12 h-12 shrink-0 rounded-xl bg-[#f3e5d8] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Heart
              size={25}
              className="text-[#a66a44]"
              fill="#a66a44"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#3d2b1f]">
              Loving Environment
            </h3>

            <p className="text-[#735f52] mt-2 leading-relaxed">
              We treat every pet with kindness, patience and genuine care.
            </p>
          </div>

        </div>

      </div>

    </div>

    {/* Small Bottom Message */}
    <div className="text-center mt-7">
      <p className="text-[#806b5d] text-sm">
        ❤️ Because your pet deserves care that feels like home.
      </p>
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