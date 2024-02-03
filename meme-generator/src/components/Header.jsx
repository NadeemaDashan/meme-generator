import React from "react";
import "./Header.css"


export default function Header(){
    return(
        <header className="header">
        <img 
           src='../../public/troll-face.png'
            className="header--image"
        />
        <h2 className="header--title">Meme Generator</h2>
        <h4 className="header--project">Project By Dashan</h4>
    </header>
    )
}