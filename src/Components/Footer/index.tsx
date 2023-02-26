import React from 'react';
import Articles from './Articles';

import styles from './Footer.modules.scss';

const Footer = () => {
  return (
    <div className={styles.container}>
      <Articles />
    </div>
  );
};

export default Footer;
