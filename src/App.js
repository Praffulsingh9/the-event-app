import React, { Component } from 'react';
import './resources/resources/styles.css';
import {Element} from 'react-scroll';
import Header from './components/header_footer/Header';
import Featured from './components/featured/index';
import VenueInfo from './components/venueInfo/index';
import Highlights from './components/Highlights/index';
import Pricing from './components/pricing/index';
import Location from './components/location/index';
import Footer from './components/header_footer/Footer';
class App extends Component {
  render() {
    return (
      <div className="App" style={{
        height:"1500px",
        backgroundColor:"white"
      }}>
      <Header />
      
      <Element name="featured"><Featured /></Element>
      <Element name="venueinfo"><VenueInfo /></Element>
      <Element name="highlights"><Highlights /></Element>
      <Element name="pricing"><Pricing /></Element>
      <Element name="location"><Location/></Element>
      <Footer/>
      </div>
    );
  }
}

export default App;
