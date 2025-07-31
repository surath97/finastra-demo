import { motion, useScroll } from "framer-motion";

const Scrollindicator = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      id="scroll-indicator"
      style={{
        scaleX: scrollYProgress,
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: 10,
        originX: 0,
      }}
      className="!bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500"
    />
  );
};

export default Scrollindicator;
