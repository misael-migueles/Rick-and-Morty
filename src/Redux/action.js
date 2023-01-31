import { ADD_FAVORITES, DELETE_FAVORITES } from "./type_action";



 export const addFavorites =(id)=>{
    return{
        type: ADD_FAVORITES,
        payload: id,
    }
}
export  const deleteFavorites =(id)=>{
    return{
        type: DELETE_FAVORITES,
        payload: id,
    }
}
 