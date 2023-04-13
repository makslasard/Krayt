import React from 'react';

import popularRing from '../../../../assets/img/categories/popularRing.svg';

import styles from './Category.module.scss';

const Category: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src={popularRing} alt="popularRing" />
      <p>Кольца</p>
    </div>
  );
};

export default Category;
