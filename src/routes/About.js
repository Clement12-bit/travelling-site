import Navbar from "../components/header/Navbar"
import Hero from "../components/hero/Hero"
import backgroundImg from "../assets/img5.jpg"
import Footer from "../components/footer/Footer"
import AboutUs from "../components/about/AboutUs"

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
        <AboutUs />
        <Footer />
        </>
    )
}

export default About