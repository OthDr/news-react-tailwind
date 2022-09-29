import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Home from './components/pages/home/index';
import SignIn from './components/pages/auth/Signin';
import SignUp from './components/pages/auth/Signup';
import Profile from './components/pages/profile/index';

function App() {

    return (
        <div className='App'>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/signup' element={<SignUp/>} />
                <Route path='/signin' element={<SignIn/>} />
                <Route path='/profile' element={<Profile/>} />
            </Routes>

        </div>
    );
}

export default App;