import Navbar from "../components/header/Navbar"
import Hero from "../components/hero/Hero"
import backgroundImg from "../assets/img6.jpg"

function Services () {
    return(
        <>
        <Navbar />
        <Hero 
            heroSection = "aboutSectio"
            heroImg = {backgroundImg}
            heroTitle = "Our Services"
            btnClass = "hide"
        />
        </>
    )
}

export default Services