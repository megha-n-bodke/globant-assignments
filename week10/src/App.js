import React ,{ createContext, useState, useContext } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Form from './registration/Form.jsx';
import Err_Boundary from './ErrorBoundary/Err_Boundary';
import LazyFallbackComponent from './LazyComponent/LazyFallbackComponent';
import { ReactReduxContext, useSelector } from 'react-redux'

//lazy loading
const UsersWithReduxSaga = React.lazy(() => 
{ 
   return new Promise(resolve => setTimeout(resolve, 3 * 1000))
  .then(() => import('./redux-saga/UsersWithReduxSaga')) })

const Firstname = createContext();


function App() {
  const fullName = useSelector(state => state.registration.userProfile.firstName + " " + state.registration.userProfile.lastName)

  return (
    <>
      <React.Suspense fallback={<LazyFallbackComponent/>}>
        <BrowserRouter>
          <>
          <Firstname.Provider value = {fullName}>
            <Switch>
              <Route exact path="/" component={Form} />
              <Err_Boundary>
              <Route exact path="/welcome"  component={UsersWithReduxSaga}/>
              </Err_Boundary>
            </Switch>
            </Firstname.Provider> 
          </>
        </BrowserRouter>
      </React.Suspense>
    </>
  );
}

export default App;
export {Firstname}