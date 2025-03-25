"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Location() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="location" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4 relative inline-block">
            Lokasi
            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#d4a080]"></div>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6">
            Kami menantikan kehadiran Anda di:
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-[#d4a080]/10 rounded-full flex items-center justify-center mr-4">
                <MapPin className="w-5 h-5 text-[#d4a080]" />
              </div>
              <h3 className="font-serif text-xl text-gray-800">
                Ballroom Hotel Mulia
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Jl. Asia Afrika No.8, RT.1/RW.3, Gelora, Kecamatan Tanah Abang,
              Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10270
            </p>
            <div className="flex justify-center">
              <Button
                className="bg-[#d4a080] hover:bg-[#c08e6e] text-white"
                onClick={() =>
                  window.open(
                    "https://maps.google.com/?q=Hotel+Mulia+Jakarta",
                    "_blank"
                  )
                }
              >
                <MapPin className="mr-2 h-4 w-4" />
                Buka di Google Maps
              </Button>
            </div>
          </div>

          {/* Decorative map representation */}
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-md border border-gray-100">
            <div className="w-full h-full bg-[#f5f5f5] relative">
              {/* Decorative map elements */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `linear-gradient(to right, #d4a080 1px, transparent 1px), linear-gradient(to bottom, #d4a080 1px, transparent 1px)`,
                  backgroundSize: "20px 20px",
                }}
              />

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="inline-block p-4 rounded-full bg-[#d4a080]/10 mb-4">
                  <MapPin className="w-8 h-8 text-[#d4a080]" />
                </div>
                <h3 className="font-serif text-xl text-gray-800 mb-2">
                  Ballroom Hotel Mulia
                </h3>
                <p className="text-gray-600">Jakarta Selatan, Indonesia</p>
              </div>

              {/* Decorative roads */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#d4a080]/20"></div>
              <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-[#d4a080]/20"></div>

              {/* Decorative landmarks */}
              <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-sm bg-[#d4a080]/30"></div>
              <div className="absolute bottom-1/4 right-1/4 w-6 h-6 rounded-sm bg-[#d4a080]/30"></div>
              <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-[#d4a080]/30"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
