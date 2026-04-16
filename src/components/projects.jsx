import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import itImg from "../assets/code.png";
import mediaImg from "../assets/media.png";

export default function Projects({ setSelectedPage }) {
  const [active, setActive] = useState("IT");
  const [isExiting, setIsExiting] = useState(false);

  const content = {
    IT: itImg,
    Media: mediaImg,
  };

  const items = ["IT", "Media"];

  return (
    <motion.div
      style={{ display: "flex", height: "100%" }}
      animate={{ opacity: isExiting ? 0 : 1 }} 
      transition={{ duration: 0.5 }}
    >
      <div className="left">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.23,
              },
            },
          }}
        >
          {items.map((item) => (
            <motion.h1
              key={item}
              onMouseEnter={() => setActive(item)}
              onClick={() => {
                setIsExiting(true); 

                setTimeout(() => {
                  setSelectedPage(item); 
                }, 500);
              }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: active === item ? 1 : 0.3,
                  y: 0,
                },
              }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                marginBottom: "20px",
                transition: "opacity 0.2s ease",
                textShadow: "rgba(0, 0, 0, 1) 0px 4px 10px, rgba(0, 0, 0, 1) 0px 10px 30px",
              }}
            >
              {item}
            </motion.h1>
          ))}
        </motion.div>
      </div>

      <div className="right">
        <AnimatePresence mode="wait">
          <motion.img
            key={active}
            src={content[active]}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            style={{
              width: "25%",
              borderRadius: "10px",
            }}
          />
        </AnimatePresence>
      </div>
    </motion.div>
  );
}