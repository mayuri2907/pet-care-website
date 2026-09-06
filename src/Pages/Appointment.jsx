import { useState } from "react";
import {
  CalendarDays,
  Clock,
  PawPrint,
  User,
  Phone,
  Mail,
  CheckCircle,
} from "lucide-react";

function Appointment() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#fffaf3] px-5 py-16 text-[#3d2b1f]">
      {/* Heading */}
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <span className="inline-block rounded-full bg-[#ead8c0] px-4 py-2 text-sm font-semibold text-[#765039]">
          Book a Visit 🐾
        </span>

        <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl">
          Book an Appointment
        </h1>

        <p className="mt-4 text-lg leading-8 text-[#765f50]">
          Give your pet the care they deserve. Schedule a visit with
          our friendly veterinary team.
        </p>
      </div>

      {/* Main Section */}
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-5">

        {/* Left Info */}
        <div className="rounded-3xl bg-[#3d2b1f] p-8 text-white lg:col-span-2">
          <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ead8c0] text-[#70482f]">
            <PawPrint size={28} />
          </div>

          <h2 className="text-3xl font-bold">
            Your Pet's Health Matters
          </h2>

          <p className="mt-4 leading-7 text-[#e5d8ce]">
            Our experienced team is here to provide gentle and
            professional care for your furry family members.
          </p>

          <div className="mt-10 space-y-6">

            <div className="flex gap-4">
              <CalendarDays className="mt-1 text-[#d8b895]" size={22} />
              <div>
                <h3 className="font-bold">Flexible Scheduling</h3>
                <p className="mt-1 text-sm text-[#d8d0c9]">
                  Choose a date that works best for you.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="mt-1 text-[#d8b895]" size={22} />
              <div>
                <h3 className="font-bold">Quick Consultation</h3>
                <p className="mt-1 text-sm text-[#d8d0c9]">
                  Comfortable and caring service.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <PawPrint className="mt-1 text-[#d8b895]" size={22} />
              <div>
                <h3 className="font-bold">Pet Friendly</h3>
                <p className="mt-1 text-sm text-[#d8d0c9]">
                  A calm environment for every pet.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Form */}
        <div className="rounded-3xl border border-[#eadcca] bg-white p-7 shadow-sm sm:p-10 lg:col-span-3">

          {submitted ? (
            <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#e7dccd] text-[#8b5e3c]">
                <CheckCircle size={45} />
              </div>

              <h2 className="mt-6 text-3xl font-bold">
                Appointment Requested! 🎉
              </h2>

              <p className="mt-3 max-w-md text-[#765f50]">
                Thank you for choosing us. Your appointment request
                has been received successfully.
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="mt-7 rounded-xl bg-[#8b5e3c] px-6 py-3 font-bold text-white transition hover:bg-[#70482f]"
              >
                Book Another Appointment
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold">
                Appointment Details
              </h2>

              <p className="mt-2 text-[#765f50]">
                Fill in the details below to schedule your visit.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">

                {/* Name */}
                <div>
                  <label className="mb-2 block font-semibold">
                    Your Name
                  </label>

                  <div className="relative">
                    <User
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9a806d]"
                    />

                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-[#e4d6c7] bg-[#fffaf3] py-3.5 pl-11 pr-4 outline-none transition focus:border-[#9a6545] focus:ring-2 focus:ring-[#ead8c0]"
                    />
                  </div>
                </div>

                {/* Phone + Email */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block font-semibold">
                      Phone Number
                    </label>

                    <div className="relative">
                      <Phone
                        size={19}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9a806d]"
                      />

                      <input
                        type="tel"
                        required
                        placeholder="Phone number"
                        className="w-full rounded-xl border border-[#e4d6c7] bg-[#fffaf3] py-3.5 pl-11 pr-4 outline-none transition focus:border-[#9a6545] focus:ring-2 focus:ring-[#ead8c0]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block font-semibold">
                      Email
                    </label>

                    <div className="relative">
                      <Mail
                        size={19}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9a806d]"
                      />

                      <input
                        type="email"
                        required
                        placeholder="Email address"
                        className="w-full rounded-xl border border-[#e4d6c7] bg-[#fffaf3] py-3.5 pl-11 pr-4 outline-none transition focus:border-[#9a6545] focus:ring-2 focus:ring-[#ead8c0]"
                      />
                    </div>
                  </div>

                </div>

                {/* Pet Name */}
                <div>
                  <label className="mb-2 block font-semibold">
                    Pet Name
                  </label>

                  <div className="relative">
                    <PawPrint
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9a806d]"
                    />

                    <input
                      type="text"
                      required
                      placeholder="Your pet's name"
                      className="w-full rounded-xl border border-[#e4d6c7] bg-[#fffaf3] py-3.5 pl-11 pr-4 outline-none transition focus:border-[#9a6545] focus:ring-2 focus:ring-[#ead8c0]"
                    />
                  </div>
                </div>

                {/* Date + Time */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block font-semibold">
                      Appointment Date
                    </label>

                    <input
                      type="date"
                      required
                      className="w-full rounded-xl border border-[#e4d6c7] bg-[#fffaf3] px-4 py-3.5 outline-none focus:border-[#9a6545] focus:ring-2 focus:ring-[#ead8c0]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block font-semibold">
                      Preferred Time
                    </label>

                    <input
                      type="time"
                      required
                      className="w-full rounded-xl border border-[#e4d6c7] bg-[#fffaf3] px-4 py-3.5 outline-none focus:border-[#9a6545] focus:ring-2 focus:ring-[#ead8c0]"
                    />
                  </div>

                </div>

                {/* Service */}
                <div>
                  <label className="mb-2 block font-semibold">
                    Select Service
                  </label>

                  <select
                    required
                    className="w-full rounded-xl border border-[#e4d6c7] bg-[#fffaf3] px-4 py-3.5 outline-none focus:border-[#9a6545] focus:ring-2 focus:ring-[#ead8c0]"
                  >
                    <option value="">Choose a service</option>
                    <option>Veterinary Care</option>
                    <option>Pet Grooming</option>
                    <option>Vaccination</option>
                    <option>Dental Care</option>
                    <option>Pet Bath</option>
                    <option>Emergency Care</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-2 block font-semibold">
                    Additional Message
                  </label>

                  <textarea
                    rows="4"
                    placeholder="Tell us anything we should know about your pet..."
                    className="w-full resize-none rounded-xl border border-[#e4d6c7] bg-[#fffaf3] px-4 py-3.5 outline-none transition focus:border-[#9a6545] focus:ring-2 focus:ring-[#ead8c0]"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#8b5e3c] py-4 font-bold text-white shadow-md transition hover:bg-[#70482f] hover:shadow-lg"
                >
                  <CalendarDays size={20} />
                  Book Appointment
                </button>

              </form>
            </>
          )}

        </div>
      </div>
    </div>
  );
}

export default Appointment;