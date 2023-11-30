import React from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouts from "./AppRouts/AppRouts";

const App =()=>{
  return(
      <BrowserRouter>
        <AppRouts/>
      </BrowserRouter>
  )
}
export default App