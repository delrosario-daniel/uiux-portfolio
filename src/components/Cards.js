import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
// import SRMSWeb1 from '/images/SRMSWeb/srms-web-1.png';

function Cards() {
  return (
    <div className='cards'>
        <h1>UI/UX Projects</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                        // src='/images/SRMSWeb/srms-web-1.png'
                        className='srms-web-1'
                        text='Dr. Arcadio National High School: School Resource Management System (SRMS)'
                        label='Web Application'
                        path='/srms-web'
                    />
                    <CardItem 
                        src='/images/SRMSMobile/srms-mobile-1.png'
                        text='Dr. Arcadio National High School: School Resource Management System (SRMS)'
                        label='Mobile'
                        path='/srms-mobile'
                    />
                </ul>

                <ul className="cards__items">
                    <CardItem 
                        src='/images/NFTMarketplace/nft-marketplace-1.png'
                        text='NFT Marketplace Mobile'
                        label='Mobile'
                        path='/nft-marketplace'
                    />
                    <CardItem 
                        src='/images/iBayanihan/iBayanihan-1.png'
                        text='Developer Student Clubs Loyola: HackFest 2020 (iBayanihan App)'
                        label='Mobile'
                        path='/ibayanihan'
                    />
                    <CardItem 
                        src='/images/FocusOptical/focus-optical-1.png'
                        text='Focus Optical Website'
                        label='Website'
                        path='/focus-optical'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards;