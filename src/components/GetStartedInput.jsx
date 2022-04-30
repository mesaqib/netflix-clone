import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function GetStartedInput() {
    return (
        <div>
            <div className="input">
                <form>
                    <input type="text" name="email" placeholder='Email Address' />

                    <button className='get-started-btn'>
                        <a href="/signin">
                            Get Started
                            <ArrowForwardIosIcon className="arrow" />
                        </a>
                    </button>

                </form>
            </div>
        </div>
    )
}

export default GetStartedInput