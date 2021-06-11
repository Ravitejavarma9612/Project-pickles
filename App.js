import React from 'react';
import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import {BrowserRouter as Router ,Switch,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router> 
    <Switch>
   <Route path="/">
     <div className="app">
     <>
      <Header />
      <Body /> 
      <Footer />
      </>
    </div>
   </Route>
   </Switch>
   </Router>
  );
}

export default App;
