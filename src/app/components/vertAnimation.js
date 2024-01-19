import { motion } from "framer-motion";

export default function VertAnimation({ children, delay }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          opacity: 0,
          y: 10,
        },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            delay: delay ? delay : 0,
            duration: 1,
          },
        },
      }}
      className="text-4x z-20"
    >
      {children}
    </motion.div>
  );
}
