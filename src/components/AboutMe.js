import profile_pic from "../images/profile.png" 

function Main() {
    return (    
        <main>
            <section id="section-about-me">
                <div className="section-title">
                    <h2>
                        About Me
                    </h2>

                    <img src={profile_pic} alt="Profile pic" id="Profile-pic" />
                </div>
                <div className="section-main">
                    <p>
                        Hi I'm Ethan Buchanan. A 22 year old programmer born in Utah currently living in Washington.  
                    </p>
                    <br />
                    <p>
                        I've been interested in programming since I (my dad) built my first video game when I was a 11. Since then I took every Programming class that I could in school. When those naturally started teaching from scratch when transfering from middle school to high school, and from high school to college I started to put a lot of effort into side projects, developing my skills independant of school.
                    </p>
                    <br />
                    <p>
                        Doing this I mostly did work on what intersted me: Making games in Unity with C# and playing with ML in python. 
                    </p>
                </div>
            </section>
            
        </main>
    )
}
export default Main