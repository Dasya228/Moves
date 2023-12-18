import {GET_MOVIES, GET_MOVIES_PAGE} from "../../type";

const initialState ={
moves: [],
movie:{},

}

export const moveReducer =(state = initialState, action)=>{
switch(action.type){
case GET_MOVIES:
    return{...state, moves: action.payload.results}
    case GET_MOVIES_PAGE:
        return{...state, movie: action.payload}
    default:
        return state
}
}