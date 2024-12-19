import './hero.css'

function Hero (props) {
    return(
        <>
            <div className={props.heroSection}>
                <img alt='travellersmw' src={props.heroImg} />

                <div className="hero_content">
                    <h1>{props.heroTitle}</h1>
                    <p>{props.heroSubtitle}</p>
                    <a href={props.url} className={props.btnClass} >{props.btnText}</a>
                </div>
            </div>
        </>
    )
}

export default Hero