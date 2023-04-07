import React from 'react';

import BuyProduct from './BuyProduct';
import Product from './Product';
import ProductCategories from './ProductCategories';
import ProductColors from './ProductColors';
import Rating from './Rating';
import Size from './Size';
import Title from './Title';

import arrowLeft from '../../../assets/img/arrowLeft.svg';
import arrowRight from '../../../assets/img/arrowRight.svg';

import styles from './ProductDay.module.scss';

const ProductDay = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Товар дня</h2>
        <div className={styles.arrows}>
          <img src={arrowLeft} alt="arrowLeft" className={styles.arrowLeft} />
          <img src={arrowRight} alt="arrowRight" className={styles.arrowRight} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.wrapper_left}>
          <ProductCategories />
          <Product />
        </div>
        <div className={styles.wrapper_right}>
          <Rating />
          <Title />
          <ProductColors />
          <Size />
          <BuyProduct />
        </div>
      </div>
    </div>
  );
};

export default ProductDay;
