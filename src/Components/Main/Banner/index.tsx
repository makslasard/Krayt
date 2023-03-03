import React from 'react';

import arrowLeft from '../../../assets/img/arrowLeft.svg';
import arrowRight from '../../../assets/img/arrowRight.svg';
import ring from '../../../assets/img/ring.svg';

import styles from './Banner.module.scss';

const Banner: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src={arrowLeft} alt="arrowLeft" className={styles.arrowLeft} />
      <img src={arrowRight} alt="arrowRight" className={styles.arrowRight} />
      <div>
        <h3>Суперскидка до 60%</h3>
        <h2>На бриллианты</h2>
        <button type="submit">Подробнее</button>
      </div>
      <div>
        <img src={ring} alt="ring" />
      </div>
    </div>
  );
};

export default Banner;
