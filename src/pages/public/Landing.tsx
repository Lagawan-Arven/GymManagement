import { Dumbbell, Users, Flame, CalendarCheck } from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    description: "Build real strength with guided programs and pro equipment.",
  },
  {
    icon: Flame,
    title: "Fat Loss Programs",
    description: "Science-backed workouts to burn fat and boost endurance.",
  },
  {
    icon: Users,
    title: "Group Classes",
    description: "Train harder with high-energy group sessions.",
  },
  {
    icon: CalendarCheck,
    title: "Easy Booking",
    description: "Reserve workouts and classes in just a few clicks.",
  },
];

const carouselImages = [
  "/workout/workout1.jpg",
  "/workout/workout2.jpg",
  "/workout/workout3.jpg",
  "/workout/workout4.jpg",
  "/workout/workout5.jpg",
  "/workout/workout6.jpg",
  "/workout/workout7.jpg",
];

const Landing = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % carouselImages.length);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));

  return (
    <main className="w-full bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white transition-colors">
      {/* HERO */}
      <section className="relative flex min-h-[90vh] items-center justify-center px-6">
        {/* 🔥 Hero background image */}
        <img
          src="/workout/workoutcover.jpg"
          alt="Gym hero"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/80 dark:bg-black/70" />

        <div className="relative z-10 max-w-5xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Train Hard.
            <span className="block text-red-500">Stay Strong.</span>
          </h1>

          <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-300 sm:text-xl">
            Your transformation starts here. Modern equipment, expert coaches,
            and flexible memberships designed for real results.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button className="rounded-xl bg-red-500 px-8 py-3 text-lg font-semibold text-white hover:bg-red-600 transition">
              Join Now
            </button>
            <button className="rounded-xl border border-neutral-300 dark:border-neutral-700 px-8 py-3 text-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 transition">
              View Programs
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Why Train With Us?</h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            Everything you need to reach peak performance.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-6 hover:border-red-500 transition"
            >
              <feature.icon className="h-10 w-10 text-red-500" />
              <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* IMAGE CAROUSEL */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
          <img
            src={carouselImages[current]}
            alt="Gym preview"
            className="h-[400px] w-full object-cover"
          />

          {/* Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 dark:bg-black/70 px-4 py-2 text-lg font-bold"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 dark:bg-black/70 px-4 py-2 text-lg font-bold"
          >
            ›
          </button>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-red-600 to-red-500 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Start Your Fitness Journey Today
          </h2>
          <p className="mt-4 text-red-100">
            No contracts. No excuses. Just results.
          </p>
          <button className="mt-8 rounded-xl bg-black px-10 py-4 text-lg font-semibold hover:bg-neutral-900 transition">
            Get Started
          </button>
        </div>
      </section>
    </main>
  );
};

export default Landing;
