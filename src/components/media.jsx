export default function Media() {
  return (
    <div className="info-container-backdrop">
      <h1>Media Projects</h1>
      <br/>
      <h3>In a Blink</h3>
      <video src="/graphic/stt25poster.mp4" autoPlay muted loop style={{width:"250px", boxShadow:"rgba(0, 0, 0, 1) 0px 4px 10px"}}/>
      <br/>
      <p>Rutgers Vietnamese Association 2025 annual charity film.<br/>
      (Responsible for Timestamps 0:00 - 22:04 and 41:55 - 54:03.)</p>
      <div style={{display:"flex", gap:"30px"}}>
        <a href="https://www.youtube.com/watch?v=gXi5sEUXFUE&t" target="_blank" className="mediabutton" style={{margin:"10px", padding: "3px 20px"}}>Film</a>
      </div>
      <br/>
      <h3>Letters From Tomorrow</h3>
      <img src="../graphic/announcement stt 2.png" style={{width:"250px", boxShadow:"rgba(0, 0, 0, 1) 0px 4px 10px"}}/>
      <br/>
      <p>Rutgers Vietnamese Association 2024 annual charity film.<br/>
      (Responsible for Episode 1 and 3.)</p>
      <div style={{display:"flex", gap:"30px"}}>
        <a href="https://www.youtube.com/watch?v=d6vPGsKav3Y" target="_blank" className="mediabutton" style={{margin:"10px"}}>Episode 1</a>
        <a href="https://www.youtube.com/watch?v=DBdUQ6uHhSQ" target="_blank" className="mediabutton" style={{margin:"10px"}}>Episode 3</a>
      </div>
      <br/>
      <h3>Rutgers Newark M.A.P.S Health Conference Recap</h3>
      <p>Commissioned Work for Rutgers Newark M.A.P.S.<br/>
      (Responsible for on-site filming and editing.)</p>
      <div style={{display:"flex", gap:"30px"}}>
        <a href="https://www.instagram.com/p/DL0GFa8gVc6/?hl=en" target="_blank" className="mediabutton" style={{margin:"10px", padding: "3px 20px"}}>Recap</a>
      </div>
      <h3>Rutgers Vietnamese Student Association Media</h3>
      <p>General interest meeting video recaps and trailers for big events.<br/>
      (Coordinated bi-weekly event videos with co-chair.)</p>
      <div style={{display:"grid", gridTemplateColumns: "repeat(3,1fr)"}}>
        <a href="https://www.instagram.com/p/DQnR9WsgNTr/" target="_blank" className="mediabutton" style={{margin:"10px"}}>Fall Event Teaser (2025)</a>
        <a href="https://www.instagram.com/p/DWPDF2yAPM8/" target="_blank" className="mediabutton" style={{margin:"10px"}}>Spring Event Trailer (2025)</a>
        <a href="https://www.instagram.com/reel/DVzh1LvAJl_/" target="_blank" className="mediabutton" style={{margin:"10px"}}>Spring Event Teaser (2025)</a>
        <a href="https://www.instagram.com/reel/DHv8b6qpXCF/" target="_blank" className="mediabutton" style={{margin:"10px"}}>Spring Event Trailer (2024)</a>
        <a href="https://www.instagram.com/reel/DHbcPqrJ1o2/" target="_blank" className="mediabutton" style={{margin:"10px"}}>Spring Event Teaser (2024)</a>
        <a href="https://www.instagram.com/p/DA1J4GEpAtz/?img_index=2" target="_blank" className="mediabutton" style={{margin:"10px"}}>Bi-weekly Recaps</a>
      </div>
    </div>
  )
}