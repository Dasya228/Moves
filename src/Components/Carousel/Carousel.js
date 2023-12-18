import React, {useEffect} from "react";
import {Autoplay, EffectFade, Navigation, Pagination} from "swiper/modules";
// import {Swiper} from "swiper";
import {SwiperSlide, Swiper} from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css';
import {BACKDROP_URL, PAGE_URL} from "../../Config/Config";
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../../redux/MoveAction/MoveAction";

const Carousel = () => {
    const dispatch = useDispatch()
    const {moves} = useSelector(state => state)

    useEffect(() => {
        dispatch(getMovies())
    }, [dispatch]);
    console.log(moves)

    return (
        <div className={'hero'}>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                className="mySwiper"
            >
                {
                    moves.map(move => (
                        <SwiperSlide key={move.id}>
                            <div className={'carousel-img'}
                                 style={{background: `url(${BACKDROP_URL + move.backdrop_path})`}}
                            >
                                <div className={'poster-content'}>
                                    <img src={PAGE_URL + move.poster_path} className={'carousel-poster'}/>
                                    <div style={{maxWidth: '400px'}}>
                                        <h3>{move.title}</h3>
                                        <span>{move.overview}</span>
                                    </div>
                                </div>
                            </div>


                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}
export default Carousel