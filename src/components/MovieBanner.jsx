import React from 'react'
import FrontBanner from '../assets/images/banner/b1.jpg';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';






function MovieBanner(props) {
    return (

        <div className="movie-banner">
            <img src={props.moviebanner} />


            <div className="text">
                <div className="m-discription">
                    <img src={props.movielogo} className="movielogo" />
                    <h1>{props.moviename}</h1>
                    <br />
                    <p>{props.moviediscription}</p>
                </div>

                <div className="btn">
                    <button className='play'> <PlayArrowIcon /> &nbsp; Play</button>

                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button className='info'> <InfoOutlinedIcon /> &nbsp; Info</button>

                </div>

            </div>
        </div>



    )
}

export default MovieBanner;


