"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Copy, Check, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

export function GiftRegistry() {
  const [copied, setCopied] = useState<string | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const giftOptions = [
    {
      id: "bank1",
      bank: "Bank BCA",
      accountNumber: "1234567890",
      accountName: "Andi Putri",
    },
    {
      id: "bank2",
      bank: "Bank Mandiri",
      accountNumber: "0987654321",
      accountName: "Budi Santoso",
    },
  ];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="gift" className="py-20 bg-[#f5f5f5]" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4 relative inline-block">
            Kirim Hadiah
            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#d4a080]"></div>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6">
            Kehadiran dan doa Anda adalah hadiah terbaik bagi kami. Namun, jika
            Anda ingin memberikan hadiah, Anda dapat mengirimkannya melalui:
          </p>
        </motion.div>

        <div className="max-w-md mx-auto">
          {giftOptions.map((option, index) => (
            <motion.div
              key={option.id}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#d4a080]/10 rounded-full flex items-center justify-center mr-4">
                  <Gift className="w-5 h-5 text-[#d4a080]" />
                </div>
                <h3 className="font-serif text-xl text-gray-800">
                  {option.bank}
                </h3>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-1">Nomor Rekening</p>
                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                  <p className="font-mono text-gray-800">
                    {option.accountNumber}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      handleCopy(option.accountNumber, `${option.id}-number`)
                    }
                    className="h-8 px-2"
                  >
                    {copied === `${option.id}-number` ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">Atas Nama</p>
                <p className="text-gray-800">{option.accountName}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
