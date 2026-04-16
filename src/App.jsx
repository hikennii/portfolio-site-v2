import { useState, useEffect } from "react";
import "./index.css";
import Menu from "./components/menu.jsx";
import { motion, AnimatePresence } from "framer-motion";

import projectImg from "./assets/project.png";
import aboutImg from "./assets/about.png";
import resumeImg from "./assets/resume.png";
import experienceImg from "./assets/experience.png";
import contactImg from "./assets/contact.png";
import backIcon from "./assets/back.png";

import Projects from "./components/projects.jsx";
import About from "./components/about.jsx";
import Experience from "./components/experience.jsx";
import Contact from "./components/contact.jsx";
import Code from "./components/code.jsx";
import Media from "./components/media.jsx";

function App() {
  const [active, setActive] = useState("Projects");
  const [selectedPage, setSelectedPage] = useState(null);

  const content = {
    Projects: projectImg,
    About: aboutImg,
    Experience: experienceImg,
    Resume: resumeImg,
    Contact: contactImg,
  };

  const pages = {
    Projects: <Projects setSelectedPage={setSelectedPage} />,
    About: <About />,
    Experience: <Experience />,
    Contact: <Contact />,
    IT: (<motion.div
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 1.02 }}
    transition={{ duration: 0.4 }}
  >
      <Code />
    </motion.div>
    ),
    
    Media: (<motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.4 }}
    >
      <Media />
    </motion.div>
    ),
  };

  useEffect(() => {
    const cursor = document.getElementById("cursor");

    const move = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <div className="custom-cursor" id="cursor" />

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

      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backdropFilter: "blur(5px)",
          background: "rgba(0,0,0,0.02)",
          zIndex: -1,
        }}
      />

      <AnimatePresence mode="wait">
        {!selectedPage && (
          <motion.div
            key={selectedPage}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: "flex", height: "100vh", color: "white" }}
          >
            <div className="left">
              <Menu
                active={active}
                setActive={setActive}
                setSelectedPage={setSelectedPage}
              />
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
                    maxWidth: "700px",
                    borderRadius: "10px",
                  }}
                />
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedPage && selectedPage !== "Resume" && (
          <motion.div
            key="back"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: "40px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 9999,
            }}
            onClick={() => setSelectedPage(null)}
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              style={{
                display: "inline-block",
                textShadow: "0px 4px 10px rgba(0,0,0,1)",
                color: "white",
              }}
            >
              <img
                src={backIcon}
                style={{ width: "35px"}}
              />
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {selectedPage && selectedPage !== "Resume" && (
          <motion.div
            key="page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              color: "white",
              zIndex: 50,
            }}
          >
            <div style={{ 
              padding: 
                selectedPage === "Projects" 
                ? "0 40px 40px" 
                : "100px 40px 40px", 
              height: "100%" 
              }}
            >
              {pages[selectedPage]}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;