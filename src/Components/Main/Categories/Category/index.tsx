import React from 'react';

import popularRing from '../../../../assets/img/popularRing.svg';

import styles from './Category.module.scss';

const Category: React.FC = () => {
  return (
    <div className={styles.container}>
      <img height={100} width={127} src={popularRing} alt="popularRing" />
      <p>Кольца</p>
    </div>
  );
};

export default Category;
