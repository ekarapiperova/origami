import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
}from 'react-router-dom'


import Publications from './pages/home-page/home-page'
import ShareThoughtsPage from './pages/share-thoughts'
import RegisterPage from './pages/register-page'
import LoginPage from './pages/login-page'

const Navigation=()=>{

    return(
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Publications}/>
            <Route path='/share' component={ShareThoughtsPage}/>
            <Route path='/register' component={RegisterPage}/>
            <Route path='/login' component={LoginPage}/>


        </Switch>
        </BrowserRouter>
    )
}

export default Navigation