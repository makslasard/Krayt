import React from 'react';
import Banner from './Banner';
import Categories from './Categories';

import styles from './Main.modules.scss';
import ProductDay from './ProductDay';
import Sales from './Sales';

const Main = () => {
  return (
    <div className={styles.container}>
      <Banner />
      <Categories />
      <Sales />
      <ProductDay />
    </div>
  );
};

export default Main;
