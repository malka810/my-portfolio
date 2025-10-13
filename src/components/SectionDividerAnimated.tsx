import React from "react";
import { motion } from "framer-motion";

const SectionDividerLine: React.FC = () => {
  return (
    <div className="relative w-full h-4 flex justify-center items-center overflow-hidden">
      <motion.div
        className="h-2 w-2/4 bg-gradient-to-r from-indigo-400 opacity-10 rounded-xl"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default SectionDividerLine;
