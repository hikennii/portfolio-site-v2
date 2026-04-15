import { useState } from "react";
import './index.css'
import Menu from "./components/menu.jsx";
import { motion } from "framer-motion";

import projectImg from "./assets/project.png";
import aboutImg from "./assets/about.png";
import resumeImg from "./assets/resume.png";
import experienceImg from "./assets/experience.png";

function App() {
  const [active, setActive] = useState("Projects");

  const content = {
    Projects: projectImg,
    About: aboutImg,
    Experience: experienceImg,
    Resume: resumeImg,
  };

  return (
    <div style={{ display: "flex", height: "100vh", color: "white" }}>
      <div className="left">
        <Menu active={active} setActive={setActive} />
      </div>

      <div className="right">
        <motion.img
        key={active}
        src={content[active]}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25}}
        style={{
          width: "25%",
          maxWidth: "700px",
          borderRadius: "10px",
        }}
/>
      </div>
    </div>
  );
}

export default App;