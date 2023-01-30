import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Detail.css";

const Detail =()=>{
   const{Id} = useParams();
   const[character, setCharacter] = useState({});

   useEffect(() => {
       fetch(`https://rickandmortyapi.com/api/character/${Id}`)
          .then((response) => response.json())
          .then((char) => {
             if (char.name) {
                setCharacter(char);
             } else {
                window.alert('No hay personajes con ese ID');
             }
          })
          .catch((err) => {
             window.alert('No hay personajes con ese ID');
          });
       return setCharacter({});
    },[Id])

   return ( 
      <div className="card">
      <div className="face front">
          <img className="img" src={character.image} alt="images"/>
          <h3>{character.name}</h3>
      </div>
      <div className="face back">
          <h3>{character.name}</h3>
          <p>{character.gender}</p>
          <p>{character.species}</p>
          <div className="link">
          <button className="btn">
                <Link to="/home">volver</Link>
            </button>
          </div>
      </div>
  </div>
     
  )
}

export default Detail