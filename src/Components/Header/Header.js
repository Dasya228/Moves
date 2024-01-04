import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen]=useState();

    return (
        <header className={'header'}>
            <div className={'header-container'}>
              <div className={'logo-wrap'}>
                  <Link to={'/'}> <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M18 11c0-.959-.68-1.761-1.581-1.954C16.779 8.445 17 7.75 17 7c0-2.206-1.794-4-4-4-1.517 0-2.821.857-3.5 2.104C8.821 3.857 7.517 3 6 3 3.794 3 2 4.794 2 7c0 .902.312 1.727.817 2.396A1.994 1.994 0 0 0 2 11v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-2.638l4 2v-7l-4 2V11zm-5-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zM6 5c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zM4 19v-8h12l.002 8H4z"></path></svg> </Link>
                  <Link to={'/'} style={{textDecoration:'none'}}> <h2 className={'logo_title'}>DasyaMovies</h2> </Link>
              </div>
                <nav>
                   <Link className={'homeBtn'} to={'/'}>Главное</Link>
                    <Link className={'searchBtn'} to={'/search'}>Найти фильм</Link>
                </nav>
                <div className={'mobile'}>
                    <button className={'mobile-btn'} onClick={()=>setIsOpen(!isOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill:'white'}}><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
                    </button>
                </div>
                <div className={`mobile-menu show ${isOpen?'active':''}`}>
                    <Link className={'mobile-menu__link'} to={'/'}>Главное</Link>
                    <Link className={'mobile-menu__link'} to={'/search'}>Найти фильм</Link>
                </div>
            </div>

        </header>
    )

}
export default Header