import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Recipes from './components/pages/recipes';
import Routines from './components/pages/routines';
import Aboutus from './components/pages/about-us';
import contactus from './components/pages/contact-us';
import Footer from './components/Footer';
import recipe from './components/pages/recipe';
import routine from './components/pages/routine';
import user from './components/pages/User';

import {UserContextProvider} from './context/UserContext';


function App() {
  return (
    <UserContextProvider>
    <Router>
    <Navbar></Navbar>
    <Switch>
      <Route path='/' exact component={Home} ></Route>
      <Route path='/recipes' exact component ={Recipes}></Route>
      <Route path='/routines' exact component ={Routines}></Route>
      <Route path='/about-us' exact component ={Aboutus}></Route>
      <Route path='/contact-us' exact component ={contactus}></Route>
      <Route path='/recipe/:id' exact component ={recipe}></Route>
      <Route path='/routine/:id' exact component ={routine}></Route>
      <Route path='/user'exact component={user} ></Route>
    </Switch>
    <Footer></Footer>
    </Router>
    </UserContextProvider>
  );
}

export default App;
