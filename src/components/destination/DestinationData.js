import { Component } from "react";
import "./destination.css"

class DestinationData extends Component{
    render (){
        return (
            <div className={this.props.className}>
                <div className="content">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.desc}</p>
                </div>

                <div className="img">
                    <img alt="img" src={this.props.img1}></img>
                    <img alt="img" src={this.props.img2}></img>
                </div>
            </div>
        )
    }
}

export default DestinationData