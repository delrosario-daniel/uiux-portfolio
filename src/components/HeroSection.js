import React from 'react'
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        {/* <video src={'/public/videos/video-2.mp4'} autoPlay loop muted /> */}
        {/* <video id="background-video" loop muted autoPlay>
            <source src={'/public/videos/video-2.mp4'} type="video/mp4" />
            Your browser does not support the video tag.
        </video> */}
        <div className='hero-column-left'>
            {/* <h1>Hi there!<br></br>this is Daniel<br></br>UI/UX Designer!</h1> */}
            <h1>Hi there!</h1>
            <h1>this is Daniel</h1>
            <h1>UI/UX Designer.</h1>
        </div>
        {/* <p>What are you waiting for?</p> */}
        {/* <div className='hero-btns'>
            <Button 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
            >
                GET STARTED
            </Button>
            <Button 
                className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'
            >
                WATCH TRAILER <i className='far fa-play-circle' />
            </Button>
        </div> */}
        <div className='hero-column-right'>
            <div className="hero-card">
                <img src='./images/img-profile.png' alt='Profile' className='hero-profile'/>
            </div>
        </div>
    </div>
  )
}

export default HeroSection;