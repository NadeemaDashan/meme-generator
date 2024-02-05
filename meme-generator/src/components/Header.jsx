import React from "react";
import "./Header.css"


export default function Header(){
    function get(){
        console.log("hello")
    }
    return(
        <header className="header">
        <img 
           src='/troll-face.png'
            className="header-image"
        />
        <h2 onClick={get} className="header-title">Meme Generator</h2>
        <h4 className="header-project">Project By Dashan</h4>
    </header>
    )
}