import React from 'react';
import Navbar from './components/Navbar';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import SignUp from './components/pages/SignUp';

import FocusOptical from './components/pages/Projects/FocusOptical';
import IBayanihan from './components/pages/Projects/IBayanihan';
import NFTMarketplace from './components/pages/Projects/NFTMarketplace';
import SRMSMobile from './components/pages/Projects/SRMSMobile';
import SRMSWeb from './components/pages/Projects/SRMSWeb';
import { IBayanihanData } from './components/contents/IBayanihanData';
import { NFTMarketplaceData } from './components/contents/NFTMarketplaceData';
import { FocusOpticalData } from './components/contents/FocusOpticalData';
import { SRMSWebData } from './components/contents/SRMSWebData';
import { SRMSMobileData } from './components/contents/SRMSMobileData';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          {/* <Route path='/' exact component={Home} /> */}
          <Route path='/uiux-portfolio' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<About/>} />

          <Route path='/focus-optical' element={<FocusOptical slides={FocusOpticalData} />} />
          <Route path='/ibayanihan' element={<IBayanihan slides={IBayanihanData} />} />
          <Route path='/nft-marketplace' element={<NFTMarketplace slides={NFTMarketplaceData} />} />
          <Route path='/srms-mobile' element={<SRMSMobile slides={SRMSMobileData} />} />
          <Route path='/srms-web' element={<SRMSWeb slides={SRMSWebData} />} />
          
          {/* <Route path='/sign-up' element={<SignUp/>} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
