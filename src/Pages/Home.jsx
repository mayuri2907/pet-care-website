import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  Heart,
  ShieldCheck,
  Stethoscope,
  Star,
  CheckCircle2,
} from "lucide-react";

function Home() {
  return (
    <div className="overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#fffaf3]">
        <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">

          {/* Left Content */}
          <div className="relative z-10">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#eadbc8] bg-white px-4 py-2 text-sm font-semibold text-[#8a624b] shadow-sm">
              <Heart size={16} className="fill-[#c9825b] text-[#c9825b]" />
              Trusted care for your best friend
            </div>

            <h1 className="max-w-2xl text-5xl font-black leading-[1.05] tracking-tight text-[#3d2b1f] sm:text-6xl lg:text-7xl">
              Because every
              <span className="block text-[#b96f49]">
                paw deserves
              </span>
              the best care.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#735b4c]">
              Loving, professional and reliable pet care for your furry
              family members. From regular checkups to grooming, we are
              here for every step of their journey.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <Link
                to="/appointment"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#6f4e37] px-7 py-4 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#583c2c] hover:shadow-xl"
              >
                <CalendarDays size={19} />
                Book Appointment
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#6f4e37] px-7 py-4 font-bold text-[#6f4e37] transition duration-300 hover:bg-[#6f4e37] hover:text-white"
              >
                Explore Services
                <ArrowRight size={18} />
              </Link>

            </div>

            {/* Trust Points */}
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-[#6b5142]">

              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-[#c9825b]" />
                Experienced Team
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-[#c9825b]" />
                Pet Friendly
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-[#c9825b]" />
                24/7 Support
              </div>

            </div>
          </div>

          {/* Right Image */}
          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">

            {/* Decorative circles */}
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#f1d8c6] opacity-70" />
            <div className="absolute -bottom-10 -left-8 h-40 w-40 rounded-full bg-[#eadbc8] opacity-70" />

            {/* Main Image */}
            <div className="relative overflow-hidden rounded-[3rem] border-8 border-white shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=85"
                alt="Happy dog"
                className="h-[520px] w-full object-cover transition duration-700 hover:scale-105"
              />

              {/* Image Overlay */}
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/30 bg-white/90 p-4 shadow-xl backdrop-blur-md">
                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f1e3d2]">
                      <Heart
                        size={21}
                        className="fill-[#c9825b] text-[#c9825b]"
                      />
                    </div>

                    <div>
                      <p className="font-bold text-[#3d2b1f]">
                        Happy Pets
                      </p>
                      <p className="text-xs text-[#806756]">
                        Healthy • Loved • Happy
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 rounded-full bg-[#fff4e8] px-3 py-2 text-sm font-bold text-[#8a624b]">
                    <Star
                      size={15}
                      className="fill-[#c9825b] text-[#c9825b]"
                    />
                    4.9
                  </div>

                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -left-6 top-16 hidden rounded-2xl border border-[#eadbc8] bg-white p-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f1e3d2] text-[#6f4e37]">
                  <Stethoscope size={21} />
                </div>

                <div>
                  <p className="text-sm font-extrabold text-[#3d2b1f]">
                    Expert Care
                  </p>
                  <p className="text-xs text-[#806756]">
                    Professional Team
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="border-y border-[#eadbc8] bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 py-10 sm:grid-cols-4 lg:px-8">

          <div className="border-[#eadbc8] px-5 text-center sm:border-r">
            <p className="text-3xl font-black text-[#6f4e37]">
              500+
            </p>
            <p className="mt-1 text-sm font-medium text-[#806756]">
              Happy Pets
            </p>
          </div>

          <div className="border-[#eadbc8] px-5 text-center lg:border-r">
            <p className="text-3xl font-black text-[#6f4e37]">
              10+
            </p>
            <p className="mt-1 text-sm font-medium text-[#806756]">
              Expert Doctors
            </p>
          </div>

          <div className="mt-8 border-[#eadbc8] px-5 text-center sm:mt-0 sm:border-r">
            <p className="text-3xl font-black text-[#6f4e37]">
              5+
            </p>
            <p className="mt-1 text-sm font-medium text-[#806756]">
              Years Experience
            </p>
          </div>

          <div className="mt-8 px-5 text-center sm:mt-0">
            <p className="text-3xl font-black text-[#6f4e37]">
              24/7
            </p>
            <p className="mt-1 text-sm font-medium text-[#806756]">
              Emergency Support
            </p>
          </div>

        </div>
      </section>

      {/* ================= WHY PAWCARE ================= */}
      <section className="bg-[#f8efe5]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#b96f49]">
              Why Choose Us
            </span>

            <h2 className="mt-3 text-4xl font-black text-[#3d2b1f] sm:text-5xl">
              Care that comes
              <span className="text-[#b96f49]"> from the heart.</span>
            </h2>

            <p className="mt-5 leading-7 text-[#735b4c]">
              We believe pets are family. That's why we combine
              professional expertise with genuine love and attention.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {/* Card 1 */}
            <div className="group rounded-3xl border border-[#eadbc8] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f1e3d2] text-[#6f4e37] transition group-hover:bg-[#6f4e37] group-hover:text-white">
                <Heart size={27} />
              </div>

              <h3 className="mt-6 text-xl font-extrabold text-[#3d2b1f]">
                Loving Care
              </h3>

              <p className="mt-3 leading-7 text-[#806756]">
                Every pet is treated with patience, kindness and
                the love they deserve.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group rounded-3xl border border-[#eadbc8] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f1e3d2] text-[#6f4e37] transition group-hover:bg-[#6f4e37] group-hover:text-white">
                <ShieldCheck size={27} />
              </div>

              <h3 className="mt-6 text-xl font-extrabold text-[#3d2b1f]">
                Trusted & Safe
              </h3>

              <p className="mt-3 leading-7 text-[#806756]">
                Your pet's safety and comfort always remain our
                highest priority.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group rounded-3xl border border-[#eadbc8] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f1e3d2] text-[#6f4e37] transition group-hover:bg-[#6f4e37] group-hover:text-white">
                <Stethoscope size={27} />
              </div>

              <h3 className="mt-6 text-xl font-extrabold text-[#3d2b1f]">
                Expert Professionals
              </h3>

              <p className="mt-3 leading-7 text-[#806756]">
                Our experienced team provides reliable and
                professional pet care.
              </p>
            </div>

          </div>

          {/* CTA */}
          <div className="mt-12 flex justify-center">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 font-bold text-[#6f4e37] transition hover:text-[#b96f49]"
            >
              View all our services
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;