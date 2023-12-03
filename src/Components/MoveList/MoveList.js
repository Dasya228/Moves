import React from "react";
import {PAGE_URL} from "../../Config/Config";
import {Link} from "react-router-dom";

const MoveList=({moves})=>{
    return(
        <div className={'row'}>
            {
               moves.map(movies=>
                   <div className={'col-3'} key={movies.id}>
                        <div className={'box'}>
                            <Link to={`/moves/${movies.id}`}> <img className={'move-img'} src={`${PAGE_URL}${movies.poster_path}`} alt=""/></Link>
                            <div className={'movie-box'}>
                                <Link className={'box-title'} to={`/moves/${movies.id}`} > <h3>{movies.title}</h3></Link>
                                <p style={{color:"gray"}}>{movies.release_date}</p>
                        </div>
                       </div>
                   </div>
               )
            }

        </div>
    )
}
export default MoveList