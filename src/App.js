import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Gallery';
import Testimonials from  './components/Testimonials'; //Event
import Event from './components/Event'; //Gallery
import Portfolio from './components/Member';
import Sponsor from './components/Sponsor';
import Greeting from './components/Greeting';
import Footer from './components/Footer';
import resumeData from './resumeData';
import './App.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header resumeData={resumeData}/>
                <Testimonials resumeData={resumeData}/>
                <Event resumeData={resumeData}/>
                <Portfolio resumeData={resumeData}/>
                <Resume resumeData={resumeData}/>
                <Sponsor resumeData={resumeData}/>
                <Greeting resumeData={resumeData} />
                <About resumeData={resumeData}/>
                <Footer resumeData={resumeData}/>
            </div>
        );
    }
}

export default App;
