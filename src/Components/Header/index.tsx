import React from 'react';

import Navbar from './Navbar';
import Navigate from './Navigate';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Navigate />
    </div>
  );
};

export default Header;
