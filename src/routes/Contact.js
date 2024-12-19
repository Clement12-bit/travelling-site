import Navbar from "../components/header/Navbar"
import Hero from "../components/hero/Hero"
import backgroundImg from "../assets/night.jpg"

function Contact () {
    return(
        <>
        <Navbar />
        <Hero 
            heroSection = "aboutSectio"
            heroImg = {backgroundImg}
            heroTitle = "Contact Us"
            btnClass = "hide"
        />
        </>
    )
}

export default Contact