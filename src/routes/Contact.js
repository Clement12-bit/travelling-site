import Navbar from "../components/header/Navbar"
import Hero from "../components/hero/Hero"
import backgroundImg from "../assets/night.jpg"
import Footer from "../components/footer/Footer"
import Form from "../components/contactForm/Form"

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
        <Form />
        <Footer />
        </>
    )
}

export default Contact