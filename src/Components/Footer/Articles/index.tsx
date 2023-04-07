import React from 'react';

import arrowTitle from '../../../assets/img/articles/arrowTitle.svg';
import article_1 from '../../../assets/img/articles/article_1.svg';
import article_2 from '../../../assets/img/articles/article_2.svg';
import article_3 from '../../../assets/img/articles/article_3.svg';
import article_4 from '../../../assets/img/articles/article_4.svg';

import styles from './Articles.module.scss';

const Articles = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Статьи</h2>
        <div className={styles.readAll}>
          <p>Читать все</p>
          <img src={arrowTitle} alt="arrowRight" />
        </div>
      </div>

      <div className={styles.articles}>
        <div className={styles.article}>
          <img src={article_1} alt="article_1" />
          <p>21 сентября 2023</p>
          <h5>Обручальные кольца: тренды 2023</h5>
        </div>
        <div className={styles.article}>
          <img src={article_2} alt="article_2" />
          <p>23 сентября 2023</p>
          <h5>Главные ювелирные тренды года</h5>
        </div>
        <div className={styles.article}>
          <img src={article_3} alt="article_3" />
          <p>25 сентября 2023</p>
          <h5>Жемчуг: 7 малоизвестных фактов о культовом украшении</h5>
        </div>
        <div className={styles.article}>
          <img src={article_4} alt="article_4" />
          <p>27 сентября 2023</p>
          <h5>Как отличить золото от подделки: 10 практических советов</h5>
        </div>
      </div>
    </div>
  );
};

export default Articles;
