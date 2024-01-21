"use client";
import { easeInOut, motion } from "framer-motion";
import { useEffect } from "react";

const Modal = ({ closeModal, children, open }) => {
  useEffect(() => {
    // Attach the 'keydown' event listener to the document
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    });
  }, []);
  const handleChildClick = (e) => {
    e.stopPropagation();
  };
  if (open) {
    return (
      <motion.div
        whileFocus={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="z-[500] fixed top-0 min-h-screen min-w-full bg-black/90 flex justify-center items-center modal-overlay"
        onClick={closeModal}
      >
        <svg
          className="h-8 w-8 text-secondary-light fixed lg:top-10 lg:right-10 max-lg:right-5 max-lg:top-5 z-[600]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={closeModal}
        >
          {" "}
          <circle cx="12" cy="12" r="10" />{" "}
          <line x1="15" y1="9" x2="9" y2="15" />{" "}
          <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
        <motion.div
          initial={{ y: "150%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "150%", opacity: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            ease: "easeOut",
          }}
          onClick={handleChildClick}
          className="rounded-xl shadow-xl lg:p-12 max-lg:p-6 overflow-y-scroll max-h-[90vh]"
        >
          {children}
        </motion.div>
      </motion.div>
    );
  } else {
    return null;
  }
};

export default Modal;
