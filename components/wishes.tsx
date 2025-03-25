"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Send } from "lucide-react";

export function Wishes() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [wishes, setWishes] = useState([
    {
      id: 1,
      name: "Ahmad & Keluarga",
      message:
        "Selamat menempuh hidup baru! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah.",
      date: "2 minggu yang lalu",
    },
    {
      id: 2,
      name: "Siti Aminah",
      message:
        "Barakallah untuk pernikahan kalian. Semoga menjadi pasangan yang selalu bahagia dan saling melengkapi.",
      date: "1 minggu yang lalu",
    },
    {
      id: 3,
      name: "Keluarga Besar Santoso",
      message:
        "Selamat atas pernikahan kalian! Semoga cinta kalian abadi selamanya.",
      date: "5 hari yang lalu",
    },
  ]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newWish = {
      id: wishes.length + 1,
      name,
      message,
      date: "Baru saja",
    };

    setWishes([newWish, ...wishes]);
    setName("");
    setMessage("");
    setIsSubmitting(false);
  };

  return (
    <section id="wishes" className="py-16 md:py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-4 relative inline-block">
            Ucapan & Doa
            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#d4a080]"></div>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6">
            Berikan ucapan dan doa terbaik Anda untuk kami
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-6 md:gap-8">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[#f9f9f9] p-4 sm:p-6 rounded-lg shadow-md"
            >
              <h3 className="text-lg sm:text-xl font-serif text-gray-800 mb-4">
                Kirim Ucapan
              </h3>

              <div className="space-y-4">
                <div>
                  <Input
                    placeholder="Nama Anda"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="border-gray-300 focus:border-[#d4a080] focus:ring-[#d4a080]"
                  />
                </div>

                <div>
                  <Textarea
                    placeholder="Tulis ucapan dan doa Anda di sini..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="min-h-[120px] border-gray-300 focus:border-[#d4a080] focus:ring-[#d4a080]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#d4a080] hover:bg-[#c08e6e] text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Kirim Ucapan
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-3"
          >
            <div className="bg-white rounded-lg shadow-md border border-gray-100 h-[300px] sm:h-[400px] overflow-y-auto p-4">
              {wishes.map((wish, index) => (
                <div
                  key={wish.id}
                  className="mb-4 pb-4 border-b border-gray-100 last:border-0"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-gray-800">{wish.name}</h4>
                    <span className="text-xs text-gray-500">{wish.date}</span>
                  </div>
                  <p className="text-gray-600">{wish.message}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
