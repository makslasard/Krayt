import React from 'react';

import ring from '../../../../assets/img/productDay/ring.svg';

import styles from './Product.module.scss';

const Product = () => {
  return (
    <div className={styles.container}>
      <img src={ring} alt="ring" />
    </div>
  );
};

export default Product;
