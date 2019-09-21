import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Gallery';
import Testimonials from  './components/Testimonials'; //Event
import Event from './components/Event'; //Gallery
import Portfolio from './components/Member';
import Sponsor from './components/Sponsor';
import Footer from './components/Footer';
import resumeData from './resumeData';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Testimonials resumeData={resumeData}/>
        <Event resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <Sponsor resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;
