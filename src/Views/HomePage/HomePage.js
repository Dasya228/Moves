import React, {useEffect, useState} from "react";
import axios from "axios";
import MoveList from "../../Components/MoveList/MoveList";
import {BASE_URL, API_KEY} from "../../Config/Config";
import Carousel from "../../Components/Carousel/Carousel";
import {useSearchParams} from "react-router-dom";
import Pagination from "../../Components/Pagination/Pagination";


const HomePage = () => {

    const [moves, setMoves] = useState([])
    const [pageParam, setPageParam] = useSearchParams('page')
    const [page, setPage] = useState(pageParam.get('page') || 1)

    useEffect(() => {
        axios(`${BASE_URL}discover/movie?language=ru-RU&api_key=${API_KEY}&page=${page}`)
            .then(({data}) => setMoves(data.results))
    }, [page]);

    const handlePageChange = (argPage) => {
        setPage(argPage)
        setPageParam({page: argPage})
    }

    return (
        <>
            <Carousel moves={moves}/>
            <div className={'container'}>

                <MoveList moves={moves}/>
                <Pagination onClick={handlePageChange}/>
            </div>
        </>
    )
}
export default HomePage