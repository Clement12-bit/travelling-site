import Navbar from "../components/header/Navbar"
import Hero from "../components/hero/Hero"
import backgroundImg from "../assets/img1.jpg"
import Destination from "../components/destination/Destination"
import Trip from "../components/trip/Trip"
import Footer from "../components/footer/Footer"

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
        <Destination />
        <Trip />
        <Footer />
        </>
    )
}

export default Home