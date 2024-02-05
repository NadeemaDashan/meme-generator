import React from "react";
import './Form.css'
import memesData from "./memesData.js";

export default function Form(){

    const [memeImage,setMemeImage]=React.useState("http://i.imgflip.com/1bij.jpg");

    function getNewMemeImage(){
        let memeArray=memesData.data.memes;
        let randomIndex=Math.floor(Math.random()*memeArray.length+1);
        console.log(randomIndex);
        setMemeImage(memeArray[randomIndex].url);
    }

    return(
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form-input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form-input"
                />
                <button onClick={getNewMemeImage}
                    className="form-button"
                    
                >
                    Get a new meme image 🖼
                </button>
                <img src={memeImage} className="meme-image" />
            </div>
        </main>
    )
}
