"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Heart } from "lucide-react";

export function Gallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Decorative elements instead of images
  const decorativeElements = [
    { id: 1, emoji: "💍", label: "Cincin" },
    { id: 2, emoji: "💐", label: "Buket" },
    { id: 3, emoji: "🕊️", label: "Merpati" },
    { id: 4, emoji: "🎂", label: "Kue" },
    { id: 5, emoji: "🥂", label: "Champagne" },
    { id: 6, emoji: "💝", label: "Hadiah" },
  ];

  return (
    <section id="gallery" className="py-20 bg-[#f5efe9]" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4">
            Momen Spesial
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Simbol-simbol cinta dalam perjalanan kami
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {decorativeElements.map((item, index) => (
            <motion.div
              key={item.id}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="aspect-square overflow-hidden rounded-lg bg-white shadow-md flex flex-col items-center justify-center p-4"
            >
              <div className="text-6xl mb-4">{item.emoji}</div>
              <div className="text-lg font-serif text-gray-800">
                {item.label}
              </div>
              <div className="mt-4">
                <Heart className="text-[#d4a080] w-5 h-5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
