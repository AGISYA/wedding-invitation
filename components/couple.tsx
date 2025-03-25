"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function Couple() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="couple" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4">
            Mempelai
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dengan rahmat Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk
            menghadiri pernikahan kami
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            {/* Decorative element instead of image */}
            <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#f5efe9] flex items-center justify-center bg-[#f8d9c6]">
              <span className="font-serif text-5xl text-[#d4a080]">A</span>
            </div>
            <h3 className="font-serif text-2xl text-gray-800 mb-2">
              Andi Putri
            </h3>
            <p className="text-gray-600 mb-4">
              Putri dari Bapak Ahmad & Ibu Siti
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-pink-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            {/* Decorative element instead of image */}
            <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#f5efe9] flex items-center justify-center bg-[#f8d9c6]">
              <span className="font-serif text-5xl text-[#d4a080]">B</span>
            </div>
            <h3 className="font-serif text-2xl text-gray-800 mb-2">
              Budi Santoso
            </h3>
            <p className="text-gray-600 mb-4">
              Putra dari Bapak Joko & Ibu Ani
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-pink-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
