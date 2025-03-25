"use client";

import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="py-16 bg-[#1d1d1d] text-white text-center" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Andi & Budi</h2>
          <div className="flex justify-center items-center mb-6">
            <div className="h-px bg-[#3d3d3d] w-16"></div>
            <Heart className="mx-4 text-[#d4a080] w-6 h-6" />
            <div className="h-px bg-[#3d3d3d] w-16"></div>
          </div>
          <p className="text-gray-400 mb-8">
            Terima kasih atas doa dan restu Anda
          </p>

          <div className="text-sm text-gray-500">
            <p>5 Juni 2025</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
