import React from 'react';

import Basket from './Basket';
import Favourites from './Favourites';
import Statistics from './Statistics';

import styles from './Panel.module.scss';

const Panel: React.FC = () => {
  return (
    <div className={styles.container}>
      <Favourites />
      <Statistics />
      <Basket />
    </div>
  );
};

export default Panel;
