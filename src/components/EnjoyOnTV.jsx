import React from 'react'

// import '../../assets/scss/global.scss';

import Video1 from '../assets/images/video-tv-in-1.m4v';



function EnjoyOnTv(props) {
    return (
        <div>
            <div className="enjoyOnTv">

                <div className="left">
                    <div className="text">
                        <h2>{props.name}</h2>
                        <h1>{props.discription}</h1>
                    </div>
                </div>
                <div className="right">
                    <img src={props.imgURL} />

                    <video autoplay>
                        <source src={props.video} type="video/mp4" />
                    </video>

                </div>

            </div>
        </div >
    )
}

export default EnjoyOnTv;