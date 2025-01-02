import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import {DataContext} from '../App'

const About = () => {
  const {id}=useParams();
  const {petData}=useContext(DataContext)
  /* console.log(id)
  console.log(petData) */
  return (
    <div className='about'>
    < div className='aboutWrap'>
       <div className="imgWrap">
        <img src={process.env.PUBLIC_URL + petData[id].img} alt="" />
       </div>
       <div className="cntWrap">
          <div className="title">{petData[id].title}</div>
          <div className="desc">{petData[id].desc}</div>
          <div className="price">{petData[id].price}</div>
       </div>
    </ div >
    </div>
  );
};

export default About;