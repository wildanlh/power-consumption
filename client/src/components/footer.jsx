import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full py-5 flex items-center justify-center bg-[#F3F4F6]">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Developed by <b>Wildan Luqmanul Hakim</b>
      </motion.span>
    </footer>
  );
};

export default Footer;
