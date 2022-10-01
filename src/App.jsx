import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Home from './components/pages/home/index';
import SignIn from './components/pages/auth/Signin';
import SignUp from './components/pages/auth/Signup';
import Profile from './components/pages/profile/index';
import ArticlesPage from './components/pages/articlesPage/CategoryArticles';

function App() {

    let category = '';

    return (
        <div className='App'>
            <Routes>
                
                <Route exact path='/' element={<Home />} />
                
                <Route path='/signup' element={<SignUp/>} />
                <Route path='/signin' element={<SignIn/>} />

                <Route path='/general' element={<ArticlesPage/>} category='general'/>
                <Route path='/business' element={<ArticlesPage/>} category='business'/>
                <Route path='/health' element={<ArticlesPage/>} category='health'/>
                <Route path='/entertaiment' element={<ArticlesPage/>} category='entertaiment'/>
                <Route path='/science' element={<ArticlesPage/>} category='science'/>
                <Route path='/sports' element={<ArticlesPage/>} category='sports'/>
                <Route path='/technologie' element={<ArticlesPage/>} category='technologie'/>

                <Route path={`/${category}`} element={<ArticlesPage/>} category={category}/>
            </Routes>

        </div>
    );
}

export default App;