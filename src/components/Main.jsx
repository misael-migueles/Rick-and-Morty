import React from "react"
import Pexels from "../assets/nebulosa.mp4"


const Main = ()=>{
    return(
        <div className="main">
         <video src={Pexels.mp4} loop ></video>
        </div>
    )
}

export default Main;