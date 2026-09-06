import { Link } from "react-router-dom";
import {
  CalendarDays,
  Star,
  Award,
  Heart,
  ArrowRight,
} from "lucide-react";

const doctors = [
  {
    name: "Dr. Rahul Sharma",
    role: "Veterinary Specialist",
    experience: "8+ Years Experience",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Dr. Priya Patel",
    role: "Pet Surgeon",
    experience: "7+ Years Experience",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Dr. Neha Shah",
    role: "Pet Care Specialist",
    experience: "6+ Years Experience",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=700&q=85",
  },
];

function Doctors() {
  return (
    <div className="min-h-screen bg-[#fffaf3]">

      {/* ================= HERO ================= */}
      <section className="bg-[#f8efe5]">
        <div className="mx-auto max-w-7xl px-5 py-20 text-center lg:px-8 lg:py-24">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#6f4e37] text-white shadow-lg">
            <Heart size={30} className="fill-white" />
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-[0.25em] text-[#b96f49]">
            Meet Our Team
          </p>

          <h1 className="mt-3 text-4xl font-black text-[#3d2b1f] sm:text-5xl lg:text-6xl">
            Caring Hands,
            <span className="block text-[#b96f49]">
              Expert Hearts
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#735b4c] sm:text-lg">
            Our experienced veterinary team combines professional
            knowledge with genuine love for animals.
          </p>

        </div>
      </section>

      {/* ================= DOCTORS ================= */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">

        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b96f49]">
            Our Professionals
          </p>

          <h2 className="mt-2 text-3xl font-black text-[#3d2b1f] sm:text-4xl">
            Meet the people behind the care
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#806756]">
            Dedicated professionals who treat every pet like
            their own family member.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="group overflow-hidden rounded-[2rem] border border-[#eadbc8] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* Image */}
              <div className="relative h-80 overflow-hidden bg-[#f1e3d2]">

                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
                />

                {/* Rating */}
                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white px-3 py-2 text-sm font-bold text-[#6f4e37] shadow-md">
                  <Star
                    size={15}
                    className="fill-[#c9825b] text-[#c9825b]"
                  />
                  {doctor.rating}
                </div>

              </div>

              {/* Details */}
              <div className="p-7">

                <h3 className="text-xl font-extrabold text-[#3d2b1f]">
                  {doctor.name}
                </h3>

                <p className="mt-1 font-semibold text-[#b96f49]">
                  {doctor.role}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm text-[#806756]">
                  <Award
                    size={17}
                    className="text-[#c9825b]"
                  />
                  {doctor.experience}
                </div>

                <div className="mt-6 border-t border-[#eee1d4] pt-5">

                  <Link
                    to="/appointment"
                    className="group/link inline-flex items-center gap-2 text-sm font-bold text-[#6f4e37] transition hover:text-[#b96f49]"
                  >
                    Book with doctor
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    />
                  </Link>

                </div>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ================= WHY OUR TEAM ================= */}
      <section className="bg-[#f8efe5]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Text */}
            <div>

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b96f49]">
                Professional & Caring
              </p>

              <h2 className="mt-3 text-4xl font-black leading-tight text-[#3d2b1f] sm:text-5xl">
                Your pet is in
                <span className="block text-[#b96f49]">
                  safe hands.
                </span>
              </h2>

              <p className="mt-6 leading-8 text-[#735b4c]">
                We focus on creating a comfortable and stress-free
                experience for both pets and their owners.
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#6f4e37] shadow-sm">
                    <Award size={19} />
                  </div>

                  <span className="font-semibold text-[#5d4638]">
                    Experienced veterinary professionals
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#6f4e37] shadow-sm">
                    <Heart size={19} />
                  </div>

                  <span className="font-semibold text-[#5d4638]">
                    Compassionate and friendly treatment
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#6f4e37] shadow-sm">
                    <Star size={19} />
                  </div>

                  <span className="font-semibold text-[#5d4638]">
                    Trusted by hundreds of pet parents
                  </span>
                </div>

              </div>

              <Link
                to="/appointment"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#6f4e37] px-7 py-4 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#583c2c]"
              >
                <CalendarDays size={19} />
                Meet Our Team
                <ArrowRight size={18} />
              </Link>

            </div>

            {/* Image */}
            <div className="relative">

              <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-full bg-[#ead2bd]" />

              <div className="relative overflow-hidden rounded-[2.5rem] border-8 border-white shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1000&q=85"
                  alt="Veterinary care"
                  className="h-[450px] w-full object-cover"
                />
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Doctors;