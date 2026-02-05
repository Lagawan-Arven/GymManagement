import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <main className="w-full bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white transition-colors">
      {/* HERO */}
      <section className="relative flex min-h-[60vh] items-center justify-center px-6">
        <img
          src="/images/contact-hero.jpg" // replace
          alt="Contact FitGym"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-white/80 dark:bg-black/70" />

        <div className="relative z-10 max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl">
            Get in <span className="text-red-500">Touch</span>
          </h1>
          <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-300">
            Have questions? Want to join? We’d love to hear from you.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* FORM */}
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Send Us a Message
            </h2>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400">
              Fill out the form and our team will get back to you shortly.
            </p>

            <form className="mt-10 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-neutral-300 bg-transparent px-4 py-3 text-sm focus:border-red-500 focus:outline-none dark:border-neutral-700"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-neutral-300 bg-transparent px-4 py-3 text-sm focus:border-red-500 focus:outline-none dark:border-neutral-700"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-neutral-300 bg-transparent px-4 py-3 text-sm focus:border-red-500 focus:outline-none dark:border-neutral-700"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full rounded-xl border border-neutral-300 bg-transparent px-4 py-3 text-sm focus:border-red-500 focus:outline-none dark:border-neutral-700"
              />

              <button
                type="submit"
                className="rounded-xl bg-red-500 px-8 py-3 text-lg font-semibold text-white hover:bg-red-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* INFO + MAP */}
          <div className="space-y-10">
            {/* CONTACT INFO */}
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900">
              <h3 className="text-xl font-semibold">Contact Information</h3>

              <ul className="mt-6 space-y-4 text-sm text-neutral-600 dark:text-neutral-400">
                <li className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-red-500" />
                  Your City, Your Country
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-red-500" />
                  +63 900 000 0000
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-red-500" />
                  contact@fitgym.com
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-red-500" />
                  Mon – Sun: 5:00 AM – 10:00 PM
                </li>
              </ul>
            </div>

            {/* MAP */}
            <div className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
              <iframe
                src="https://www.google.com/maps" // replace with embed URL
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full border-0"
                title="Gym Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-r from-red-600 to-red-500 p-12 text-center text-white">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Ready to Start Training?
          </h2>
          <p className="mt-4 text-red-100">
            Visit us today or send us a message — your journey starts here.
          </p>
          <button className="mt-8 rounded-xl bg-black px-10 py-4 text-lg font-semibold hover:bg-neutral-900 transition">
            Join Now
          </button>
        </div>
      </section>
    </main>
  );
};

export default Contact;
