import "../index.css";
import meImg from "../assets/me.png";

export default function About() {
  return (
    <div className="info-container-backdrop">
      <h1>About me!</h1>
      <img src={meImg} style={{width:"10%", margin:"0"}}/>
      <h2 style={{fontWeight:"bold"}}>I'm Kenny!</h2>
      <div style={{width:"80%"}}>
        <h3>
          I’m an Information Technology and Informatics student at Rutgers University with minors in Data Science and Digital Communication, Information, and Media. I’m interested in the mix between technology, data, and creative media.
          <br/><br/>
          On the technical side, I’ve worked as a Level 1 Consultant with Rutgers Office of Information Technology, where I help troubleshoot issues and support students, faculty, and staff. I also like working on projects where I can build things that are both functional and easy to use.
          <br/><br/>
          At the same time, I have a strong background in media. I’ve done graphic design, photo editing, and content creation for social media, and I’ve worked on larger creative projects like videos and event productions. I pay attention not just to how something works, but how it looks and feels.
          <br/><br/>
          Overall, I enjoy combining problem solving with creativity. Whether I’m working on a technical project or something media related, I try to make it clean, engaging, and well thought out. I’m looking to keep growing in roles where I can use both my technical skills and creative side.
          
        </h3>
      </div>
    </div>
  )
}