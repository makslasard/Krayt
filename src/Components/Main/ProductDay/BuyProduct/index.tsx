import React from 'react';

import heart from '../../../../assets/img/productDay/Actions/heart.svg';
import chart from '../../../../assets/img/productDay/Actions/chart.svg';
import share from '../../../../assets/img/productDay/Actions/share.svg';

import styles from './BuyProduct.module.scss';

const BuyProduct = () => {
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <div className={styles.basket}>
          <p>В корзину</p>
        </div>
        <div className={styles.buy}>
          <p>Купить в 1 клик</p>
        </div>
      </div>
      <div className={styles.actions}>
        <div className={styles.save}>
          <img src={heart} alt="heart" />
          <p>Сохранить</p>
        </div>
        <div className={styles.compare}>
          <img src={chart} alt="chart" />
          <p>Сравнить</p>
        </div>
        <div className={styles.share}>
          <img src={share} alt="share" />
          <p>Поделиться</p>
        </div>
      </div>
    </div>
  );
};

export default BuyProduct;
