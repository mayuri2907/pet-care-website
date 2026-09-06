import { Link } from "react-router-dom";
import {
  Stethoscope,
  Scissors,
  Syringe,
  HeartPulse,
  Bath,
  Ambulance,
  Check,
  PawPrint,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Veterinary Care",
    description:
      "Complete health checkups and professional veterinary care for your pets.",
    features: [
      "Health Checkup",
      "Disease Diagnosis",
      "Treatment Advice",
    ],
  },
  {
    icon: Scissors,
    title: "Pet Grooming",
    description:
      "Keep your furry friend clean, fresh and comfortable with our grooming service.",
    features: [
      "Hair Trimming",
      "Nail Clipping",
      "Ear Cleaning",
    ],
  },
  {
    icon: Syringe,
    title: "Vaccination",
    description:
      "Protect your pets with timely vaccinations and preventive healthcare.",
    features: [
      "Vaccination",
      "Health Monitoring",
      "Vaccination Guidance",
    ],
  },
  {
    icon: HeartPulse,
    title: "Dental Care",
    description:
      "Healthy teeth and gums are important for your pet's overall wellbeing.",
    features: [
      "Dental Checkup",
      "Teeth Cleaning",
      "Dental Advice",
    ],
  },
  {
    icon: Bath,
    title: "Pet Bath",
    description:
      "Gentle and refreshing bathing service specially designed for pets.",
    features: [
      "Gentle Bath",
      "Pet Shampoo",
      "Drying & Brushing",
    ],
  },
  {
    icon: Ambulance,
    title: "Emergency Care",
    description:
      "Quick assistance and professional care when your pet needs urgent attention.",
    features: [
      "Quick Assistance",
      "Emergency Checkup",
      "Professional Support",
    ],
  },
];

function Services() {
  return (
    <div className="min-h-screen bg-[#fffaf3] text-[#3d2b1f]">

      {/* Hero Section */}
      <section className="px-5 py-20 text-center">
        <span className="inline-block rounded-full bg-[#ead8c0] px-4 py-2 text-sm font-semibold text-[#765039]">
          Our Services 🐾
        </span>

        <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
          Complete Care for Your
          <span className="block text-[#9a6545]">
            Furry Family Members
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#765f50]">
          From regular checkups to grooming and emergency care,
          we provide everything your pet needs to stay happy and healthy.
        </p>
      </section>

      {/* Services Cards */}
      <section className="px-5 pb-20">
        <div className="mx-auto grid max-w-6xl gap-7 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-[#eadcca] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f1e4d4] text-[#8b5e3c] transition duration-300 group-hover:bg-[#8b5e3c] group-hover:text-white">
                  <Icon size={30} />
                </div>

                {/* Title */}
                <h2 className="mt-6 text-2xl font-bold">
                  {service.title}
                </h2>

                {/* Description */}
                <p className="mt-3 leading-7 text-[#765f50]">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm font-medium text-[#5d493d]"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ead8c0] text-[#8b5e3c]">
                        <Check size={14} />
                      </span>

                      {feature}
                    </div>
                  ))}
                </div>

                {/* Button */}
                <Link
                  to="/appointment"
                  className="mt-7 inline-flex items-center gap-2 font-bold text-[#8b5e3c] transition group-hover:text-[#70482f]"
                >
                  Book Service
                  <span className="transition group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            );
          })}

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-5 pb-20">
        <div className="mx-auto max-w-6xl rounded-3xl bg-[#3d2b1f] px-6 py-12 text-white sm:px-12">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ead8c0] text-[#70482f]">
                <PawPrint size={28} />
              </div>

              <h2 className="text-3xl font-extrabold sm:text-4xl">
                Why Choose PawCare?
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-[#e5d8ce]">
                We believe every pet deserves gentle, professional
                and loving care. Our goal is to make every visit
                comfortable for both pets and their owners.
              </p>

              <Link
                to="/appointment"
                className="mt-7 inline-block rounded-xl bg-white px-6 py-3.5 font-bold text-[#3d2b1f] transition hover:bg-[#f0e1cf]"
              >
                Book an Appointment
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-2xl bg-white/10 p-5">
                <h3 className="text-3xl font-extrabold">10+</h3>
                <p className="mt-1 text-sm text-[#ddd1c8]">
                  Years Experience
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                <h3 className="text-3xl font-extrabold">5K+</h3>
                <p className="mt-1 text-sm text-[#ddd1c8]">
                  Happy Pets
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                <h3 className="text-3xl font-extrabold">15+</h3>
                <p className="mt-1 text-sm text-[#ddd1c8]">
                  Expert Doctors
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                <h3 className="text-3xl font-extrabold">24/7</h3>
                <p className="mt-1 text-sm text-[#ddd1c8]">
                  Pet Support
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Services;