import { Check, PawPrint, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Basic Care",
    price: "₹499",
    description: "Perfect for regular pet care needs.",
    features: [
      "General Health Checkup",
      "Basic Consultation",
      "Weight & Temperature Check",
      "Pet Health Advice",
    ],
  },
  {
    name: "Premium Care",
    price: "₹999",
    description: "Complete care for your furry friend.",
    popular: true,
    features: [
      "Complete Health Checkup",
      "Vaccination Consultation",
      "Dental Checkup",
      "Grooming Consultation",
      "Nutrition Guidance",
      "Follow-up Support",
    ],
  },
  {
    name: "VIP Care",
    price: "₹1,499",
    description: "Extra attention and complete wellness care.",
    features: [
      "Full Body Checkup",
      "Dental & Ear Checkup",
      "Vaccination Support",
      "Grooming Service",
      "Nutrition Plan",
      "Priority Appointment",
    ],
  },
];

function Pricing() {
  return (
    <div className="bg-[#fffaf3] text-[#3d2b1f]">

      {/* Hero */}
      <section className="px-5 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 flex justify-center">
            <span className="rounded-full bg-[#ead8c0] px-4 py-2 text-sm font-semibold text-[#6b4630]">
              Simple & Affordable
            </span>
          </div>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Choose the Best Care
            <span className="block text-[#9a6545]">
              for Your Pet 🐾
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#765f50]">
            Flexible care plans designed to keep your pets healthy,
            happy and comfortable.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-5 pb-20">
        <div className="mx-auto grid max-w-6xl gap-7 lg:grid-cols-3">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
                plan.popular
                  ? "border-[#9a6545] bg-[#f4e7d5]"
                  : "border-[#eadcca] bg-white"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-[#9a6545] px-4 py-2 text-sm font-bold text-white shadow-md">
                  <Sparkles size={15} />
                  Most Popular
                </div>
              )}

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ead8c0] text-[#8b5e3c]">
                <PawPrint size={28} />
              </div>

              <h2 className="text-2xl font-bold">{plan.name}</h2>

              <p className="mt-2 min-h-[48px] text-[#765f50]">
                {plan.description}
              </p>

              <div className="mt-6">
                <span className="text-4xl font-extrabold text-[#8b5e3c]">
                  {plan.price}
                </span>
                <span className="text-sm text-[#765f50]">
                  / visit
                </span>
              </div>

              <div className="my-7 h-px bg-[#eadcca]" />

              <h3 className="mb-4 font-bold">What's Included:</h3>

              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-[#5d493d]"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e8dccd] text-[#8b5e3c]">
                      <Check size={15} />
                    </span>

                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to="/appointment"
                className={`mt-8 block rounded-xl py-3.5 text-center font-bold transition ${
                  plan.popular
                    ? "bg-[#8b5e3c] text-white hover:bg-[#70482f]"
                    : "border border-[#cdb99f] text-[#70482f] hover:bg-[#f5ecdf]"
                }`}
              >
                Choose Plan
              </Link>
            </div>
          ))}

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-5 pb-20">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-[#3d2b1f] px-6 py-12 text-center text-white sm:px-12">
          <PawPrint className="mx-auto mb-4" size={38} />

          <h2 className="text-3xl font-bold sm:text-4xl">
            Not Sure Which Plan Is Right?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[#e7d9cc]">
            Don't worry! Our team will help you choose the perfect
            care option according to your pet's needs.
          </p>

          <Link
            to="/appointment"
            className="mt-7 inline-block rounded-xl bg-white px-7 py-3.5 font-bold text-[#3d2b1f] transition hover:bg-[#f0e1cf]"
          >
            Book a Consultation
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Pricing;