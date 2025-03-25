"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WelcomeGate() {
  const [isOpen, setIsOpen] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    // Check if user has already opened the gate
    const hasOpened = localStorage.getItem("welcomeGateOpened");
    if (hasOpened) {
      setIsOpen(false);
    }
  }, []);

  const handleOpen = () => {
    setIsOpen(false);
    localStorage.setItem("welcomeGateOpened", "true");

    // Dispatch a custom event that can be listened to by other components
    const event = new CustomEvent("welcomeGateOpened");
    window.dispatchEvent(event);

    // Log to confirm event was dispatched
    console.log("Welcome gate opened event dispatched");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1d1d1d] text-white"
        >
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-lg px-4 sm:px-6 py-8 sm:py-12 text-center">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-16 sm:w-24 h-16 sm:h-24 border-t-2 border-l-2 border-[#d4a080]" />
            <div className="absolute bottom-0 right-0 w-16 sm:w-24 h-16 sm:h-24 border-b-2 border-r-2 border-[#d4a080]" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-4"
            >
              <p className="text-[#d4a080] uppercase tracking-[0.2em] text-xs sm:text-sm mb-2">
                Undangan Pernikahan
              </p>
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              animate={isLoaded ? { scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
              className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full flex items-center justify-center border border-[#d4a080]"
            >
              <Heart className="text-[#d4a080] w-6 h-6 sm:w-8 sm:h-8" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl mb-2"
            >
              Andi & Budi
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="mb-6 sm:mb-8"
            >
              <p className="text-gray-400">5 Juni 2025</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              <p className="text-gray-300 mb-6 sm:mb-8 max-w-md mx-auto text-sm sm:text-base">
                Kepada Bapak/Ibu/Saudara/i,
                <br />
                Kami mengundang Anda untuk berbagi kebahagiaan di hari
                pernikahan kami
              </p>

              <Button
                onClick={handleOpen}
                className="bg-[#d4a080] hover:bg-[#c08e6e] text-white border-none rounded-full px-6 py-2 sm:px-8 sm:py-6"
              >
                Buka Undangan
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
