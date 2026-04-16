import "../index.css";
import linkedinImg from "../assets/linkedin.png";
import githubImg from "../assets/github.png";

export default function Contact() {
  return (
    <div className="info-container">
      <h2>Email: <strong>kennyto08618@gmail.com</strong></h2>
      <div style={{display:"flex", justifyContent:"center"}}>
        <a href="https://www.linkedin.com/in/kenny-le-3b81bb320/" target="_blank" style={{display:"flex", alignItems:"center"}}>
          <img src={linkedinImg} style={{width:"50px", display:"block"}}></img>
        </a>
        <a href="https://github.com/hikennii" target="_blank" style={{display:"flex", alignItems:"center"}}>
          <img src={githubImg} style={{width:"50px", display:"block"}}></img>
        </a>
      </div>
    </div>
)
}