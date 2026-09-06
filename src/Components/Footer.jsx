import {
  PawPrint,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#3d2b1f] text-white">

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ead8c0] text-[#70482f]">
              <PawPrint size={25} />
            </div>

            <h2 className="text-2xl font-extrabold">
              PawCare
            </h2>
          </div>

          <p className="mt-5 max-w-sm leading-7 text-[#d8d0c9]">
            Caring for your furry family members with love,
            compassion and professional care.
          </p>

          {/* Social Buttons */}
          <div className="mt-6 flex gap-3">
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 font-bold transition hover:bg-[#ead8c0] hover:text-[#3d2b1f]">
              IG
            </button>

            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 font-bold transition hover:bg-[#ead8c0] hover:text-[#3d2b1f]">
              FB
            </button>

            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 font-bold transition hover:bg-[#ead8c0] hover:text-[#3d2b1f]">
              X
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold">
            Quick Links
          </h3>

          <ul className="mt-5 space-y-3 text-[#d8d0c9]">
            <li className="transition hover:text-white">
              Home
            </li>

            <li className="transition hover:text-white">
              Services
            </li>

            <li className="transition hover:text-white">
              Doctors
            </li>

            <li className="transition hover:text-white">
              Gallery
            </li>

            <li className="transition hover:text-white">
              Pricing
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold">
            Our Services
          </h3>

          <ul className="mt-5 space-y-3 text-[#d8d0c9]">
            <li>Veterinary Care</li>
            <li>Pet Grooming</li>
            <li>Vaccination</li>
            <li>Dental Care</li>
            <li>Emergency Care</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold">
            Contact Us
          </h3>

          <div className="mt-5 space-y-5">

            <div className="flex gap-3">
              <MapPin
                size={20}
                className="mt-1 shrink-0 text-[#d8b895]"
              />

              <p className="text-sm leading-6 text-[#d8d0c9]">
                123 Pet Street,
                <br />
                Jaipur, Rajasthan
              </p>
            </div>

            <div className="flex gap-3">
              <Phone
                size={20}
                className="shrink-0 text-[#d8b895]"
              />

              <p className="text-sm text-[#d8d0c9]">
                +91 98765 43210
              </p>
            </div>

            <div className="flex gap-3">
              <Mail
                size={20}
                className="shrink-0 text-[#d8b895]"
              />

              <p className="text-sm text-[#d8d0c9]">
                hello@pawcare.com
              </p>
            </div>

            <div className="flex gap-3">
              <Clock
                size={20}
                className="shrink-0 text-[#d8b895]"
              />

              <p className="text-sm text-[#d8d0c9]">
                Mon - Sat: 9 AM - 8 PM
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-center text-sm text-[#cfc5bd] sm:flex-row sm:text-left">

          <p>
            © 2026 PawCare. All rights reserved.
          </p>

          <p>
            Made with ❤️ for pets
          </p>

        </div>
      </div>

    </footer>
  );
}

export default Footer;