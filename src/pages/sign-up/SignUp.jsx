import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import '../../assets/scss/global.scss';

import GetStartedInput from '../../components/GetStartedInput';

import EnjoyOnTv from '../../components/EnjoyOnTV';
import FAQ from '../../components/FAQ';

import Video1 from '../../assets/images/video-tv-in-1.m4v'

import Footer from '../../components/Footer';

import Logo from '../../assets/images/logo.png';

import LanguageButton from '../../components/LanguageButton';

import { Button } from '@mui/material';

// import { PropaneSharp } from '@mui/icons-material';





function SignUp() {
    return (
        <>

            <div className="main-banner">
                <Navbar
                    img={<img src={Logo} />}
                    LanguageButton={<LanguageButton />}
                    signin={<Button variant="contained" color="error">Sign in</Button>}
                />
                <div className="container">
                    <div className="text">
                        <h1>Unlimited movies, TV <br />shows and more.</h1>
                        <h3>Watch anywhere. Cancel anytime.</h3> <br />
                        <p>Ready to watch? Enter your email to create or restart your memebership.</p>
                    </div> <br />


                    <GetStartedInput />

                </div>
            </div>



            <EnjoyOnTv
                name="Enjoy on your TV."
                discription="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
                imgURL="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                video="Video1"
            />

            <EnjoyOnTv
                imgURL="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                name="Download your shows to watch offline."
                discription="Save your favourites easily and always have something to watch."
            />

            <EnjoyOnTv
                imgURL="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
                name="Watch everywhere."
                discription="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
            />

            <EnjoyOnTv
                imgURL="https://occ-0-2164-64.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf"
                name="Create profiles for children."
                discription="Send children on adventures with their favourite characters in a space made just for them—free with your membership.."
            />

            <FAQ />


            <div className="sign-up">
                <p style={{ margin: "10px" }}>Ready to watch? Enter your email to create or restart your memebership.</p> <br />

                <GetStartedInput />
            </div>



            <Footer />


        </>
    )
}

export default SignUp