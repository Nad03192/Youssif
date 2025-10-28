'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './invitation.css';

const InvitationPage: React.FC = () => {
  const [started, setStarted] = useState(false);
  const [showText, setShowText] = useState(false);
  const carAudioRef = useRef<HTMLAudioElement>(null);

  const handleStartClick = () => {
    setStarted(true);
    carAudioRef.current?.play(); // optional chaining prevents TS errors
  };

  const handleCarEnd = () => {
    if (carAudioRef.current) {
      carAudioRef.current.pause();
      carAudioRef.current.currentTime = 0;
    }
    setShowText(true);
  };

  return (
    <div className="invitation-container overflow-hidden">
      <audio ref={carAudioRef} src="/car.mp3" />

      {/* Start Button */}
      {!started && (
        <motion.button
          className="bg-red-600 text-white px-6 py-3 rounded-xl text-lg font-bold shadow-lg hover:bg-red-700 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleStartClick}
        >
          🚗 Start the Engine!
        </motion.button>
      )}

      {/* Car + Text moving together */}
      {started && (
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 text-center z-20 w-full"
          initial={{ y: '100vh' }}
          animate={{ y: '-17vh' }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          onAnimationComplete={handleCarEnd}
        >
          {/* Car */}
          <motion.img
            src="/top.png"
            alt="Car"
            className="mx-auto w-48 mb-10"
            initial={{ rotate: 90 }}
            animate={{ rotate: 90 }}
          />

          {/* Text rising with car */}
          <motion.div
            className="text-white font-bold smoky-text mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl mb-4 tracking-wide">
              🏁 Gentlemen, start your engines!
            </h1>

            <p className="text-2xl md:text-3xl mb-6">
              Youssef is speeding into <span className="text-red-500">3 years old!</span>
            </p>

            <p className="text-xl md:text-2xl mb-4">
              Join us for a day full of <span className="text-yellow-300">fun, snacks, and speed!</span> 🚗💨
            </p>

            <div className="text-lg md:text-xl mt-8 space-y-2">
              <p>📍 <strong>Snack Bechouat</strong></p>
              <p>🗓️ <strong>Saturday, November 8 — 4:30 PM</strong></p>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Optional: text remains static after car stops */}
      {showText && (
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white font-bold z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-lg italic">See you at the race! 🏎️</p>
        </motion.div>
      )}
    </div>
  );
};

export default InvitationPage;
