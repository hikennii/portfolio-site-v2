import { motion } from "framer-motion";

export default function Menu({ active, setActive }) {
  const items = ["Projects", "About", "Experience", "Resume", "Contact"];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "25px",
      }}
    >
      {items.map((item) => (
        <motion.h1
          key={item}
          onMouseEnter={() => setActive(item)}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }, 
          }}
          animate={{
            opacity: active === item ? 1 : 0.3,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          whileHover={{ scale: 1.03 }}
          style={{
            fontSize: "3rem",
            cursor: "pointer",
            margin: 0,
            transition: "opacity 0.2s ease",
            textShadow: "0px 4px 10px rgba(0, 0, 0, 25)",
          }}
        >
          {item}
        </motion.h1>
      ))}
    </motion.div>
  );
}