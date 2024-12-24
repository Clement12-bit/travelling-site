import TripData from "./TripData"
import "./trip.css"
import Trip1 from "../../assets/trip1.jpg"
import Trip2 from "../../assets/trip2.jpg"
import Trip3 from "../../assets/trip3.jpg"

function Trip () {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>Lets guide you to your favorite destination</p>

            <div className="trip__card">
                <TripData
                    image = {Trip1}
                    heading = "Trip to Vwanza plateau"
                    text = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English"
                />

                <TripData
                    image = {Trip2}
                    heading = "Trip to Sapitwa"
                    text = "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested"
                />

                <TripData
                    image = {Trip3}
                    heading = "Trip to Lake Tanganyika"
                    text = "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable"
                />
            </div>
        </div>
    )
}

export default Trip