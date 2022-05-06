import React from 'react'
import ReactDom from "react-dom";
import SignUp from './pages/sign-up/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Home from './pages/Home/Home';

import { Routes, Route } from 'react-router-dom';

//   

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </>
    )
}

export default App