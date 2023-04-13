import React from 'react';

import arrowLeft from '../../../../assets/img/arrowLeft.svg';
import arrowRight from '../../../../assets/img/arrowRight.svg';

import styles from './Filter.module.scss';

const Filter: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.pressed}>
          <p>Кольцо</p>
        </div>
        <div className={styles.filter}>
          <p>Серьги</p>
        </div>
        <div className={styles.filter}>
          <p>Браслеты</p>
        </div>
        <div className={styles.filter}>
          <p>Часы</p>
        </div>
      </div>
      <div className={styles.arrows}>
        <img src={arrowLeft} alt="arrowLeft" />
        <img src={arrowRight} alt="arrowRight" />
      </div>
    </div>
  );
};

export default Filter;
