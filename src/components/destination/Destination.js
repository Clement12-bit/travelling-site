import "./destination.css"
import Img1 from "../../assets/beach.jpg"
import Img2 from "../../assets/beach2.jpg"

const Destination = () => {
    return(
        <div className="section">
            <h1>Popular Places to Vist</h1>
            <p>Tours give you the opportunity to travel</p>

            <div className="first_container">
                <div className="content">
                    <h2>Mangochi, MonkBay</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing 
                        and typesetting industry. Lorem Ipsum has been the 
                        industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and 
                        scrambled it to make a type specimen book.
                    </p>
                </div>

                <div className="img">
                    <img alt="img" src={Img1}></img>
                    <img alt="img" src={Img2}></img>
                </div>
            </div>
        </div>
    )
}

export default Destination