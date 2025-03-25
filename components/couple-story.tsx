"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function CoupleStory() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section
      id="couple"
      className="min-h-screen w-full flex items-center relative overflow-hidden"
      ref={ref}
    >
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1d1d1d] to-[#2d2d2d]">
        {/* Decorative pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle, #d4a080 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10 w-full">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-5xl text-white mb-4 relative inline-block"
          >
            Mempelai
            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#d4a080]"></div>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            {/* Decorative monogram */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full border-2 border-[#d4a080] opacity-20"></div>
              <div className="absolute inset-4 rounded-full border-2 border-[#d4a080] opacity-40"></div>
              <div className="absolute inset-8 rounded-full border-2 border-[#d4a080] opacity-60"></div>
              <div className="absolute inset-12 rounded-full border-2 border-[#d4a080] opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#d4a080]">
                  A
                </span>
              </div>
            </div>

            <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">
              Andi Putri
            </h3>
            <p className="text-[#d4a080] mb-4">Putri dari</p>
            <p className="text-gray-300 mb-6">
              Bapak Ahmad
              <br />
              &<br />
              Ibu Siti
            </p>

            <div className="flex justify-center space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#d4a080] transition-colors"
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
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            {/* Decorative monogram */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full border-2 border-[#d4a080] opacity-20"></div>
              <div className="absolute inset-4 rounded-full border-2 border-[#d4a080] opacity-40"></div>
              <div className="absolute inset-8 rounded-full border-2 border-[#d4a080] opacity-60"></div>
              <div className="absolute inset-12 rounded-full border-2 border-[#d4a080] opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#d4a080]">
                  B
                </span>
              </div>
            </div>

            <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">
              Budi Santoso
            </h3>
            <p className="text-[#d4a080] mb-4">Putra dari</p>
            <p className="text-gray-300 mb-6">
              Bapak Joko
              <br />
              &<br />
              Ibu Ani
            </p>

            <div className="flex justify-center space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#d4a080] transition-colors"
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center max-w-2xl mx-auto mt-16 px-4"
        >
          <p className="text-gray-300 italic font-serif text-base sm:text-lg">
            "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
            untukmu pasangan hidup dari jenismu sendiri, supaya kamu mendapat
            ketenangan hati dan dijadikan-Nya di antaramu rasa kasih sayang.
            Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda
            bagi kaum yang berfikir."
          </p>
          <p className="text-[#d4a080] mt-4">QS. Ar-Rum: 21</p>
        </motion.div>
      </div>
    </section>
  );
}
