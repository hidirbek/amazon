import React from 'react';
import { Route } from 'react-router-dom';
import Login from './login/Login';
import Home from './home/Home';
import Explore from './explore/Explore';
import Pdp from './pdp/Pdp';
import SignUp from './signup/SignUp';

const index = () => {
  return (
    <>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/signup">
        <SignUp/>
      </Route>
      <Route exact path="/explorenow">
        <Explore/>
      </Route>
      <Route path="/explorenow/:id">
        <Pdp/>
      </Route>
    </>
  )
}

export default index