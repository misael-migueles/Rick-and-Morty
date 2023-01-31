import style from "./Card.module.css"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites, deleteFavorites } from "../Redux/action";


 function Card({name, gender, onClose, species, image, id}) {
   const[isFav, setIsFav]=useState(false );
   const dispatch = useDispatch();
   const myFavorites = useSelector((states)=>states.myFavorites);

   function  handleFavorites (id){
      if(isFav){
         setIsFav(false)
         dispatch(deleteFavorites(id))
      }else{
         setIsFav(true)
         dispatch(addFavorites(id))
      }
   };
 // si el id de mi array en el estado global es igual a id que me llega por props de card, entonces me lo guarda
   useEffect(()=>{
      myFavorites.forEach((evento)=>{
         if(evento === id){
            setIsFav(true)
         }});
   },[myFavorites]);
 
 return (
         <div className={style.contain}>
               <div className={style.card}>
                  <button onClick={onClose} className={style.boton}>X</button>
                 <img className={style.imagenes} src={image} alt={name}/>
                 <h4 className={style.names}>Nombre: <Link className={style.link} to={`/detail/${id}`}>{name}</Link></h4>
                 { isFav ? (
               <button onClick={()=>handleFavorites(id)}>❤️</button>
                  ) : (
               <button onClick={()=>handleFavorites(id)}>🤍</button>
                  )}
               </div> 
           </div>
   );
}

export default Card;