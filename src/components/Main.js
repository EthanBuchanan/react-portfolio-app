
// IMAGES
import code_quiz from "../images/CodeQuiz.PNG"  
import password_generator from "../images/passwordGenerator.PNG"  
import project_placeholder_img from "../images/project-placeholder-img.png"  
import weather_dashboard from "../images/weatherDashboard.PNG"
import holidaze from "../images/Holidaze.PNG"         
import scheduler from "../images/scheduler.PNG"
import pewpew from "../images/pewpew.png"
import dnd from "../images/dnd_npc_tracker.png"
import wilted from "../images/wilted.png"

function Main() {
    return (    
        <main>
           
            <section id="section-Projects">
                <div className="section-title">
                    <h2>
                        Projects
                    </h2>
                </div>
                <div className="section-main project-section">
                    <a href={"https://github.com/jsamborski310/Holidaze"} id="first-project" className="img-chunk section-ception">
                        <img  src={holidaze} alt="app screenshot"/>
                        <h3>Holidaze</h3>
                        <a href="https://jsamborski310.github.io/Holidaze/">demo</a>
                    </a>
                    <a href="https://github.com/EthanBuchanan/Bootcamp-Assignment-3" className="img-chunk section-ception">
                        <img src={password_generator} alt="app screenshot" />
                        <h3>Password Generator</h3>
                        <a href="https://ethanbuchanan.github.io/Bootcamp-Assignment-3/">demo</a>
                    </a>
                    <a href="https://github.com/EthanBuchanan/TimeTracker-BootcampAssignment5" className="img-chunk section-ception">
                        <img src={scheduler} alt="app screenshot" />
                        <h3>Time Scheduler</h3>
                        <a href="https://ethanbuchanan.github.io/TimeTracker-BootcampAssignment5/">demo</a>
                    </a>
                    <a href="https://github.com/EthanBuchanan/WeatherDashboard_BootCampAssignment6" className="img-chunk section-ception">
                        <img src={weather_dashboard} alt="app screenshot" />
                        <h3>Weather Dashboard</h3>
                        <a href="https://ethanbuchanan.github.io/WeatherDashboard_BootCampAssignment6/">demo</a>
                    </a>
                    <a href="https://github.com/EthanBuchanan/Bootcamp-Assignment-4" className="img-chunk section-ception">
                        <img src={code_quiz} alt="app screenshot" />
                        <h3>Code Quiz</h3>
                        <a href="https://ethanbuchanan.github.io/Bootcamp-Assignment-4/">demo</a>
                    </a>
                    <a href="https://mesagames.itch.io/wilted" className="img-chunk section-ception">
                        <img src={wilted} alt="app screenshot" />
                        <h3>Wilted</h3>
                        <p>Demo: Downloaded from Site</p>
                    </a>
                    <a href="https://pewpewpewpew-spaceman.herokuapp.com/" className="img-chunk section-ception">
                        <img src={pewpew} alt="app screenshot" />
                        <h3>pewpew_spaceman</h3>
                        <a href="https://pewpewpewpew-spaceman.herokuapp.com/">demo</a>
                    </a>
                    <a href="https://npc-track.herokuapp.com/" className="img-chunk section-ception">
                        <img src={dnd} alt="app screenshot" />
                        <h3>DnD NPC Tracker</h3>
                        <a href="https://npc-track.herokuapp.com/">demo</a>
                    </a>
                    

                </div>
            </section>
            
            
        </main>
    )
}
export default Main