import React from 'react';

import basket from '../../../../../assets/img/basket.svg';

import styles from './Basket.module.scss';

const Basket: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src={basket} alt="basket" />
    </div>
  );
};

export default Basket;
