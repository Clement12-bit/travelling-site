import "./form.css"

function Form () {
    return(
        <div className="form__container">
            <h1>Say Hi!</h1>
            <form>
                <input placeholder="Name"/>
                <input placeholder="Email"/>
                <input placeholder="Subject"/>
                <textarea placeholder="Message" rows="4"></textarea>
                <button>Send a Messsage</button>
            </form>
        </div>
    )
}

export default Form