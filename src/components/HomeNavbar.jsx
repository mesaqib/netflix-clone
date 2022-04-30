import React from 'react'

import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import Logo from '../assets/images/logo.png';

function HomeNavbar(props) {
    return (
        <div>

            <div className="home-navbar">
                <div className="left">
                    <img src={Logo} />

                </div>
                <div className="middle">
                    <div className="menu">
                        <a href=''>Home</a>
                        <a href=''>Series</a>
                        <a href=''>Movies</a>
                        <a href=''>New and Popular</a>
                        <a href=''>My List</a>

                    </div>
                </div>
                <div className="right">
                    <SearchIcon className='icon' />

                    <a href="" className='icon'>KID</a>

                    <NotificationsIcon className='icon' />

                    <PersonIcon className='icon' />

                    <ArrowDropDownIcon className='icon' />

                </div>
            </div>

        </div>
    )
}

export default HomeNavbar