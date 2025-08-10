import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-32">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
        className="w-8 h-8 border-4 border-purple-200 border-t-purple-600 rounded-full"
      />
    </div>
  );
};

export default LoadingSpinner;