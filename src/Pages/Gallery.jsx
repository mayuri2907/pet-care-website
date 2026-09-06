import { useState } from "react";
import { Heart, PawPrint } from "lucide-react";

const galleryItems = [
  {
    name: "Buddy",
    category: "Dogs",
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Milo",
    category: "Cats",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Coco",
    category: "Dogs",
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Luna",
    category: "Cats",
    image:
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Snowy",
    category: "Rabbits",
    image:
      "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Max",
    category: "Dogs",
    image:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Bella",
    category: "Cats",
    image:
      "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Oreo",
    category: "Rabbits",
    image:
      "https://images.unsplash.com/photo-1591561582301-7ce6588cc286?auto=format&fit=crop&w=800&q=85",
  },
];

const categories = ["All", "Dogs", "Cats", "Rabbits"];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <div className="min-h-screen bg-[#fffaf3]">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#f8efe5]">

        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#ead2bd] opacity-50" />

        <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-[#e8d8c7] opacity-50" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 text-center lg:px-8 lg:py-24">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#6f4e37] text-white shadow-lg">
            <PawPrint size={30} />
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-[0.25em] text-[#b96f49]">
            Our Happy Patients
          </p>

          <h1 className="mt-3 text-4xl font-black text-[#3d2b1f] sm:text-5xl lg:text-6xl">
            Little Paws,
            <span className="block text-[#b96f49]">
              Big Memories
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#735b4c] sm:text-lg">
            Take a look at some of the adorable pets who have
            visited PawCare and filled our clinic with happiness.
          </p>

        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">

        {/* Heading */}
        <div className="text-center">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b96f49]">
            Pet Gallery
          </p>

          <h2 className="mt-2 text-3xl font-black text-[#3d2b1f] sm:text-4xl">
            Meet our adorable friends
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#806756]">
            Every pet has a unique personality and a special place
            in our hearts.
          </p>

        </div>

        {/* ================= FILTER BUTTONS ================= */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#6f4e37] text-white shadow-lg"
                  : "border border-[#eadbc8] bg-white text-[#6b5142] hover:-translate-y-1 hover:bg-[#f1e3d2]"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

        {/* ================= IMAGE GRID ================= */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {filteredItems.map((item) => (
            <div
              key={item.name}
              className="group relative overflow-hidden rounded-[1.75rem] bg-[#f1e3d2] shadow-md"
            >

              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3d2b1f]/80 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

              {/* Pet Details */}
              <div className="absolute inset-x-0 bottom-0 translate-y-5 p-5 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">

                <div className="flex items-end justify-between">

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#f1c1a6]">
                      {item.category}
                    </p>

                    <h3 className="mt-1 text-xl font-black text-white">
                      {item.name}
                    </h3>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#c9825b]">
                    <Heart
                      size={18}
                      className="fill-[#c9825b]"
                    />
                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="py-20 text-center">
            <PawPrint
              size={45}
              className="mx-auto text-[#c9825b]"
            />

            <p className="mt-4 font-semibold text-[#6b5142]">
              No pets found in this category.
            </p>
          </div>
        )}

      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">

        <div className="rounded-[2rem] bg-[#f1e3d2] px-7 py-12 text-center sm:px-12">

          <Heart
            size={35}
            className="mx-auto fill-[#c9825b] text-[#c9825b]"
          />

          <h2 className="mt-4 text-3xl font-black text-[#3d2b1f]">
            Your pet could be our next star! 🐾
          </h2>

          <p className="mx-auto mt-3 max-w-xl leading-7 text-[#735b4c]">
            Bring your furry friend to PawCare and become part of
            our happy pet family.
          </p>

        </div>

      </section>

    </div>
  );
}

export default Gallery;