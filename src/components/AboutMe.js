import profile_pic from "../images/Profile-pic.jpg" 

function Main() {
    return (    
        <main>
            <section id="section-about-me">
                <div class="section-title">
                    <h2>
                        About Me
                    </h2>

                    <img src={profile_pic} alt="Profile pic" id="Profile-pic" />
                </div>
                <div class="section-main">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt dolor ultrices massa sollicitudin consectetur. Donec massa eros, molestie a nibh nec, consequat varius lacus. Donec vitae neque sed nisl efficitur malesuada. 
                    </p>
                    <br />
                    <p>
                        Cras sagittis ipsum magna, in ornare dolor vulputate porta. Phasellus ex eros, venenatis sit amet ultricies eget, vehicula tempor mauris. Nam et fermentum libero, quis dignissim felis. Integer vitae accumsan lacus. Nulla et cursus ex. Curabitur arcu urna, ornare non arcu et, consequat auctor dolor. Nulla pretium bibendum dui. Nulla quis arcu velit. 
                    </p>
                    <br />
                    <p>
                        Pellentesque sit amet porta metus. Phasellus eget lectus sed ligula tincidunt sodales non et mi. Sed est magna, sagittis ut augue ut, interdum tincidunt nibh. Nullam quis rhoncus diam. Suspendisse malesuada ultricies velit non efficitur. 
                    </p>
                </div>
            </section>
            
        </main>
    )
}
export default Main