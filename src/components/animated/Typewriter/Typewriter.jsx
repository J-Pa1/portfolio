import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Typewriter = ({ text, speed }) => {
  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <motion.div
      style={{
        fontFamily: "monospace",
        fontSize: "1.25rem",
        whiteSpace: "pre",
        display: "inline-block",
      }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          transition={{
            opacity: { delay: (index * speed) / 1000, duration: 0.05 }, // Delay for each character (converted to seconds)
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Prop types validation
Typewriter.propTypes = {
  text: PropTypes.string.isRequired, // Ensures text is passed and is a string
  speed: PropTypes.number, // Ensures speed is a number (optional)
};

// Default props for fallback
Typewriter.defaultProps = {
  speed: 100, // Default speed is 100ms
};

export default Typewriter;
