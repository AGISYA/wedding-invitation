"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Check, Loader2 } from "lucide-react";

export function Rsvp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [attendance, setAttendance] = useState("hadir");
  const [numberOfGuests, setNumberOfGuests] = useState("1");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after submission
    setName("");
    setEmail("");
    setPhone("");
    setAttendance("hadir");
    setNumberOfGuests("1");
    setMessage("");
  };

  return (
    <section
      id="rsvp"
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
            RSVP
            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#d4a080]"></div>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Mohon konfirmasi kehadiran Anda untuk membantu kami mempersiapkan
            acara dengan baik
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md mx-auto bg-[#1d1d1d] p-6 sm:p-8 rounded-lg shadow-lg border border-[#3d3d3d]"
        >
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-[#d4a080]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-[#d4a080]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif text-white mb-4">
                Terima Kasih!
              </h3>
              <p className="text-gray-400">
                RSVP Anda telah kami terima. Kami sangat menantikan kehadiran
                Anda di hari bahagia kami.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-300">
                  Nama
                </Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Masukkan nama lengkap Anda"
                  className="bg-[#2d2d2d] border-[#3d3d3d] text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Masukkan alamat email Anda"
                  className="bg-[#2d2d2d] border-[#3d3d3d] text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-300">
                  Nomor Telepon
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  placeholder="Masukkan nomor telepon Anda"
                  className="bg-[#2d2d2d] border-[#3d3d3d] text-white"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-gray-300">Kehadiran</Label>
                <RadioGroup value={attendance} onValueChange={setAttendance}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="hadir"
                      id="hadir"
                      className="text-[#d4a080]"
                    />
                    <Label htmlFor="hadir" className="text-gray-300">
                      Saya akan hadir
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="tidak-hadir"
                      id="tidak-hadir"
                      className="text-[#d4a080]"
                    />
                    <Label htmlFor="tidak-hadir" className="text-gray-300">
                      Maaf, saya tidak bisa hadir
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {attendance === "hadir" && (
                <div className="space-y-2">
                  <Label htmlFor="guests" className="text-gray-300">
                    Jumlah Tamu
                  </Label>
                  <select
                    id="guests"
                    value={numberOfGuests}
                    onChange={(e) => setNumberOfGuests(e.target.value)}
                    className="w-full rounded-md border border-[#3d3d3d] bg-[#2d2d2d] p-2 text-white focus:outline-none focus:ring-2 focus:ring-[#d4a080]"
                  >
                    <option value="1">1 orang</option>
                    <option value="2">2 orang</option>
                    <option value="3">3 orang</option>
                    <option value="4">4 orang</option>
                  </select>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-300">
                  Pesan (Opsional)
                </Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tulis pesan untuk kami"
                  className="min-h-[100px] bg-[#2d2d2d] border-[#3d3d3d] text-white"
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
                  "Konfirmasi Kehadiran"
                )}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
