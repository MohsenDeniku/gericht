import React from 'react';

import './Chef.css';

import {images} from '../../constants'
import { SubHeading } from '../../components';

const Chef = () => (
  <div className='app__chef section__padding app__bg flex__center'>
    <div className="app__chef-img">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__chef-content">
      <div className="app__chef-heading">
        <SubHeading title="Chef’s Word" />  
        <h1 className='headtext__cormorant'>
          What we believe in
        </h1>
      </div>
      <div className="app__chef-content-para">
        <div className="app__chef-content-para-inlinePara">
          <img src={images.quote} alt="quote" className='inline-image'/>
          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit auctor sit .</p>
        </div>
        
        <p>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
          Nulla scelerisque scelerisque congue ac consequat,
          aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.
        </p>
      </div>
      <div className="app__chef-content-chef-sign">
        <h3>Kevin Luo</h3>
        <p>Chef & Founder</p>
        <img src={images.sign} alt="chef signature" />
      </div>
    </div>
    
  </div>
);

export default Chef;
