import { motion } from "framer-motion";

export default function Menu({active, setActive, setSelectedPage}) {
  const items = ["Projects", "About", "Experience", "Resume", "Contact"];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.23
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
          onClick={() => {
            if (item === "Resume") {
              const link = document.createElement("a");
              link.href = "/Kenny Le - Resume.pdf";
              link.download = "Kenny-Le-Resume.pdf";
              link.click();
            } else {
              setSelectedPage(item);
            }
          }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: active === item ? 1 : 0.3,
              y: 0,
            },
          }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.9 }}
          style={{
            fontSize: "3rem",
            textShadow: "rgba(0, 0, 0, 1) 0px 4px 10px, rgba(0, 0, 0, 1) 0px 10px 30px",
            margin: 0,
            transition: "opacity 0.2s ease",
          }}
        >
          {item}
        </motion.h1>
      ))}
    </motion.div>
  );
}