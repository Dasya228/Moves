import React, {useEffect, useState} from "react";
import MoveList from "../../Components/MoveList/MoveList";
import Carousel from "../../Components/Carousel/Carousel";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../../redux/MoveAction/MoveAction";
import  queryString from "query-string";
import {Container, Pagination} from "@mui/material";


const HomePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const {moves} = useSelector((state) => state);

    const queryParams = queryString.parse(location.search);
    const currentPageFromQuery = parseInt(queryParams.page, 20) || 1;

    const [currentPage, setCurrentPage] = useState(currentPageFromQuery);

    useEffect(() => {
        console.log("Setting currentPage:", currentPageFromQuery);
        setCurrentPage(currentPageFromQuery);
    }, [currentPageFromQuery]);

    useEffect(() => {
        dispatch(getMovies(currentPage));
    }, [dispatch, currentPage]);

    const totalPageCount = 20;

    const handlePageChange = (event, newPage) => {
        event.preventDefault();
        setCurrentPage(newPage);
        navigate(`?page=${newPage}`);
    };

    return (
        <>
            <Carousel/>
            <Container className={'container'}>

                <MoveList moves={moves}/>
                <Pagination onChange={handlePageChange} count={totalPageCount} page={currentPage} variant="outlined" shape="rounded"/>
            </Container>
        </>
    )
}
export default HomePage