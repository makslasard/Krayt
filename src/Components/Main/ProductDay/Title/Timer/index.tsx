import React from 'react';

import styles from './Timer.module.scss';

const Timer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hours}>
        <span>12</span>
        <p>часов</p>
      </div>
      <div className={styles.separator}>
        <p>:</p>
      </div>
      <div className={styles.minutes}>
        <span>46</span>
        <p>минут</p>
      </div>
      <div className={styles.separator}>
        <p>:</p>
      </div>
      <div className={styles.seconds}>
        <span>51</span>
        <p>секунд</p>
      </div>
    </div>
  );
};

export default Timer;
