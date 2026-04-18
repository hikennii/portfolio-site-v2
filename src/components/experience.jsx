import itImg from "../assets/code.png";
import mediaImg from "../assets/media.png";
import graphicsImg from "../assets/graphics.png";

export default function Experience() {
  return (
    <div className="info-container-backdrop">
      <h1>Experiences</h1>
      <br/>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img src={itImg} style={{width:"40px", display:"flex"}}></img>
        <h3>Level 1 Consultant</h3>
      </div>
      <p>Rutgers Office of Information Technology</p>
      <p>Aug 2025 - Present</p>
      <ul style={{textAlign:"left", width:"70%"}}>
        <li>Delivered technical support to students, faculty, and staff via ServiceNow and in-person assistance in campus computer labs.</li>
        <li>Ensured a clean, organized, and user-friendly environment across all lab facilities.</li>
        <li>Managed and replenished lab technologies, including printers, peripherals, and related equipment, to support daily operations.</li>
        <li>Delivered on-site, door-to-door technical support for incoming students during move-in, efficiently diagnosing and resolving a wide range of technology issues to ensure a smooth transition.</li>
      </ul>
      <br/>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{ display:"flex",gap:"0px"}}>
          <img src={mediaImg} style={{width:"40px", display:"flex"}}></img>
          <img src={graphicsImg} style={{width:"40px", display:"flex"}}></img>
        </div>
        <h3>Graphic Designer & Photo Editor</h3>
      </div>
      <p>Wong Way Media</p>
      <p>Dec 2024 - Present</p>
      <ul style={{textAlign:"left"}}>
        <li>Communicated and worked with others to get crucial information on events.</li>
        <li>Utilized Canva, Adobe Photoshop, and Adobe Lightroom.</li>
        <li>Designed graphics for Instagram posts, for marketing towards 3,000+ followers.</li>
        <li>Color graded photos for clients, ensuring quality and alignment with creative vision.</li>
      </ul>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{ display:"flex",gap:"0px"}}>
          <img src={mediaImg} style={{width:"40px", display:"flex"}}></img>
          <img src={graphicsImg} style={{width:"40px", display:"flex"}}></img>
        </div>
        <h3>Visual Media Coordinator (Historian)</h3>
      </div>
      <p>Rutgers University Vietnamese Student Association</p>
      <p>Dec 2024 - Present</p>
      <ul style={{textAlign:"left"}}>
        <li>Produced and directed a film for a charity event, engaging over 300 attendees.</li>
        <li>Generated photos and video to promote for the club’s social media account, with a following of 2,000+ followers.</li>
        <li>Applied various photo editing and video editing software, such as Adobe After Effects and Adobe Premiere Pro.</li>
        <li>Led large productions and photoshoots with over 25+ participants.</li>
        <li>Collaborated and communicated with 20+ other club members and sponsorships to form new content.</li>
      </ul>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{ display:"flex",gap:"0px"}}>
          <img src={mediaImg} style={{width:"40px", display:"flex"}}></img>
          <img src={graphicsImg} style={{width:"40px", display:"flex"}}></img>
        </div>
        <h3>Brand Marketing</h3>
      </div>
      <p>Antonius LLC</p>
      <p>Feb 2025 - June 2025</p>
      <ul style={{textAlign:"left", width:"75%"}}>
        <li>Utilized Adobe Photoshop, Adobe Lightroom, and Adobe Premiere Pro.</li>
        <li>Designed and produced weekly product advertisements and high-quality photos for public relations, ensuring brand consistency and audience engagement.</li>
        <li>Followed brand style guidelines to create content and communicated with team members to align messaging and design.</li>
      </ul>
      <h3>Student Assistant</h3>
      <p>Asian American Cultural Center</p>
      <p>Feb 2024 - Present</p>
      <ul style={{textAlign:"left", width:"55%"}}>
        <li>Collaborated with over 20+ staff and volunteers to create smooth, successful event experiences.</li>
        <li>Contributed to the preparation and planning of cultural programs and community events.</li>
        <li>Distributed food and supplies to event attendees, ensuring they had a smooth and enjoyable experience.</li>
      </ul>
    </div>
  )
}