

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import l1 from '../../assets/images/Lists/l1.jpg';
import l2 from '../../assets/images/Lists/l2.jpg';
import l3 from '../../assets/images/Lists/l3.jpg';
import l4 from '../../assets/images/Lists/l4.jpg';
import l5 from '../../assets/images/Lists/l5.jpg';
import l6 from '../../assets/images/Lists/l6.jpg';

import MovieDescription from '../../components/List/MovieDescription';

import Vid from '../../assets/images/vid.mp4';


//  <assets />
// <images />
// <Lists />

// import required modules
import { Pagination, Navigation } from "swiper";
import MovieInfo from '../../components/List/MovieInfo';

function MovieListItem(props) {
    return (
        <div className="netflix-orignals">
            <div className="movie-list">
                <span className="listTitle"> Netflix Orignals</span>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={10}
                    slidesPerGroup={4}
                    loop={false}
                    loopFillGroupWithBlank={true}
                    // pagination={{
                    //     clickable: false,
                    // }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >


                    <SwiperSlide> <img src={l1} />
                        <MovieInfo
                            moviename="noway home"
                            duration="1h 20min"
                            year="2020"
                            genre="Action"
                        />
                    </SwiperSlide>

                    <SwiperSlide> <img src={l2} />
                        <MovieInfo
                            moviename="noway home"
                            duration="1h 20min"
                            year="2020"
                            genre="Action"
                        />
                    </SwiperSlide>

                    <SwiperSlide> <img src={l3} />
                        <MovieInfo
                            moviename="noway home"
                            duration="1h 20min"
                            year="2020"
                            genre="Action"
                        />
                    </SwiperSlide>

                    <SwiperSlide> <img src={l4} />
                        <MovieInfo
                            moviename="noway home"
                            duration="1h 20min"
                            year="2020"
                            genre="Action"
                        />
                    </SwiperSlide>

                    <SwiperSlide> <img src={l5} />
                        <MovieInfo
                            moviename="noway home"
                            duration="1h 20min"
                            year="2020"
                            genre="Action"
                        />
                    </SwiperSlide>

                    <SwiperSlide> <img src={l6} />
                        <MovieInfo
                            moviename="noway home"
                            duration="1h 20min"
                            year="2020"
                            genre="Action"
                        />
                    </SwiperSlide>

                    <SwiperSlide> <img src={l1} />
                        <MovieInfo
                            moviename="noway home"
                            duration="1h 20min"
                            year="2020"
                            genre="Action"
                        />
                    </SwiperSlide>

                    <SwiperSlide> <img src={l2} />
                        <MovieInfo
                            moviename="noway home"
                            duration="1h 20min"
                            year="2020"
                            genre="Action"
                        />
                    </SwiperSlide>



                </Swiper>
            </div >

        </div >
    )
}

export default MovieListItem