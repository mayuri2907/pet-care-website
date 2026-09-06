import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Camera,
  Heart,
  PawPrint,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Gallery() {
  const pageRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const pets = [
    {
      image:
        "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80",
      name: "Buddy",
      category: "Dogs",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=800&q=80",
      name: "Milo",
      category: "Cats",
    },
    {
      image:
        "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80",
      name: "Snowy",
      category: "Rabbits",
    },
    {
      image:
        "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80",
      name: "Max",
      category: "Dogs",
    },
    {
      image:
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80",
      name: "Luna",
      category: "Cats",
    },
    {
      image:
        "https://images.unsplash.com/photo-1535241749838-299277b6305f?auto=format&fit=crop&w=800&q=80",
      name: "Coco",
      category: "Dogs",
    },
    {
      image:
        "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=800&q=80",
      name: "Rocky",
      category: "Dogs",
    },
    {
      image:
        "https://images.unsplash.com/photo-1561948955-570b270e7c36?auto=format&fit=crop&w=800&q=80",
      name: "Bella",
      category: "Cats",
    },
  ];

  const categories = ["All", "Dogs", "Cats", "Rabbits"];

  const filteredPets =
    activeCategory === "All"
      ? pets
      : pets.filter((pet) => pet.category === activeCategory);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // HERO
      const hero = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      hero
        .from(".gallery-badge", {
          y: 25,
          opacity: 0,
          duration: 0.5,
        })
        .from(
          ".gallery-title",
          {
            y: 45,
            opacity: 0,
            scale: 0.96,
            duration: 0.7,
          },
          "-=0.25"
        )
        .from(
          ".gallery-description",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.3"
        )
        .from(
          ".gallery-filters",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.25"
        );

      // GALLERY CARDS
      gsap.from(".gallery-card", {
        scrollTrigger: {
          trigger: ".gallery-grid",
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
        y: 45,
        opacity: 0,
        scale: 0.9,
        duration: 0.65,
        stagger: 0.1,
        ease: "back.out(1.4)",
      });

      // CTA
      gsap.from(".gallery-cta", {
        scrollTrigger: {
          trigger: ".gallery-cta",
          start: "top 88%",
        },
        y: 40,
        opacity: 0,
        scale: 0.96,
        duration: 0.7,
        ease: "power3.out",
      });

      // IMAGE HOVER
      const cards = document.querySelectorAll(".gallery-card");

      cards.forEach((card) => {
        const image = card.querySelector(".gallery-image");
        const overlay = card.querySelector(".gallery-overlay");
        const heart = card.querySelector(".gallery-heart");

        card.addEventListener("mouseenter", () => {
          gsap.to(image, {
            scale: 1.1,
            duration: 0.45,
            ease: "power2.out",
          });

          gsap.to(overlay, {
            opacity: 1,
            duration: 0.25,
          });

          gsap.to(heart, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "back.out(1.7)",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(image, {
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
          });

          gsap.to(overlay, {
            opacity: 0,
            duration: 0.25,
          });

          gsap.to(heart, {
            scale: 0,
            rotation: -20,
            duration: 0.2,
          });
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <div
      ref={pageRef}
      className="min-h-screen bg-[#fffaf3] text-[#3d2b1f] overflow-hidden"
    >
      {/* HERO */}
      <section className="px-6 pt-24 pb-14">
        <div className="max-w-6xl mx-auto text-center">
          <div className="gallery-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ead8c0] text-[#8b5e3c] text-sm font-semibold mb-6">
            <Camera size={17} />
            Our Happy Pets
          </div>

          <h1 className="gallery-title text-4xl md:text-6xl font-extrabold leading-tight">
            Moments That
            <span className="block text-[#9a6545]">
              Make Us Smile
            </span>
          </h1>

          <p className="gallery-description max-w-2xl mx-auto mt-6 text-[#765c4c] text-lg leading-8">
            Take a look at some of our adorable friends and the happy
            moments they have shared with us.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="px-6 pb-10">
        <div className="gallery-filters flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#8b5e3c] text-white shadow-lg scale-105"
                  : "bg-white border border-[#ead8c0] text-[#765c4c] hover:bg-[#f1e4d4]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-6 py-8">
        <div className="gallery-grid max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPets.map((pet, index) => (
            <div
              key={`${pet.name}-${index}`}
              className="gallery-card group relative h-80 rounded-3xl overflow-hidden shadow-md cursor-pointer bg-[#ead8c0]"
            >
              <img
                src={pet.image}
                alt={pet.name}
                className="gallery-image w-full h-full object-cover"
              />

              {/* OVERLAY */}
              <div className="gallery-overlay absolute inset-0 opacity-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent">
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
                  <div>
                    <p className="text-xl font-bold">{pet.name}</p>
                    <p className="text-sm text-white/80">
                      {pet.category}
                    </p>
                  </div>

                  <div className="gallery-heart w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center scale-0 -rotate-20">
                    <Heart size={19} fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16">
        <div className="gallery-cta max-w-5xl mx-auto rounded-3xl bg-[#3d2b1f] text-white px-8 py-12 md:px-14 text-center shadow-xl">
          <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#ead8c0] text-[#8b5e3c] flex items-center justify-center">
            <PawPrint size={30} />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold">
            Want Your Pet To Be Part Of Our Story?
          </h2>

          <p className="mt-4 text-[#ead8c0] max-w-2xl mx-auto leading-7">
            Bring your furry friend to PawCare and create some happy
            memories with us.
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

export default Gallery;