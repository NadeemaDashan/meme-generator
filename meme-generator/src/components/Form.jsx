import React from "react";
import './Form.css'

export default function Form() {

    const [formData, setFormData] = React.useState({
        topText: "",
        bottomText: "",
        image: ""
    });

    const [allMemes, setAllMemes] = React.useState([]);

    function getNewMemeImage(event) {
        event.preventDefault();
        let randomIndex = Math.floor(Math.random() * allMemes.length + 1);
        let url = allMemes[randomIndex].url
        setFormData(prevState => {
            return {
                ...prevState,
                image: url
            }
        });
    }
    function handleChange(event) {
        setFormData(prevState => {
            return {
                ...prevState,
                [event.target.name]: [event.target.value]
            }
        })
    }
    console.log(formData)

    React.useEffect(() => {
        async function getMemeData() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json();
            setAllMemes(data.data.memes)


        }
        getMemeData();
    }, [])
    return (
        <main>
            <form className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form-input"
                    name="topText"
                    value={formData.topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form-input"
                    name="bottomText"
                    value={formData.bottomText}
                    onChange={handleChange}
                />
                <button onClick={getNewMemeImage}
                    className="form-button"

                >
                    Get a new meme image 🖼
                </button>
                <div className="output-content">
                    <div className="meme">
                        <img id="meme-img" src={formData.image} className="meme-image" />
                        <h2 className="meme-text top">{formData.topText}</h2>
                        <h2 className="meme-text bottom">{formData.bottomText}</h2>
                    </div>
                </div>
            </form>
        </main>
    )
}
