import React from 'react';

import logo from '../../../../assets/img/logo.svg';

import styles from './Logo.modules.scss';

const Logo: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
