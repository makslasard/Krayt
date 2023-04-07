import React from 'react';

import styles from './ProductColors.module.scss';

const ProductColors = () => {
  return (
    <div className={styles.container}>
      <h4>Цвет</h4>
      <div className={styles.wrapper}>
        <div className={styles.color_gray_wrapper}>
          <div className={styles.color_gray} />
        </div>
        <div className={styles.color_yellow_wrapper}>
          <div className={styles.color_yellow} />
        </div>
        <div className={styles.color_orange_wrapper}>
          <div className={styles.color_orange} />
        </div>
        <div className={styles.color_green_wrapper}>
          <div className={styles.color_green} />
        </div>
      </div>
    </div>
  );
};

export default ProductColors;
