import React from 'react';

import Menu from './Menu';
import Search from './Search';

import styles from './Navigate.module.scss';

const Navigate = () => {
  return (
    <div className={styles.container}>
      <Menu />
      <Search />
    </div>
  );
};

export default Navigate;
