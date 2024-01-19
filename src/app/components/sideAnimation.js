import { motion } from "framer-motion";

export default function SideAnimation({ children, delay, distance }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          opacity: 0,
          x: distance ? distance : 10,
        },
        visible: {
          x: 0,
          opacity: 1,
          transition: {
            delay: delay ? delay : 0,
            duration: 1,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
