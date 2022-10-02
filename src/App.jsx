import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Home from './components/pages/home/index';
import SignIn from './components/pages/auth/Signin';
import SignUp from './components/pages/auth/Signup';
import Profile from './components/pages/profile/index';
import CategoryArticles from './components/pages/articlesPage/CategoryArticles';

function App() {

    let category = '';

    return (
        <div className='App'>
            <Routes>
                
                <Route exact path='/' element={<Home />} />
                
                <Route path='/signup' element={<SignUp/>} />
                <Route path='/signin' element={<SignIn/>} />

                <Route path='/general' element={<CategoryArticles category='general'/>} />
                <Route path='/business' element={<CategoryArticles category='business'/>} />
                <Route path='/health' element={<CategoryArticles category='health'/>} />
                <Route path='/entertaiment' element={<CategoryArticles category='entertaiment'/>} />
                <Route path='/science' element={<CategoryArticles category='science'/>} />
                <Route path='/sports' element={<CategoryArticles category='sports'/>} />
                <Route path='/technologie' element={<CategoryArticles category='technologie'/>} />

                <Route path={`/${category}`} element={<CategoryArticles category={category}/>} />
            </Routes>

        </div>
    );
}

export default App;