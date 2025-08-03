import React from 'react';
import './Home.css';
import Navbar from '../../componets/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../componets/TitleCards/TitleCards';
import Footer from '../../componets/Footer/Footer';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />

      {/* Hero Section */}
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>Discovering his ties to a secret ancient order, a young man in Istanbul embarks on a quest to save the city from an immortal enemy.</p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>
        </div>
      </div>

      {/* Anchor-Based Sections */}
      <div className="more-cards">
        <TitleCards id="popular" title="Popular on Netflix" category="popular" />
        <TitleCards id="top-rated" title="Top Picks for You" category="top_rated" />
        <TitleCards id="upcoming" title="Upcoming" category="upcoming" />
        <TitleCards id="movies" title="Blockbuster Movies" category="now_playing" />
      </div>

    

      <Footer />
    </div>
  );
};

export default Home;
