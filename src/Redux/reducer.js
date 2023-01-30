import{ADD_FAVORITES, DELETE_FAVORITES} from "./type_action"


const initialState={
  myFavorites:[],
};


  const rootReducer=(state=initialState, {type, payload})=>{
    switch(type){
        case ADD_FAVORITES:
            return{
             ...state,
             myFavorites:[...state.myFavorites, payload]
            };
        case DELETE_FAVORITES:
            const deleted = state.myFavorites.filter(id=>{
                return id !== payload;
             })
            return{
                ...state,
             myFavorites: deleted
            }
        default:
            return{
                ...state
            }
    }
}
export default rootReducer;