import React from "react";
import { motion } from "framer-motion";

// This component is responsible for staggering and animating children sequentially
const SequenceAnimator = ({
  children,
  parentVariants,
  childVariants,
  staggerDuration = 0.6,
}) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={parentVariants} // Parent animation variants
      transition={{
        staggerChildren: staggerDuration, // Stagger children animation
      }}
    >
      {React.Children.map(children, (child, index) => {
        return (
          <motion.div key={index} variants={childVariants}>
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default SequenceAnimator;
