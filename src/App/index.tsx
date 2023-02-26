import React from 'react';

import Header from '../Components/Header';
import Main from '../Components/Main';
import Footer from '../Components/Footer';

import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.container}>
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
