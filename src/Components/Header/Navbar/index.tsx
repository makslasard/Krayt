import React from 'react';

import Cities from './Cities';
import Phone from './Phone';
import Logo from './Logo';
import Authorization from './Authorization';
import Panel from './Panel';

import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
  return (
    <div className={styles.container}>
      <Cities />
      <Phone />
      <Logo />
      <Authorization />
      <Panel />
    </div>
  );
};

export default Navbar;
