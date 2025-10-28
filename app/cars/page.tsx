// app/cars/page.tsx
'use client';

import { motion } from 'framer-motion';
import React from 'react';
import './cars.css'; // optional CSS for styling

const CarsPage = () => {
  return (
    <div className="cars-container">
      <motion.div
        className="car"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
      >
        🚗
      </motion.div>

      <motion.div
        className="car"
        animate={{ x: ['100%', '-100%'] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'linear' }}
      >
        🚙
      </motion.div>
    </div>
  );
};

export default CarsPage;
