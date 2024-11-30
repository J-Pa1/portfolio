import React from "react";
import { motion } from "framer-motion";

// ScaleUpOnHover component with animation and customizable properties
const ScaleUpOnHover = ({
  children,
  scaleFactor = 1.1, // Default scale factor
  duration = 0.3, // Default duration
  origin = "center", // Scaling origin (default to center)
  style = {}, // Allow custom styles to be passed
}) => {
  return (
    <motion.div
      style={style} // Allowing custom styles
      initial={{ scale: 1 }}
      whileHover={{
        scale: scaleFactor,
        transition: { duration: duration, type: "spring", stiffness: 300 },
      }}
      whileTap={{
        scale: 0.98, // Optional: add a slight scale down on tap for mobile experience
      }}
      animate={{ scale: 1 }}
      transformOrigin={origin} // Allow customization of scale origin
    >
      {children}
    </motion.div>
  );
};

export default ScaleUpOnHover;
