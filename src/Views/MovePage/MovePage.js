import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY, PAGE_URL} from "../../Config/Config";


const MovePage = () => {
    const {id} = useParams()
    const [move, setMove] = useState([])
    const [cast, setCast] = useState([])
    const [trailer, setTrailer] = useState(null)
    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${id}?language=ru-RU&api_key=${API_KEY}`)
            .then(({data}) => {
                setMove(data)
            })
    }, [id]);

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`)
            .then(({data}) => setCast(data.cast))
    }, [])

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`)
            .then(({data}) => setTrailer(data.result))
    }, []);


    return (
        <div className={'container'}>
            {move ? (
                <div className={'row'}>
                    <div className="col-3">
                        <img src={`${PAGE_URL}${move.poster_path}`} alt=""/>
                        <h3>{move.title}</h3>
                        <p className={'moves_date'}>{move.release_date}</p>
                    </div>
                    <div className="col-6">
                        <h1>{move.title}</h1>
                        <p className={'moves_title'}>{move.original_title}</p>
                        <div className={'moves_info'}>
                            <h2>О Фильме</h2>
                            <p>{move.overview}</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <p className={'move_rating'}>{move.vote_average}</p>
                        <p className={'move_popular'}>{move.popularity} оценки</p>
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
                <iframe width={'100%'} height={'350px'} src={`https://www.youtube.com/embed/${trailer}`} frameBorder={'0'}></iframe>
            </div>

        </div>
    )
}
export default MovePage