import { useState } from "react";
import "./index.css";
import Menu from "./components/menu.jsx";
import { motion, AnimatePresence } from "framer-motion";

import projectImg from "./assets/project.png";
import aboutImg from "./assets/about.png";
import resumeImg from "./assets/resume.png";
import experienceImg from "./assets/experience.png";
import contactImg from "./assets/contact.png";

function App() {
  const [active, setActive] = useState("Projects");

  const content = {
    Projects: projectImg,
    About: aboutImg,
    Experience: experienceImg,
    Resume: resumeImg,
    Contact: contactImg,
  };

  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      <div style={{ display: "flex", height: "100vh", color: "white" }}>
        
        <div className="left">
          <Menu active={active} setActive={setActive} />
        </div>

        <div className="right">
          <AnimatePresence mode="wait">
            <motion.img
              key={active}
              src={content[active]}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.29}}
              style={{
                width: "25%",
                maxWidth: "700px",
                borderRadius: "10px",
              }}
            />
          </AnimatePresence>
        </div>

      </div>
    </>
  );
}

export default App;