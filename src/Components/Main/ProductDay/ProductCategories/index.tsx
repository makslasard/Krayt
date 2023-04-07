import React from 'react';

import styles from './ProductCategories.module.scss';

const ProductCategories = () => {
  return (
    <div className={styles.container}>
      <div className={styles.new}>
        <p>New</p>
      </div>
      <div className={styles.hit}>
        <p>Хит</p>
      </div>
      <div className={styles.sale}>
        <p>Sale</p>
      </div>
    </div>
  );
};

export default ProductCategories;
