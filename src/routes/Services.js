import Navbar from "../components/header/Navbar"
import Hero from "../components/hero/Hero"
import backgroundImg from "../assets/img6.jpg"
import Footer from "../components/footer/Footer"
import Trip from "../components/trip/Trip"

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
        <Trip />
        <Footer />
        </>
    )
}

export default Services