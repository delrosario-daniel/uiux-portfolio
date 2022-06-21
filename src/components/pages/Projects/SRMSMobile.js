import React, {useState} from 'react';
import '../../../App.css';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import { SRMSMobileData } from '../../contents/SRMSMobileData';

function SRMSMobile({slides}) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if(!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div>
        <h1 className='title'>Dr. Arcadio National High School: School Resource Management System (SRMS) <br></br> Mobile</h1>
        <section className='slider'>
          <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
          <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
          {SRMSMobileData.map((slide, index) => {
            return(
              <div className={index === current ? 'slide active' : 'slide'} key={index}>
                {index === current && (
                  <img src={slide.image} alt='Content' className='image' />
                )}
              </div>
            )
          })}
        </section>
        <div className='content-links'>
          <h1>Links:</h1>
          <a href='https://www.figma.com/file/uAJjCOXptUsphz1mx6FsWy/SRMS-Android-App?node-id=0%3A1' target="_blank" rel="noreferrer noopener">
            <h1>Figma</h1>
          </a>
        </div>
    </div>
  )
}

export default SRMSMobile