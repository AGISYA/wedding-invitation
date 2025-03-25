"use client";

import { useEffect, useRef, useState } from "react";

// This component handles audio loading and playing without rendering UI
export function AudioPlayer() {
  const [audioLoaded, setAudioLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window === "undefined") return;

    // Create audio element programmatically
    let audio: HTMLAudioElement;

    try {
      audio = new Audio();
      audio.id = "background-music";
      audio.loop = true;
      audio.volume = 0.5; // Set initial volume to 50%

      // Set event listeners
      audio.addEventListener("canplaythrough", () => {
        console.log("Audio loaded successfully");
        setAudioLoaded(true);
        // Store the audio element in the window object for global access
        window.backgroundMusic = audio;
      });

      audio.addEventListener("error", (e) => {
        const errorEvent = e as ErrorEvent;
        const errorMessage = errorEvent.message || "Could not load audio file";
        console.error("Audio error:", errorMessage);

        // Try to use a fallback audio source
        tryFallbackAudio(audio);
      });

      // Try to load the audio file
      // Use a romantic wedding song
      audio.src =
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3";
      audioRef.current = audio;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      console.error("Error creating audio element:", errorMessage);
    }

    return () => {
      // Clean up
      if (audioRef.current) {
        try {
          audioRef.current.pause();
          audioRef.current.removeEventListener("canplaythrough", () => {});
          audioRef.current.removeEventListener("error", () => {});
        } catch (err) {
          console.error("Error cleaning up audio:", err);
        }
      }
    };
  }, []);

  // Function to try fallback audio sources if the main one fails
  const tryFallbackAudio = (audio: HTMLAudioElement) => {
    // List of fallback audio sources
    const fallbackSources = [
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    ];

    // Try each fallback source
    for (let i = 0; i < fallbackSources.length; i++) {
      try {
        console.log(`Trying fallback audio source ${i + 1}`);
        audio.src = fallbackSources[i];
        return; // Exit after setting the first fallback
      } catch (err) {
        console.error(`Error setting fallback audio source ${i + 1}:`, err);
      }
    }
  };

  // This component doesn't render anything visible
  return null;
}

// Add a global type declaration for the window object
declare global {
  interface Window {
    backgroundMusic?: HTMLAudioElement;
  }
}
