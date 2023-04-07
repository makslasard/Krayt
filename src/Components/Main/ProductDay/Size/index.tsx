import React from 'react';

import info from '../../../../assets/img/productDay/info.svg';

import styles from './Size.module.scss';

const Size = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h4>Размер</h4>
        <img src={info} alt="info" />
      </div>
      <div className={styles.sizes}>
        <div className={styles.active}>
          <p>16,5</p>
        </div>
        <div className={styles.size}>
          <p>17</p>
        </div>
        <div className={styles.size}>
          <p>17,5</p>
        </div>
        <div className={styles.size}>
          <p>18</p>
        </div>
        <div className={styles.size}>
          <p>18,5</p>
        </div>
        <div className={styles.size}>
          <p>19</p>
        </div>
        <div className={styles.size}>
          <p>19,5</p>
        </div>
        <div className={styles.size}>
          <p>20</p>
        </div>
        <div className={styles.size}>
          <p>20,5</p>
        </div>
        <div className={styles.end}>
          <p>21</p>
        </div>
        <div className={styles.end}>
          <p>21,5</p>
        </div>
      </div>
    </div>
  );
};

export default Size;
