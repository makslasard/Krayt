import React from 'react';

import phone from '../../../../assets/img/phone.svg';

import styles from './Phone.module.scss';

const Phone: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src={phone} alt="phone" />
      <p>8 800 785-25-35</p>
    </div>
  );
};

export default Phone;
