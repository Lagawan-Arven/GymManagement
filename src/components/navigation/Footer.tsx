import { NavLink } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* LOGO & BRAND */}
          <div>
            <div className="flex items-center gap-2">
              <img
                src="src\assets\react.svg"
                alt="Gym Logo"
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-neutral-900 dark:text-white">
                FitGym
              </span>
            </div>
            <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
              Train smarter. Get stronger. Join a fitness community built for
              real results and long-term performance.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Coaches", path: "/coaches" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className="text-neutral-600 hover:text-red-500 dark:text-neutral-400"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-900 dark:text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-red-500" />
                Your City, Your Country
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-red-500" />
                +63 900 000 0000
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-red-500" />
                contact@fitgym.com
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-900 dark:text-white">
              Follow Us
            </h3>
            <div className="mt-4 flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-300 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900 transition"
              >
                <FaFacebookF color="red" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-300 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900 transition"
              >
                <FaInstagram color="red" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-300 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900 transition"
              >
                <FaXTwitter color="red" />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-6 text-sm text-neutral-600 dark:border-neutral-800 dark:text-neutral-400 md:flex-row">
          <span>© {new Date().getFullYear()} FitGym. All rights reserved.</span>

          <div className="flex gap-6">
            <NavLink to="/privacy" className="hover:text-red-500">
              Privacy Policy
            </NavLink>
            <NavLink to="/terms" className="hover:text-red-500">
              Terms of Service
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
