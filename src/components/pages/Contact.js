import React from 'react';
import '../../App.css';

function Contact() {
    return(
        <div className='contact'>
            <h1 className='title'>CONTACT</h1>
            <div className="details">
                <div className="column-details-left">
                    <h1>Email:</h1>
                    <h1 style={{color: '#FFD24C'}}>delrosario.danielallen@gmail.com</h1>
                    <br></br>
                    <h1>Contact Number:</h1>
                    <h1 style={{color: '#FFD24C'}}>+639569163870</h1>
                </div>
                
                <div className="column-details-right">
                    <h1>Linkedin:</h1>
                    <a href="https://www.linkedin.com/in/del-rosario-daniel-allen" target="_blank" rel="noreferrer noopener">
                        <h1>https://www.linkedin.com/in/del-rosario-daniel-allen</h1>
                    </a>
                    <br></br>
                    <h1>Github:</h1>
                    <a href="https://github.com/delrosario-daniel" target="_blank" rel="noreferrer noopener">
                        <h1>https://github.com/delrosario-daniel</h1>
                    </a>
                </div> 
            </div>
        </div>
    )
}

export default Contact;