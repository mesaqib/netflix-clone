

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

import l1 from '../../assets/images/Lists/l1.jpg';
// import l2 from '../../assets/images/Lists/l2.jpg';
// import l3 from '../../assets/images/Lists/l3.jpg';
// import l4 from '../../assets/images/Lists/l4.jpg';
// import l5 from '../../assets/images/Lists/l5.jpg';

import MovieListItem from './MovieListItem';


// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
    return (
        <div>
            <MovieListItem
                listtitle="Popular Series"
            />

            <MovieListItem
                listtitle="Best Action Movies"
            />

            <MovieListItem
                listtitle="Thriller Movies"
            />

            <MovieListItem
                listtitle="Best Movies"
            />
            {/* <MovieListItem
                listtitle="Netflix Orignals"
            /> */}


        </div>
    );
}
