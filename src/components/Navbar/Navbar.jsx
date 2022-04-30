
import React from 'react'
import Logo from '../../assets/images/logo.png';
import '../../assets/scss/global.scss';
import { Button } from '@mui/material';

import '../../assets/scss/include/_navbar.scss'


import LanguageButton from '../LanguageButton';

function Navbar(props) {
    return (
        <>
            <div className='navbar'>
                <div className="right">
                    <div className="logo">
                        {/* <img src={Logo} /> */}
                        {props.img}
                    </div>
                </div>
                <div className="left">

                    {/* <LanguageButton /> */}
                    {props.LanguageButton}

                    <div className="sign-in">
                        {/* <Button variant="contained" color="error">Sign in</Button> */}

                        <a href="/signin">
                            {props.signin}
                        </a>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Navbar