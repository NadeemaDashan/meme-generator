import React from "react";
import './Form.css'
import memesData from "./memesData.js";

export default function Form(){

    const [formData,setFormData]=React.useState({
        topText:"",
        bottomText:"",
        image:"http://i.imgflip.com/1bij.jpg"
    });

    function getNewMemeImage(event){
        event.preventDefault();
        let memeArray=memesData.data.memes;
        let randomIndex=Math.floor(Math.random()*memeArray.length+1);
        console.log(randomIndex);
        setFormData(prevState => {
            return{
                ...prevState,
                image:[memeArray[randomIndex].url]
            }
        });
    }
    function handleChange(event){
        setFormData(prevState=>{
            return{
                ...prevState,
                [event.target.name]:[event.target.value]
            }
        })
    } 
    console.log(formData)

    return(
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
