import React from 'react';
import '../../App.css';

function About() {
    return(
        <div className='about'>
            <h1 className='title'>ABOUT ME</h1>
            <div className="about-me">
                <div className="about-me-left">
                    <h3>
                        "I am Daniel Allen Del Rosario, currently in my 4th year of studying Bachelor of Science in Information Technology in Technological University of the Philippines – Taguig Campus. 
                        I am a hardworking and goal-oriented individual with a great passion for UI/UX design. 
                        I have also developed a mature and responsible approach to any task or situation that I am presented with. 
                        I am seeing an internship position in the industry in which I can put into practice my knowledge and experience in UI/UX design, 
                        ultimately benefiting the operations of the organization that I will work for."
                    </h3>
                </div>

                <div className="about-me-right">
                    <img src='/images/about-profile.jpg' atl='About Me' className='about-me-profile'/>
                </div>
            </div>
        </div>
    )
}

export default About;