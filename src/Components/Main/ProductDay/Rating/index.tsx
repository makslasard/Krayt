import React from 'react';

import starBG from '../../../../assets/img/productDay/StarBG.svg';
import star from '../../../../assets/img/productDay/Star.svg';

import styles from './Rating.module.scss';

const Rating = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img src={starBG} alt="starBG" />
        <img src={starBG} alt="starBG" />
        <img src={starBG} alt="starBG" />
        <img src={starBG} alt="starBG" />
        <img src={star} alt="star" />
      </div>
      <div>
        <p>4,2</p>
      </div>
    </div>
  );
};

export default Rating;
