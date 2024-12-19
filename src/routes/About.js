import Navbar from "../components/header/Navbar"
import Hero from "../components/hero/Hero"
import backgroundImg from "../assets/img5.jpg"

function About () {
    return(
        <>
        <Navbar />
        <Hero 
            heroSection = "aboutSectio"
            heroImg = {backgroundImg}
            heroTitle = "About"
            btnClass = "hide"
        />
        </>
    )
}

export default About