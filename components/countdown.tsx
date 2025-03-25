"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function Countdown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const target = new Date("2025-06-05T08:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      if (difference <= 0) {
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        clearInterval(interval);
        return;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(d);
      setHours(h);
      setMinutes(m);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="countdown" className="py-16 md:py-20 bg-[#f5f5f5]" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-4 relative inline-block">
            Menghitung Hari
            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#d4a080]"></div>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6">
            Menanti hari bahagia kami
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-xs sm:max-w-md md:max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white p-3 sm:p-6 rounded-lg text-center shadow-md border border-gray-100"
          >
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#d4a080] mb-1 sm:mb-2 font-serif">
              {days}
            </div>
            <div className="text-gray-600 uppercase tracking-wider text-xs sm:text-sm">
              Hari
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-3 sm:p-6 rounded-lg text-center shadow-md border border-gray-100"
          >
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#d4a080] mb-1 sm:mb-2 font-serif">
              {hours}
            </div>
            <div className="text-gray-600 uppercase tracking-wider text-xs sm:text-sm">
              Jam
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-3 sm:p-6 rounded-lg text-center shadow-md border border-gray-100"
          >
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#d4a080] mb-1 sm:mb-2 font-serif">
              {minutes}
            </div>
            <div className="text-gray-600 uppercase tracking-wider text-xs sm:text-sm">
              Menit
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-3 sm:p-6 rounded-lg text-center shadow-md border border-gray-100"
          >
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#d4a080] mb-1 sm:mb-2 font-serif">
              {seconds}
            </div>
            <div className="text-gray-600 uppercase tracking-wider text-xs sm:text-sm">
              Detik
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
