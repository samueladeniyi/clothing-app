import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Shop from "./components/Shop";
import Header from "./components/Header";
import SignInUp from "./components/SignInUp";
import { auth } from './components/firebase/firebase.utils'

function App() {

  const [state,setState]= useState({currentUser: null});

 

  useEffect(()=>{
   auth.onAuthStateChanged(user => {
      setState({currentUser: user})
      console.log(user)
    })
    
    })

   
  return (
    <div>
      <Header currentUser = {state.currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={SignInUp} />
      </Switch>
    </div>
  );
}

export default App;
