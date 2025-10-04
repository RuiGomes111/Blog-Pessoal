"use client";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa6";

export default function HeroSection(){
  return(
    <div className="mt-15">
      <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-white"
        >
          <span className="text-sm mb-1">Scroll</span>
          <FaArrowDown className="w-6 h-6 text-[#D8973C]" />
        </motion.div>
    </div>
  )
}