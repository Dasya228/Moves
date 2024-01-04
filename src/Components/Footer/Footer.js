import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className={'footer'}>
<div className={'container'}>
    <div className="row inner-row">
        <div className="col-3">
            <div className="footer-box">
                <Link className={'footer-box__link'} to={'https://fast.com/'} target={"_blank"}>Проверка скорости</Link>
                <Link  className={'footer-box__link'} to={'#'}>О нас</Link>
                <Link className={'footer-box__link'} to={'#'}>Реклама</Link>
                <Link className={'footer-box__link'} to={'#'}>Вакансии</Link>
            </div>
        </div>
        <div className="col-3">
            <div className="footer-box">
                <Link className={'footer-box__link'} to={'https://fast.com/'}>Аккаунт</Link>
                <Link className={'footer-box__link'} to={'#'}>Способы просмотра</Link>
                <Link className={'footer-box__link'} to={'#'}>Центр поддержки</Link>
                <Link className={'footer-box__link'} to={'#'}>Для инвесторов</Link>
            </div>
        </div>
        <div className="col-3">
            <div className="footer-box">
                <Link className={'footer-box__link'} to={'#'}>Корпоративная информация</Link>
                <Link className={'footer-box__link'} to={'#'}>Медиацентр</Link>
                <Link className={'footer-box__link'} to={'#'}>Все фильмы</Link>
                <Link className={'footer-box__link'} to={'#'}>Идеи и пожелания</Link>
            </div>
        </div>
        <div className="col-3">
            <div className="icons-box">
                <Link to={'https://t.me/dsulaimanov'} target={"_blank"}><svg className={'telegram'} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill:'white'}}><path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path></svg></Link>
                <Link to={'https://github.com/Dasya228'} target={"_blank"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill:'white'}}><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg></Link>
                <Link to={'#'}><svg className={'youtube'} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill:'white'}}><path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path></svg></Link>
            </div>
        </div>
    </div>

</div>
        </footer>
    );
};

export default Footer;