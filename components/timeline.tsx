"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function Timeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineEvents = [
    {
      title: "Pertama Bertemu",
      date: "Januari 2020",
      description:
        "Kami bertemu pertama kali di sebuah acara kampus dan langsung merasa cocok satu sama lain.",
    },
    {
      title: "Mulai Menjalin Hubungan",
      date: "Mei 2020",
      description:
        "Setelah beberapa bulan mengenal, kami memutuskan untuk menjalin hubungan yang lebih serius.",
    },
    {
      title: "Lamaran",
      date: "Desember 2023",
      description:
        "Budi melamar Andi di tempat yang spesial bagi kami, dan tentu saja jawabannya adalah 'Ya'.",
    },
    {
      title: "Pernikahan",
      date: "15 Juni 2024",
      description:
        "Hari yang kami nantikan, di mana kami akan mengucapkan janji suci pernikahan.",
    },
  ];

  return (
    <section id="timeline" className="py-20 bg-[#f5f5f5]" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4 relative inline-block">
            Cerita Cinta Kami
            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#d4a080]"></div>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6">
            Perjalanan cinta kami yang membawa kami ke hari bahagia ini
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#d4a080]"></div>

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 ${
                index % 2 === 0
                  ? "md:ml-auto md:pl-16 md:pr-0 md:text-left"
                  : "md:mr-auto md:pr-16 md:pl-0 md:text-right"
              } md:w-1/2 px-4`}
            >
              {/* Timeline dot */}
              <div
                className="absolute left-1/2 md:left-auto md:right-auto transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#d4a080] z-10 top-6 md:top-7 border-4 border-white
                  ${index % 2 === 0 ? 'md:-left-3' : 'md:-right-3'}"
              ></div>

              <div
                className={`bg-white p-6 rounded-lg shadow-md ${
                  index % 2 === 0 ? "md:rounded-tr-none" : "md:rounded-tl-none"
                }`}
              >
                <div className="font-serif text-xl text-[#d4a080] mb-1">
                  {event.title}
                </div>
                <div className="text-sm text-gray-500 mb-3">{event.date}</div>
                <p className="text-gray-700">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
