export default function Media() {
  return (
    <div className="info-container-backdrop">
      <h1>Media Projects</h1>
      <br/>
      <h3>In a Blink</h3>
      <video src="/graphic/stt25poster.mp4" autoPlay muted loop style={{width:"250px", boxShadow:"rgba(0, 0, 0, 1) 0px 4px 10px"}}/>
      <br/>
      <p>Rutgers Vietnamese Association 2025 annual charity film.<br/>
      (Responsible for Timestamps 0:00 - 22:04 and 41:55 - 54:03)</p>
      <div style={{display:"flex", gap:"30px"}}>
        <a href="https://www.youtube.com/watch?v=gXi5sEUXFUE&t" target="_blank" className="mediabutton" style={{margin:"10px"}}>Film</a>
      </div>
      <br/>
      <h3>Letters From Tomorrow</h3>
      <img src="../graphic/announcement stt 2.png" style={{width:"250px", boxShadow:"rgba(0, 0, 0, 1) 0px 4px 10px"}}/>
      <br/>
      <p>Rutgers Vietnamese Association 2024 annual charity film.<br/>
      (Responsible for Episode 1 and 3)</p>
      <div style={{display:"flex", gap:"30px"}}>
        <a href="https://www.youtube.com/watch?v=d6vPGsKav3Y" target="_blank" className="mediabutton" style={{margin:"10px"}}>Episode 1</a>
        <a href="https://www.youtube.com/watch?v=DBdUQ6uHhSQ" target="_blank" className="mediabutton" style={{margin:"10px"}}>Episode 3</a>
      </div>
      <br/>
    </div>
  )
}