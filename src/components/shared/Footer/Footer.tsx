"use client";

import Image from "next/image";
import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowRight,
  FiArrowUp,
} from "react-icons/fi";

import Container from "../Container";

const quickLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Products",
    href: "/products",
  },
  {
    name: "Categories",
    href: "/categories",
  },
  {
    name: "Offers",
    href: "/offers",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const customerLinks = [
  {
    name: "My Account",
    href: "/dashboard",
  },
  {
    name: "Order Tracking",
    href: "/orders",
  },
  {
    name: "Wishlist",
    href: "/wishlist",
  },
  {
    name: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    name: "Terms & Conditions",
    href: "/terms",
  },
];

const socials = [
  {
    icon: FaFacebookF,
    href: "#",
  },
  {
    icon: FaInstagram,
    href: "#",
  },
  {
    icon: FaYoutube,
    href: "#",
  },
  {
    icon: FaLinkedinIn,
    href: "#",
  },
];

export default function Footer() {
  return (
    <>
      {/* Back To Top */}

      <button
        type="button"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
      >
        <FiArrowUp size={20} />
      </button>

      <footer className="bg-slate-950 text-slate-300">
        <Container>
          <div className="grid gap-12 border-b border-slate-800 py-20 lg:grid-cols-4">
                        <div>
              <Link
                href="/"
                className="flex items-center gap-3"
              >
                <Image
                  src="/logo.png"
                  alt="Arif Gadget"
                  width={45}
                  height={45}
                />

                <span className="text-2xl font-bold text-white">
                  Arif Gadget
                </span>
              </Link>

              <p className="mt-6 leading-8 text-slate-400">
                Your trusted destination for premium gadgets,
                accessories and smart electronics across
                Bangladesh.
              </p>

              <div className="mt-8 flex gap-3">
                {socials.map((social, index) => {
                  const Icon = social.icon;

                  return (
                    <Link
                      key={index}
                      href={social.href}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600"
                    >
                      <Icon className="text-white" />
                    </Link>
                  );
                })}
              </div>
            </div>
                        <div>
              <h3 className="mb-7 text-xl font-bold text-white">
                Quick Links
              </h3>

              <ul className="space-y-4">
                {quickLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 transition hover:text-blue-400"
                    >
                      <FiArrowRight size={15} />

                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
                        {/* Customer Support */}
            <div>
              <h3 className="mb-7 text-xl font-bold text-white">
                Customer Support
              </h3>

              <ul className="space-y-4">
                {customerLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 transition hover:text-blue-400"
                    >
                      <FiArrowRight size={15} />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-7 text-xl font-bold text-white">
                Contact Us
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <FiMapPin
                    size={20}
                    className="mt-1 text-blue-500"
                  />

                  <p className="leading-7 text-slate-400">
                    Dhaka, Bangladesh
                    <br />
                    Open: 9:00 AM - 10:00 PM
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <FiPhone
                    size={20}
                    className="text-blue-500"
                  />

                  <span>+880 1700-000000</span>
                </div>

                <div className="flex items-center gap-3">
                  <FiMail
                    size={20}
                    className="text-blue-500"
                  />

                  <span>support@arifgadget.com</span>
                </div>
              </div>

              {/* Mini Newsletter */}

              <div className="mt-8">
                <h4 className="mb-4 font-semibold text-white">
                  Subscribe Newsletter
                </h4>

                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                  />

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3 font-semibold text-white transition hover:opacity-90"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Bottom */}

          <div className="flex flex-col items-center justify-between gap-6 py-8 lg:flex-row">
            <p className="text-center text-sm text-slate-500 lg:text-left">
              © {new Date().getFullYear()} Arif Gadget. All Rights Reserved.
            </p>

            {/* Payment */}

            <div className="flex items-center gap-3">
              <Image
                src="/images/payment/visa.png"
                alt="Visa"
                width={50}
                height={32}
              />

              <Image
                src="/images/payment/mastercard.png"
                alt="MasterCard"
                width={50}
                height={32}
              />

              <Image
                src="/images/payment/bkash.png"
                alt="bKash"
                width={50}
                height={32}
              />

              <Image
                src="/images/payment/nagad.png"
                alt="Nagad"
                width={50}
                height={32}
              />
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}