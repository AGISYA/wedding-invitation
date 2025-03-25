"use client";

import { Calendar, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function EventDetails() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="events"
      className="py-16 md:py-20 bg-[#2d2d2d] text-white"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-4 relative inline-block">
            Acara Pernikahan
            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#d4a080]"></div>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 px-4">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-10 max-w-4xl mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#1d1d1d] p-6 sm:p-8 rounded-lg shadow-lg text-center border border-[#3d3d3d]"
          >
            <div className="w-16 h-16 bg-[#d4a080]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-[#d4a080]" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl mb-4">Akad Nikah</h3>
            <div className="flex items-center justify-center mb-3">
              <Calendar className="w-5 h-5 text-[#d4a080] mr-2" />
              <p className="text-gray-300">Kamis, 5 Juni 2025</p>
            </div>
            <div className="flex items-center justify-center mb-3">
              <Clock className="w-5 h-5 text-[#d4a080] mr-2" />
              <p className="text-gray-300">08:00 - 10:00 WIB</p>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="w-5 h-5 text-[#d4a080] mr-2 flex-shrink-0" />
              <p className="text-gray-300">Masjid Al-Hikmah, Jakarta Selatan</p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#1d1d1d] p-6 sm:p-8 rounded-lg shadow-lg text-center border border-[#3d3d3d]"
          >
            <div className="w-16 h-16 bg-[#d4a080]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-[#d4a080]" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl mb-4">Resepsi</h3>
            <div className="flex items-center justify-center mb-3">
              <Calendar className="w-5 h-5 text-[#d4a080] mr-2" />
              <p className="text-gray-300">Kamis, 5 Juni 2025</p>
            </div>
            <div className="flex items-center justify-center mb-3">
              <Clock className="w-5 h-5 text-[#d4a080] mr-2" />
              <p className="text-gray-300">11:00 - 15:00 WIB</p>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="w-5 h-5 text-[#d4a080] mr-2 flex-shrink-0" />
              <p className="text-gray-300">
                Ballroom Hotel Mulia, Jakarta Selatan
              </p>
            </div>
          </motion.div>
        </div>

        {/* Decorative element */}
        <div className="flex justify-center mt-12 md:mt-16">
          <div className="flex items-center">
            <div className="h-px bg-[#3d3d3d] w-12 sm:w-16"></div>
            <div className="mx-4 text-[#d4a080]">❦</div>
            <div className="h-px bg-[#3d3d3d] w-12 sm:w-16"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
