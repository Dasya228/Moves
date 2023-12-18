import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY, PAGE_URL} from "../../Config/Config";
import {clearMovie, getMoviesPage} from "../../redux/MoveAction/MoveAction";
import {useDispatch, useSelector} from "react-redux";


const MovePage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {movie} = useSelector((state) => state)
    const {id} = useParams()
    const [move, setMove] = useState([])
    const [cast, setCast] = useState([])
    const [trailer, setTrailer] = useState([])
    useEffect(() => {
        const fetchMovie = async () => {
            await dispatch(getMoviesPage(id))
            navigate(`/moves/${id}`)
        }
        fetchMovie()
        dispatch(clearMovie())
    }, [dispatch, navigate, id]);



    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`)
            .then(({data}) => setCast(data.cast))
    }, [])

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`)
            .then(({data}) => setTrailer(data.results))
    }, []);

    console.log(trailer)
    return (
        <div className={'container'}>
            {move ? (
                <div className={'row'}>
                    <div className="col-3">
                        <img src={`${PAGE_URL}${movie.poster_path}`} alt=""/>
                        <h3>{movie.title}</h3>
                        <p className={'moves_date'}>{movie.release_date}</p>
                    </div>
                    <div className="col-6">
                        <h1>{movie.title}</h1>
                        <p className={'moves_title'}>{movie.original_title}</p>
                        <div className={'moves_info'}>
                            <h2>О Фильме</h2>
                            <span>{movie.overview}</span>
                        </div>
                    </div>
                    <div className="col-3">
                        <p className={'move_rating'}>{movie.vote_average}</p>
                        <span className={'move_popular'}>{movie.popularity} оценки</span>
                        <h3 className={'move_actors'}>В главных ролях:</h3>
                        <ul>
                            {
                                cast.map(actor => (
                                    <li key={actor.id}>
                                        <h3>{actor.name}</h3>
                                        <p>{actor.character}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                </div>


            ) : (
                <p>Loading...</p>
            )}
            <div className={'trailer_container'}>
                <h2>Трейлер</h2>
                {
                    trailer.map(trailer => (
                        <iframe key={trailer.id} src={`https://www.youtube.com/embed/${trailer.key}`}
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    ))
                }
            </div>

        </div>
    )
}
export default MovePage