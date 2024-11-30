import React from "react";
import { motion, useInView } from "framer-motion";
import PropTypes from "prop-types";

const SlideIn = ({
  direction = "up",
  children,
  distance = 20,
  duration = 0.5,
  delay = 0,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });

  const slideDirections = {
    left: { x: -distance, opacity: 0 },
    right: { x: distance, opacity: 0 },
    up: { y: distance, opacity: 0 },
    down: { y: -distance, opacity: 0 },
  };

  const initial = slideDirections[direction] || slideDirections.up;

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: initial,
        visible: {
          x: 0,
          y: 0,
          opacity: 1,
          transition: {
            duration,
            delay,
            ease: "easeOut",
          },
        },
      }}
      style={{ display: "inline-block", width: "100%" }}
    >
      {children}
    </motion.span>
  );
};

// Prop validation
SlideIn.propTypes = {
  direction: PropTypes.oneOf(["left", "right", "up", "down"]),
  children: PropTypes.node.isRequired,
  distance: PropTypes.number,
  duration: PropTypes.number,
  delay: PropTypes.number,
};

SlideIn.defaultProps = {
  direction: "up",
  distance: 20,
  duration: 0.5,
  delay: 0,
};

export default SlideIn;
