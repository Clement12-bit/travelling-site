import Navbar from "../components/header/Navbar"
import Hero from "../components/hero/Hero"
import backgroundImg from "../assets/img3.jpg"

function Home () {
    return(
        <>
        <Navbar />
        <Hero 
            heroSection = "heroSectio"
            heroImg = {backgroundImg}
            heroTitle = "Your Journey, Your Story"
            heroSubtitle = "Choose Your Favourite Destination in Malawi"
            btnText = "Travel Plan"
            url = "/"
            btnClass = "show"
        />
        </>
    )
}

export default Home