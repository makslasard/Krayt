import React from 'react';

import cardRing from '../../../../assets/img/cardRing.svg';
import heart from '../../../../assets/img/sales/heart.svg';
import eye from '../../../../assets/img/sales/eye.svg';

import styles from './Card.module.scss';

const Card: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.discount}>
        <p>Sale</p>
      </div>
      <img height={200} width={200} src={cardRing} alt="cardRing" />
      <div className={styles.wrapper}>
        <div className={styles.price}>
          <div className={styles.rate}>
            <p>41 000 P</p>
            <span>65 000 P</span>
          </div>
          <div className={styles.sale}>
            <p>-45%</p>
          </div>
        </div>
        <div className={styles.descr}>
          <p>Стильное кольцо из белого золота c бриллиантами</p>
        </div>
      </div>
      <img height={20} width={20} src={heart} alt="heart" className={styles.heart} />
      <img height={20} width={20} src={eye} alt="eye" className={styles.eye} />
    </div>
  );
};

export default Card;
