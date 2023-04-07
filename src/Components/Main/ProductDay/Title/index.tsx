import React from 'react';

import Timer from './Timer';

import styles from './Title.module.scss';

const Title = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>Кольцо из золота c бриллиантами</h3>
        <p>Артикул: 1012076</p>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.price}>
          <p>22 000 P</p>
          <span>35 000 P</span>
          <div className={styles.sale}>
            <p>-45%</p>
          </div>
        </div>
        <Timer />
      </div>
      <div className={styles.line} />
    </div>
  );
};

export default Title;
