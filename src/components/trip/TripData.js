import "./trip.css"

function TripData (props) {
    return (
        <div className="t__card">
            <div className="t__img">
                <img src={props.image} alt=" "/>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    )
}

export default TripData