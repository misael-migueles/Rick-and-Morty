import { useState } from "react";
import "./nav.css"


export default function SearchBar({onSearch}) {
   const[character, setCharacter]= useState('')
   const handleChange = (event)=>{
      setCharacter(event.target.value)
   }
   return (
      <div className="busqueda">
         <input className="input_" type='search' value={character} onChange={handleChange}></input>
         <button className="boton" onClick={()=>onSearch(character)}>Agregar</button>
      </div>
   );
}
