import "./destination.css"
import DestinationData from "./DestinationData"
import Img1 from "../../assets/beach.jpg"
import Img2 from "../../assets/beach2.jpg"
import Img3 from "../../assets/salima1.jpeg"
import Img4 from "../../assets/salima2.jpeg"

const Destination = () => {
    return(
        <div className="section">
            <h1>Popular Places to Vist</h1>
            <p>Tours give you the opportunity to travel</p>

            <DestinationData 
                className = "container"
                heading = "Mangochi, MonkBay"
                desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, scrambled it to make a type specimen book."
                img1 = {Img1}
                img2 = {Img2}
            />

            <DestinationData 
                className = "container__reverse"
                heading = "Salima, Senga Bay"
                desc = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable"
                img1 = {Img3}
                img2 = {Img4}
            />
        </div>
    )
}

export default Destination