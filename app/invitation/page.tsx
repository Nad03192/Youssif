'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './invitation.css';

const InvitationPage = () => {
  const [started, setStarted] = useState(false);
  const [showText, setShowText] = useState(false);
  const carAudioRef = useRef(null);

  const handleStartClick = () => {
    setStarted(true);
    carAudioRef.current.play();
  };

  const handleCarEnd = () => {
    carAudioRef.current.pause();
    carAudioRef.current.currentTime = 0;
    setShowText(true);
  };

  return (
    <div className="invitation-container">
      <audio ref={carAudioRef} src="/car.mp3" />

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

      {started && !showText && (
        <motion.img
          src="/top.png"
          alt="Car"
          className="absolute left-1/2 w-48 -translate-x-1/2 z-20"
          initial={{ y: "100vh", rotate: 90 }}
          animate={{ y: "-100vh", rotate: 90 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          onAnimationComplete={handleCarEnd}
        />
      )}

      {showText && (
        <motion.div
          className="text-overlay relative z-10 text-center text-white font-bold overflow-hidden"
          initial={{ clipPath: 'inset(0 0 100% 0)' }}
          animate={{ clipPath: 'inset(0 0 0% 0)' }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        >
          <motion.h1
            className="text-4xl md:text-6xl mb-4 tracking-wide smoky-text"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            🏁 Gentlemen, start your engines!
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl mb-6 smoky-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Youssef is speeding into <span className="text-red-500">3 years old!</span>
          </motion.p>

          <motion.p
            className="text-xl md:text-2xl mb-4 smoky-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Join us for a day full of <span className="text-yellow-300">fun, snacks, and speed!</span> 🚗💨
          </motion.p>

          <motion.div
            className="text-lg md:text-xl mt-8 space-y-2 smoky-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <p>📍 <strong>Snack Bechouat</strong></p>
            <p>🗓️ <strong>Saturday, November 8 — 4:30 PM</strong></p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default InvitationPage;
