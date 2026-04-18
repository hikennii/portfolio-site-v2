export default function Code() {
  return (
    <div className="info-container-backdrop">
      <h1>Coding Projects</h1>
      <br/>
      <h3>Minecraft Modpack</h3>
      <img src="/modpack.jpg" style={{ boxShadow:"rgba(0, 0, 0, 1) 0px 4px 10px", width:"200px", borderRadius:"20px"}}/>
      <div style={{display:"flex", gap:"30px", marginTop:"10px"}}>
        <a href="https://www.curseforge.com/minecraft/modpacks/fearborne-horror-rpg-adventure" target="_blank" className="mediabutton" style={{margin:"10px", padding: "3px 20px"}}>CurseForge</a>
      </div>
      <ul style={{textAlign:"left", width:"70%"}}>
        <li>Solo-developed multiple Minecraft modpacks, creating custom UI, questlines, and gameplay mechanics using community tools, garnering up to 27,000+ downloads.</li>
        <li>Secured and managed numerous sponsorships, negotiating terms and maintaining relationships with sponsors for ongoing project support.</li>
        <li>Project manager for a collaborative modpack project, overseeing team roles, task delegation, and progress tracking.</li>
      </ul>
      <br/>
      <h3>ShutterLab</h3>
      <img src="/shutterlab.png" style={{ boxShadow:"rgba(0, 0, 0, 1) 0px 4px 10px", width:"500px", borderRadius:"20px"}}/>
      <div style={{display:"flex", gap:"30px", marginTop:"10px"}}>
        <a href="https://shutterlab.vercel.app/" target="_blank" className="mediabutton" style={{margin:"10px", padding: "3px 20px"}}>Link</a>
      </div>
      <ul style={{textAlign:"left", width:"70%"}}>
        <li>Developed a full-stack camera recommendation web application using React and Vercel serverless functions.</li>
        <li>Integrated eBay Browse API to fetch real-time marketplace pricing and product images.</li>
        <li>Developed a camera filtering system that allows users to search for cameras based on budget and desired specifications.</li>
        <li>Built and styled the user interface using HTML and CSS, focusing on layout, spacing, and responsive design.</li>
      </ul>
      <br/>
      <h3>MoodMix</h3>
      <img src="/moodmix.png" style={{ boxShadow:"rgba(0, 0, 0, 1) 0px 4px 10px", width:"500px", borderRadius:"20px"}}/>
      <div style={{display:"flex", gap:"30px", marginTop:"10px"}}>
        <a href="https://hikennii.github.io/moodmix/" target="_blank" className="mediabutton" style={{margin:"10px", padding: "3px 20px"}}>Link</a>
      </div>
      <ul style={{textAlign:"left", width:"70%"}}>
        <li>Developed a mood-based music discovery web application that recommends songs based on user-input emotions and keywords.</li>
        <li>Integrated the Deezer API to fetch and display real-time track and artist data.</li>
        <li>Built the application using HTML, CSS, and JavaScript, focusing on core web development fundamentals.</li>
        <li>Designed a dynamic mood-to-music mapping system that translates user inputs into relevant song recommendations.</li>
      </ul>
      <br/>
      <h3>Pomodoro Idle</h3>
      <img src="/pomodoro.png" style={{ boxShadow:"rgba(0, 0, 0, 1) 0px 4px 10px", width:"500px", borderRadius:"20px"}}/>
      <div style={{display:"flex", gap:"30px", marginTop:"10px"}}>
        <a href="https://hikennii.github.io/Pomodoro-Idle/" target="_blank" className="mediabutton" style={{margin:"10px", padding: "3px 20px"}}>Link</a>
      </div>
      <ul style={{textAlign:"left", width:"70%"}}>
        <li>Developed a web-based Pomodoro timer idle game featuring upgrades and integrated productivity tools such as a calculator and notepad.</li>
        <li>Utilized JavaScript, HTML, and CSS.</li>
      </ul>
    </div>
  )
}