import {API_KEY, BASE_URL} from "../../Config/Config";
import axios from "axios";
import {GET_MOVIES, GET_MOVIES_PAGE} from "../../type";


export const getMovies = (page) => {
    return (dispatch) => {
        axios(`${BASE_URL}discover/movie?language=ru-RU&api_key=${API_KEY}&page=${page}`)
            .then(({data}) => {
                dispatch({
                    type: GET_MOVIES,
                    payload: data
                })
            })
    }
}

export const getMoviesPage = (id)=>{
return dispatch=>{
axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=ru-RU`)
    .then(({data}) => {
dispatch({type: GET_MOVIES_PAGE, payload: data})
    })
}

}
export const clearMovie = () => {
    return dispatch => {
        dispatch({type: GET_MOVIES_PAGE, payload: {}})
    }
}