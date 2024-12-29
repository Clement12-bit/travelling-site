import { Link } from "react-router-dom"
import "./footer.css"

const Footer = () =>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Travellers</h1>
                    <p>Choose Your Favourite Places in Malawi</p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Menu</h4>
                    <Link to="/services">Services</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="https://code-with-clement.netlify.app">Portfolio</Link>
                </div>

                <div>
                    <h4>Projects</h4>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="https://code-with-clement.netlify.app">Portfolio</Link>
                    <Link to="https://ccap-hyms.netlify.app">CCAP Hyms</Link>
                </div>

                <div>
                    <h4>Community</h4>
                    <ul>
                        <li>GitHub</li>
                        <li>Stack Overflow</li>
                        <li>W3Schools</li>
                    </ul>
                </div>

                <div>
                    <h4>Contact Developer</h4>
                    <div>
                        <h6>Email:</h6>
                        <Link mailto="clementmapondera09@gmail.com">
                            <span>clementmapondera09@gmail.com</span>
                        </Link>
                    </div>

                    <div>
                        <h6>Call:</h6>
                        <Link callto="+265993256552">
                            <span>+265 993 256 552</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer