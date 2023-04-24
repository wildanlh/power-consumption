import React from "react";
import { motion } from "framer-motion";
import { childVariants } from "../motions/motionCard";

const Card = (props) => {
  return (
    <motion.div
      className="bg-white w-full h-full rounded-lg drop-shadow-md"
      variants={childVariants}
      initial="initial"
      animate="animate"
    >
      <div className="p-10">{props.children}</div>
    </motion.div>
  );
};

export default Card;
