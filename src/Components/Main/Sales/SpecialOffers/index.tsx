import React from 'react';

import earring from '../../../../assets/img/specialOffer/earring.svg';

import styles from './SpecialOffers.module.scss';

const SpecialOffer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>
          Скидки
          <br /> на все украшения c бриллиантами
        </h3>
        <div className={styles.sale}>
          <p>
            До <span>-50%</span>
          </p>
        </div>
      </div>
      <div className={styles.product}>
        <img src={earring} alt="earring" />
      </div>
    </div>
  );
};

export default SpecialOffer;
