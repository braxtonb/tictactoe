import React from 'react';
import Stars from '../Stars/Stars';
import Twinkling from '../Twinkling/Twinkling';
import Clouds from '../Clouds/Clouds';

const Background: React.FC = () => {
  return (
    <React.Fragment>
      <Stars />
      <Twinkling />
      <Clouds />
    </React.Fragment>
  );
};

export default Background;
