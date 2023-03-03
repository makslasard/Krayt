import React from 'react';

import cardRing from '../../../../assets/img/cardRing.svg';

import styles from './Card.module.scss';

const Card: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src={cardRing} alt="cardRing" />
      <div className={styles.wrapper}>
        <p>41 000 P</p>
        <p>65 000 P</p>
      </div>
      <p>Стильное кольцо из белого золота c бриллиантами</p>
    </div>
  );
};

export default Card;
