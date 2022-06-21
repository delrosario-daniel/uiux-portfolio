import React from 'react'
import { Button } from './Button';
import './Footer.css';
import {Link} from 'react-router-dom';

function Footer() {
    const fbClick = () => {
        window.open('https://www.facebook.com/danielallen.delrosario');
    }

    return (
        <div className='footer-container'>
            {/* <section className="footer-subscription">
                <p className="footer-subscription-header">
                    Join the Adventure Newsletter to receive our best vacation deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name='email' placeholder='Your Email' className="footer-input" />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                </div>
            </div> */}
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            DNL <i class="fa-solid fa-palette"></i>
                        </Link>
                    </div>
                    <small className="website-rights">DNL © 2022</small>
                    <div className="social-icons">
                        {/* <Link className="social-icon-link facebook"
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-link github"
                            to='/'
                            target='_blank'
                            aria-label='Github'
                        >
                            <i className="fab fa-github"></i>
                        </Link>
                        <Link className="social-icon-link linkedin"
                            to='/'
                            target='_blank'
                            aria-label='Linkedin'
                        >
                            <i className="fab fa-linkedin"></i>
                        </Link> */}

                        <div className="social-icon-link linkedin">
                            <a href="https://www.linkedin.com/in/del-rosario-daniel-allen" target="_blank" rel="noreferrer noopener">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                        <div className="social-icon-link github">
                            <a href="https://github.com/delrosariotup" target="_blank" rel="noreferrer noopener">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;