import React, {useEffect, useState} from "react";
import axios from "axios";
import MoveList from "../../Components/MoveList/MoveList";
import {BASE_URL, API_KEY} from "../../Config/Config";
import Carousel from "../../Components/Carousel/Carousel";



const HomePage=()=>{

    const [moves, setMoves]=useState([])

    useEffect(() => {
        axios(`${BASE_URL}discover/movie?language=ru-RU&api_key=${API_KEY}`)
            .then(({data})=>setMoves(data.results))
    }, []);


    return(
       <>
           <Carousel moves={moves}/>
           <div className={'container'}>

               <MoveList moves={moves}/>
           </div></>
    )
}
export default HomePage