import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "../Views/HomePage/HomePage";
import MovePage from "../Views/MovePage/MovePage";
import Header from "../Components/Header/Header";
import SearchPage from "../Views/SearchPage/SearchPage";

const AppRouts =()=>{
    return(
       <>
           <Header/>
           <Routes>
               <Route path={'/'} element={<HomePage/>}/>
               <Route path={'/moves/:id'} element={<MovePage/>}/>
               <Route path={'/search'} element={<SearchPage/>}/>
           </Routes>
       </>
    )
}
export default AppRouts