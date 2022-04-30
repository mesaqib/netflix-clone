import React from 'react'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

import Vid from '../../assets/images/vid.mp4';

function MovieInfo(props) {
    return (

        <div className="movieinfo">
            <div className="content">
                <div className="moviename">
                    <a href={Vid}>
                        <PlayCircleOutlineIcon className='playicon' />
                    </a> &nbsp;
                    {props.moviename}
                </div>
                <div className="moviedisc">
                    {props.duration}
                    |
                    {props.year}
                    |
                    {props.genre}
                </div>
            </div>
        </div>

    )
}

export default MovieInfo