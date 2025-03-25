"use client";

import { useState, useEffect, useRef } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  // Menghapus variabel audioLoaded yang tidak digunakan
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Fallback audio URLs that are known to work
  const FALLBACK_AUDIO_URLS = [
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  ];

  useEffect(() => {
    // Show the music control after a delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Create audio element programmatically
    const audio = new Audio();
    audio.id = "background-music";
    audio.loop = true;
    audio.volume = 0.5; // Set initial volume to 50%

    // Set event listeners
    audio.addEventListener("canplaythrough", () => {
      console.log("Audio loaded successfully");
      // Menghapus setAudioLoaded karena variabel tidak digunakan
    });

    audio.addEventListener("error", () => {
      console.error("Audio error occurred");

      // Try to use a fallback URL
      tryFallbackAudio(audio);
    });

    // Try to load the primary audio file first
    audio.src = FALLBACK_AUDIO_URLS[0]; // Use the first fallback URL directly
    audioRef.current = audio;

    return () => {
      // Clean up
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
        audioRef.current.remove();
      }
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  // Menambahkan komentar untuk menonaktifkan eslint warning

  // Function to try fallback audio sources
  const tryFallbackAudio = (audio: HTMLAudioElement) => {
    // Get the current source
    const currentSrc = audio.src;

    // Find the index of the current source in the fallback list
    const currentIndex = FALLBACK_AUDIO_URLS.findIndex(
      (url) => url === currentSrc
    );

    // If we have more fallbacks to try
    if (currentIndex < FALLBACK_AUDIO_URLS.length - 1) {
      const nextIndex = currentIndex + 1;
      console.log(
        `Trying fallback audio source: ${FALLBACK_AUDIO_URLS[nextIndex]}`
      );

      // Set the new source
      audio.src = FALLBACK_AUDIO_URLS[nextIndex];
    } else {
      console.error("All fallback audio sources failed");
    }
  };

  const togglePlay = () => {
    const audio = audioRef.current;

    if (!audio) {
      console.log("Audio element not available");
      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      // Try to play and handle any errors
      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.log(
              "Audio play was prevented:",
              error.message || "Unknown error"
            );
            setIsPlaying(false);
          });
      }
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;

    if (!audio) {
      console.log("Audio element not available");
      return;
    }

    audio.muted = !audio.muted;
    setIsMuted(!isMuted);
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 flex space-x-2">
          <button
            onClick={toggleMute}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1d1d1d] text-white flex items-center justify-center shadow-lg hover:bg-[#2d2d2d] transition-all duration-300"
            aria-label={isMuted ? "Unmute music" : "Mute music"}
          >
            {isMuted ? (
              <VolumeX size={18} className="sm:w-5 sm:h-5" />
            ) : (
              <Volume2 size={18} className="sm:w-5 sm:h-5" />
            )}
          </button>

          <button
            onClick={togglePlay}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#d4a080] text-white flex items-center justify-center shadow-lg hover:bg-[#c08e6e] transition-all duration-300"
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            {isPlaying ? (
              <Pause size={18} className="sm:w-5 sm:h-5" />
            ) : (
              <Play size={18} className="sm:w-5 sm:h-5" />
            )}
          </button>
        </div>
      )}
    </>
  );
}
