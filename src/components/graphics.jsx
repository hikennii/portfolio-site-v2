export default function Graphics() {
  return (
    <div style={{textShadow:"rgba(0, 0, 0, 1) 0px 4px 10px, rgba(0, 0, 0, 1) 0px 10px 30px"}}>
      <h1>Graphic Projects</h1>
      <div className="graphic-container">
        <div
        className="graphic"
        onMouseMove={(e) => {
          const bubble = e.currentTarget.querySelector(".bubble");
          const rect = e.currentTarget.getBoundingClientRect();

          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          bubble.style.left = x + "px";
          bubble.style.top = y + "px";
        }}
        >
          <img src="../public/graphic/windbreaker.png" style={{width:"465px", boxShadow:"rgba(0, 0, 0, 1) 0px 4px 10px"}}/>
          <div className="bubble"><strong>Side Project</strong></div>
        </div>
        <div
        className="graphic"
        onMouseMove={(e) => {
          const bubble = e.currentTarget.querySelector(".bubble");
          const rect = e.currentTarget.getBoundingClientRect();

          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          bubble.style.left = x + "px";
          bubble.style.top = y + "px";
        }}
        >
          <video
          src="../public/graphic/stt25poster.mp4"
          autoPlay
          loop
          muted 
          style={{width:"350px", boxShadow:"rgba(0, 0, 0, 1) 0px 4px 10px"}}
          />
          <div className="bubble"><strong>Work Experience</strong> - Film poster for one of the charity film I worked on!</div>
        </div>
        <div
        className="graphic"
        onMouseMove={(e) => {
          const bubble = e.currentTarget.querySelector(".bubble");
          const rect = e.currentTarget.getBoundingClientRect();

          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          bubble.style.left = x + "px";
          bubble.style.top = y + "px";
        }}
        >
          <img src="../graphic/webtoon ad.png" style={{width:"465px", boxShadow:"rgba(0, 0, 0, 1) 0px 4px 10px"}}/>
          <div className="bubble"><strong>Side Project</strong></div>
        </div>
        <div
        className="graphic"
        onMouseMove={(e) => {
          const bubble = e.currentTarget.querySelector(".bubble");
          const rect = e.currentTarget.getBoundingClientRect();

          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          bubble.style.left = x + "px";
          bubble.style.top = y + "px";
        }}
        >
          <img src="../graphic/edmnight.PNG" style={{width:"370px", boxShadow:"rgba(0, 0, 0, 1) 0px 4px 10px"}}/>
          <div className="bubble"><strong>Work Experience</strong> - Collaboration work that I did for Wong Way Media and my student organization!</div>
        </div>
        <div
        className="graphic"
        onMouseMove={(e) => {
          const bubble = e.currentTarget.querySelector(".bubble");
          const rect = e.currentTarget.getBoundingClientRect();

          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          bubble.style.left = x + "px";
          bubble.style.top = y + "px";
        }}
        >
          <img src="../graphic/1 ad.png" style={{width:"465px", boxShadow:"rgba(0, 0, 0, 1) 0px 4px 10px"}}/>
          <div className="bubble"><strong>Work Experience</strong> - Graphic for Antonius LLC</div>
        </div>
        <div
        className="graphic"
        onMouseMove={(e) => {
          const bubble = e.currentTarget.querySelector(".bubble");
          const rect = e.currentTarget.getBoundingClientRect();

          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          bubble.style.left = x + "px";
          bubble.style.top = y + "px";
        }}
        >
          <img src="../graphic/markuz.png" style={{width:"500px", boxShadow:"rgba(0, 0, 0, 1) 0px 4px 10px"}}/>
          <div className="bubble"><strong>Work Experience</strong> - DJ logo for a client</div>
        </div>
        <div
        className="graphic"
        onMouseMove={(e) => {
          const bubble = e.currentTarget.querySelector(".bubble");
          const rect = e.currentTarget.getBoundingClientRect();

          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          bubble.style.left = x + "px";
          bubble.style.top = y + "px";
        }}
        >
          <img src="../graphic/grail2.png" style={{width:"280px", boxShadow:"rgba(0, 0, 0, 1) 0px 4px 10px"}}/>
          <div className="bubble"><strong>Work Experience</strong> - Graphic for Wong Way Media</div>
        </div>
        <div
        className="graphic"
        onMouseMove={(e) => {
          const bubble = e.currentTarget.querySelector(".bubble");
          const rect = e.currentTarget.getBoundingClientRect();

          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          bubble.style.left = x + "px";
          bubble.style.top = y + "px";
        }}
        >
          <img src="../graphic/weak_hero.png" style={{width:"500px", boxShadow:"rgba(0, 0, 0, 1) 0px 4px 10px"}}/>
          <div className="bubble"><strong>Side Project</strong></div>
        </div>
        <div
        className="graphic"
        onMouseMove={(e) => {
          const bubble = e.currentTarget.querySelector(".bubble");
          const rect = e.currentTarget.getBoundingClientRect();

          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          bubble.style.left = x + "px";
          bubble.style.top = y + "px";
        }}
        >
          <img src="../graphic/blue lock.png" style={{width:"350px", boxShadow:"rgba(0, 0, 0, 1) 0px 4px 10px"}}/>
          <div className="bubble"><strong>Side Project</strong></div>
        </div>
        <div
        className="graphic"
        onMouseMove={(e) => {
          const bubble = e.currentTarget.querySelector(".bubble");
          const rect = e.currentTarget.getBoundingClientRect();

          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          bubble.style.left = x + "px";
          bubble.style.top = y + "px";
        }}
        >
          <img src="../graphic/announcement stt 2.png" style={{width:"350px", boxShadow:"rgba(0, 0, 0, 1) 0px 4px 10px"}}/>
          <div className="bubble"><strong>Work Experience</strong> - Film poster for one of the charity film I worked on!</div>
        </div>
      </div>
    </div>
  )
}