import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  PawPrint,
} from "lucide-react";

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-[#fffaf3] text-[#3d2b1f]">

      {/* Hero */}
      <section className="px-5 py-20 text-center">
        <span className="inline-block rounded-full bg-[#ead8c0] px-4 py-2 text-sm font-semibold text-[#765039]">
          Get In Touch 🐾
        </span>

        <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl">
          We'd Love to Hear From You
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#765f50]">
          Have a question about your pet's care? Our friendly team
          is always happy to help.
        </p>
      </section>

      {/* Contact Content */}
      <section className="px-5 pb-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-5">

          {/* Contact Info */}
          <div className="rounded-3xl bg-[#3d2b1f] p-8 text-white lg:col-span-2">
            <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ead8c0] text-[#70482f]">
              <PawPrint size={28} />
            </div>

            <h2 className="text-3xl font-bold">
              Contact Information
            </h2>

            <p className="mt-3 leading-7 text-[#e5d8ce]">
              Reach out to us anytime. We are here to make pet care
              simple and stress-free.
            </p>

            <div className="mt-9 space-y-7">

              <div className="flex gap-4">
                <MapPin className="mt-1 shrink-0 text-[#d8b895]" size={22} />
                <div>
                  <h3 className="font-bold">Our Location</h3>
                  <p className="mt-1 text-sm text-[#d8d0c9]">
                    123 Pet Street, Jaipur, Rajasthan
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="mt-1 shrink-0 text-[#d8b895]" size={22} />
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="mt-1 text-sm text-[#d8d0c9]">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="mt-1 shrink-0 text-[#d8b895]" size={22} />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="mt-1 text-sm text-[#d8d0c9]">
                    hello@pawcare.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="mt-1 shrink-0 text-[#d8b895]" size={22} />
                <div>
                  <h3 className="font-bold">Opening Hours</h3>
                  <p className="mt-1 text-sm text-[#d8d0c9]">
                    Mon - Sat: 9:00 AM - 8:00 PM
                  </p>
                  <p className="text-sm text-[#d8d0c9]">
                    Sunday: 10:00 AM - 5:00 PM
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-[#eadcca] bg-white p-7 shadow-sm sm:p-10 lg:col-span-3">

            {sent ? (
              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#e7dccd] text-[#8b5e3c]">
                  <CheckCircle size={45} />
                </div>

                <h2 className="mt-6 text-3xl font-bold">
                  Message Sent! 🎉
                </h2>

                <p className="mt-3 max-w-md text-[#765f50]">
                  Thank you for contacting PawCare. Our team will
                  get back to you soon.
                </p>

                <button
                  onClick={() => setSent(false)}
                  className="mt-7 rounded-xl bg-[#8b5e3c] px-6 py-3 font-bold text-white transition hover:bg-[#70482f]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold">
                  Send Us a Message
                </h2>

                <p className="mt-2 text-[#765f50]">
                  Fill out the form and we'll get back to you.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-5"
                >

                  {/* Name */}
                  <div>
                    <label className="mb-2 block font-semibold">
                      Your Name
                    </label>

                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-[#e4d6c7] bg-[#fffaf3] px-4 py-3.5 outline-none transition focus:border-[#9a6545] focus:ring-2 focus:ring-[#ead8c0]"
                    />
                  </div>

                  {/* Email + Phone */}
                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>
                      <label className="mb-2 block font-semibold">
                        Email Address
                      </label>

                      <input
                        type="email"
                        required
                        placeholder="Enter your email"
                        className="w-full rounded-xl border border-[#e4d6c7] bg-[#fffaf3] px-4 py-3.5 outline-none transition focus:border-[#9a6545] focus:ring-2 focus:ring-[#ead8c0]"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block font-semibold">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        placeholder="Enter your phone"
                        className="w-full rounded-xl border border-[#e4d6c7] bg-[#fffaf3] px-4 py-3.5 outline-none transition focus:border-[#9a6545] focus:ring-2 focus:ring-[#ead8c0]"
                      />
                    </div>

                  </div>

                  {/* Subject */}
                  <div>
                    <label className="mb-2 block font-semibold">
                      Subject
                    </label>

                    <input
                      type="text"
                      required
                      placeholder="What can we help you with?"
                      className="w-full rounded-xl border border-[#e4d6c7] bg-[#fffaf3] px-4 py-3.5 outline-none transition focus:border-[#9a6545] focus:ring-2 focus:ring-[#ead8c0]"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-2 block font-semibold">
                      Message
                    </label>

                    <textarea
                      rows="6"
                      required
                      placeholder="Write your message here..."
                      className="w-full resize-none rounded-xl border border-[#e4d6c7] bg-[#fffaf3] px-4 py-3.5 outline-none transition focus:border-[#9a6545] focus:ring-2 focus:ring-[#ead8c0]"
                    />
                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#8b5e3c] py-4 font-bold text-white shadow-md transition hover:bg-[#70482f] hover:shadow-lg"
                  >
                    <Send size={19} />
                    Send Message
                  </button>

                </form>
              </>
            )}

          </div>
        </div>
      </section>

      {/* FAQ Style Section */}
      <section className="px-5 pb-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#f1e4d4] px-6 py-12 text-center sm:px-12">
          <PawPrint className="mx-auto text-[#8b5e3c]" size={35} />

          <h2 className="mt-4 text-3xl font-bold">
            Need Quick Help?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-[#765f50]">
            For urgent pet-care questions, please contact our team
            directly by phone during opening hours.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919876543210"
              className="rounded-xl bg-[#8b5e3c] px-6 py-3 font-bold text-white transition hover:bg-[#70482f]"
            >
              Call Us
            </a>

            <a
              href="mailto:hello@pawcare.com"
              className="rounded-xl border border-[#bfa990] bg-white px-6 py-3 font-bold text-[#70482f] transition hover:bg-[#f9f1e7]"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Contact;