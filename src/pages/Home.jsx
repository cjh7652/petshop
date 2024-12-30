import React from 'react';
import MainSlider from '../componenets/MainSlider';
import BestItem from '../componenets/BestItem';
import FreshBox from '../componenets/FreshBox';
import Location from '../componenets/Location';


const Home = () => {
  return (
    <div>
      <MainSlider />
      <BestItem />
      <FreshBox />
      <Location/>
    </div>
  );
};

export default Home;