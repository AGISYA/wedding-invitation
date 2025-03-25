"use client";

import { useEffect, useRef } from "react";

export function AutoScroll() {
  // Menghapus state isScrolling yang tidak digunakan
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const scrollingRef = useRef(false);

  // Sections to scroll through in order
  const sections = [
    "#couple",
    "#timeline",
    "#events",
    "#countdown",
    "#wishes",
    "#rsvp",
    "#gift",
    "#location",
  ];
  const scrollDuration = 5000; // Time to spend on each section in ms

  // Function to start auto-scrolling
  const startAutoScroll = () => {
    let currentSectionIndex = 0;

    const scrollToNextSection = () => {
      if (!scrollingRef.current) return;

      if (currentSectionIndex < sections.length) {
        const section = document.querySelector(sections[currentSectionIndex]);
        if (section) {
          console.log(`Scrolling to section: ${sections[currentSectionIndex]}`);
          section.scrollIntoView({ behavior: "smooth" });
          currentSectionIndex++;

          timeoutRef.current = setTimeout(scrollToNextSection, scrollDuration);
        } else {
          console.log(`Section not found: ${sections[currentSectionIndex]}`);
          currentSectionIndex++;
          timeoutRef.current = setTimeout(scrollToNextSection, 100); // Try next section quickly
        }
      } else {
        console.log("Auto-scroll complete");
        scrollingRef.current = false;
      }
    };

    // Start the auto-scroll process
    timeoutRef.current = setTimeout(scrollToNextSection, 1000); // Short delay before starting
  };

  useEffect(() => {
    // Listen for the welcome gate opened event
    const handleWelcomeGateOpened = () => {
      console.log("Welcome gate opened, starting auto-scroll");
      scrollingRef.current = true;
      startAutoScroll();
    };

    // Listen for user interaction to stop auto-scrolling
    const handleUserInteraction = () => {
      if (scrollingRef.current) {
        console.log("User interaction detected, stopping auto-scroll");
        scrollingRef.current = false;
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
      }
    };

    window.addEventListener("welcomeGateOpened", handleWelcomeGateOpened);

    // Events that indicate user interaction
    window.addEventListener("wheel", handleUserInteraction);
    window.addEventListener("touchmove", handleUserInteraction);
    window.addEventListener("keydown", handleUserInteraction);
    window.addEventListener("mousedown", handleUserInteraction);

    return () => {
      window.removeEventListener("welcomeGateOpened", handleWelcomeGateOpened);
      window.removeEventListener("wheel", handleUserInteraction);
      window.removeEventListener("touchmove", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
      window.removeEventListener("mousedown", handleUserInteraction);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  // Menambahkan komentar untuk menonaktifkan eslint warning

  // This component doesn't render anything visible
  return null;
}
