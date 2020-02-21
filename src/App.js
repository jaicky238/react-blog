import React from 'react';
import './App.css';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Header from './components/Header';
import Post from './pages/Post';
import Hero from './components/Hero';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Hero/>
        <Route path="/" exact component={Home}/>
        <Route path="/contact"  component={ContactUs}/>
        <Route path="/about"  component={AboutUs}/>
        <Route path="/post/:postId" component={Post}/>
    </div>
    </Router>

  );
}

export default App;
