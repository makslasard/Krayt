import React from 'react';

import styles from './Categories.module.scss';
import Category from './Category';

const Categories: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2>Популярные категории</h2>
      <div className={styles.wrapper}>
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </div>
  );
};

export default Categories;
