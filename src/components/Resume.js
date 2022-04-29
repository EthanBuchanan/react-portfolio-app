import resumePDF from "../images/Ethan_Resume.pdf"

function Resume() {
    return (    
        <main>
            <section id="section-about-me">
               
                <a href={resumePDF} >Download Resume</a>

                <h3>Skills</h3>
               <ul>
                    <li>C#</li>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>Lua</li>
                    <li>React</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    
               </ul>
            </section>
            
        </main>
    )
}
export default Resume