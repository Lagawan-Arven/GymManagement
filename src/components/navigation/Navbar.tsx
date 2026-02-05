import { NavLink } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "../../context";

import { SignIn } from "../../pages/public";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Coaches", path: "/coaches" },
  { name: "Contact", path: "/contact" },
];

const NavBar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);

  // 🌗 Theme handling
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/80">
      <nav className=" flex items-center justify-between px-6 py-4">
        {/* LOGO */}
        <NavLink to="/" className="flex items-center gap-2">
          <img
            src="src\assets\react.svg"
            alt="Gym Logo"
            className="h-9 w-auto"
          />
          <span className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Logo Here
          </span>
        </NavLink>

        {/* DESKTOP NAV */}
        <div className="hidden items-center gap-10 md:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition ${
                      isActive
                        ? "text-red-500"
                        : "text-neutral-700 hover:text-red-500 dark:text-neutral-300"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* ACTIONS */}
          <div className="flex items-center gap-4">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="rounded-lg border border-neutral-300 p-2 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900 transition"
            >
              {isDark ? (
                <Sun color="red" className="h-5 w-5" />
              ) : (
                <Moon color="red" className="h-5 w-5" />
              )}
            </button>

            {/* Auth */}
            <div className="flex items-center gap-4">
              <NavLink
                to="/signin"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenSignIn(true);
                }}
                className="rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
              >
                Sign In
              </NavLink>

              <NavLink
                to="/signup"
                className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
              >
                Sign Up
              </NavLink>
            </div>
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Modal */}
      <SignIn isOpen={openSignIn} onClose={() => setOpenSignIn(false)} />

      {/* MOBILE NAV */}
      {menuOpen && (
        <div className="border-t border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950 md:hidden">
          <ul className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-neutral-700 hover:text-red-500 dark:text-neutral-300"
              >
                {link.name}
              </NavLink>
            ))}

            <div className="mt-4 flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="rounded-lg border border-neutral-300 p-2 dark:border-neutral-700"
              >
                {isDark ? <Sun /> : <Moon />}
              </button>

              <NavLink to="/signin" className="text-sm font-semibold">
                Sign In
              </NavLink>
              <NavLink
                to="/signup"
                className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white"
              >
                Sign Up
              </NavLink>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
