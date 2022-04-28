
// IMAGES
import code_quiz from "../images/CodeQuiz.PNG"  
import password_generator from "../images/passwordGenerator.PNG"  
import project_placeholder_img from "../images/project-placeholder-img.png"  
import weather_dashboard from "../images/weatherDashboard.PNG"
import holidaze from "../images/Holidaze.PNG"         
import scheduler from "../images/scheduler.PNG"

function Main() {
    return (    
        <main>
           
            <section id="section-Projects">
                <div class="section-title">
                    <h2>
                        Projects
                    </h2>
                </div>
                <div class="section-main project-section">
                    <a href={"https://github.com/jsamborski310/Holidaze"} id="first-project" class="img-chunk section-ception">
                        <img  src={holidaze} alt="app screenshot"/>
                        <h3>Holidaze</h3>
                    </a>
                    <a href="https://ethanbuchanan.github.io/Bootcamp-Assignment-3/" class="img-chunk section-ception">
                        <img src={password_generator} alt="app screenshot" />
                        <h3>Password Generator</h3>
                    </a>
                    <a href="https://github.com/EthanBuchanan/TimeTracker-BootcampAssignment5" class="img-chunk section-ception">
                        <img src={scheduler} alt="app screenshot" />
                        <h3>Time Scheduler</h3>
                    </a>
                    <a href="https://github.com/EthanBuchanan/WeatherDashboard_BootCampAssignment6" class="img-chunk section-ception">
                        <img src={weather_dashboard} alt="app screenshot" />
                        <h3>Weather Dashboard</h3>
                    </a>
                    <a href="https://github.com/EthanBuchanan/Bootcamp-Assignment-4" class="img-chunk section-ception">
                        <img src={code_quiz} alt="app screenshot" />
                        <h3>Code Quiz</h3>
                    </a>
                </div>
            </section>
            
            <section id="section-contact-me">
                <div class="section-title">
                    <h2>
                        Contact
                    </h2>
                </div>
                <div class="section-main contact-me">
                    <div class="section-ception contacts">Phone Number: <br /> 555-5555</div>
                
                    <div class="section-ception contacts">Email:<br /> ethan@buchananville.com</div>
                
                    <div class="section-ception contacts">Github:<br /> https://github.com/EthanBuchanan</div>
                
                    <div class="section-ception contacts">LinkedIn:<br /> https://www.linkedin.com/in/ethan-buchanan-953446186/</div>
                </div>
            </section>
        </main>
    )
}
export default Main