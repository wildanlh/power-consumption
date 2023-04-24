import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 z-40 bg-white">
      <div className="container mx-auto px-10 md:px-28 lg:px-80 py-8">
        <div className="flex justify-between items-center">
          <div className="text-emerald-400">
            <motion.a
              href="/"
              className="text-2xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Greenie Web
            </motion.a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
