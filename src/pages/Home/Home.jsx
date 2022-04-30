import React from 'react'
import HomeNavbar from '../../components/HomeNavbar';
import Logo from '../../assets/images/logo.png';

import List from '../../components/List/Lists';
import MovieBanner from '../../components/MovieBanner';

import FrontBanner from '../../assets/images/banner/b1.jpg';
import Footer from '../../components/Footer';

import NetflixOrignals from '../../components/netflix-orignals/NetflixOrignals';

function Home() {
    return (
        <div className="home-page">
            <HomeNavbar />
            <MovieBanner
                moviebanner="https://occ-0-2164-64.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVd8flsWvOa5z-h9CxJc5Y7-RezD3dGrMjwvdvpyKMANhvI0N2ww_mriwey71J_Ii9OsZKDaUGm1qspFcLecxmZQlr6u.jpg?r=d6a"
                moviename="Marvel's Daredevil"
                moviediscription="Blinded as a young boy, Matt Murdock fights injustice by day as a lawyer and by night as the Super Hero Daredevil in Hell's Kitchen, New York City."

                movielogo="https://occ-0-2164-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABX3z2SVbS75kUkedCcMNiXmmKiWLRa-OYxO4guudw6qeZDxi2d3mPdkkWRuWWtqrbpkz5TfE6TKjyYeuViEf5UEj0IG47wxF-mfnQLsT8n-szIE_7giTljeAaxNQQwz0HYSNyUuGtI-wZ_1NfvuQEngoB7IkfVJ4qMfjWV0A2yUfDw.png?r=3c5"

            />
            <List />

            <NetflixOrignals />

            <Footer />

        </div>
    )
}

export default Home