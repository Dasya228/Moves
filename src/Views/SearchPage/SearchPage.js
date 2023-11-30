import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../Config/Config";

const SearchPage=()=>{
    const [search,setSearch]=useState("")

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&search=${search}`)
            .then((data) =>setSearch(data.results))
    }, []);

    const handleSearch=()=>{
        if(search.trim()!==''){

        }
    }



    return(
        <div className={'container'}>
            <h1>Найти фильм</h1>
            <input type="text" onChange={(e)=>setSearch(e.target.value)}/>
            <button>Найти</button>
        </div>
    )
}
export default SearchPage