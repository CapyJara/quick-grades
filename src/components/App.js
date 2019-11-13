import React from 'react';
import Main from '../containers/Main';
import Header from './Header';
import styles from './app.css';

export default function App() {
  return (
    <section className={styles.app}>
      <Header />
      <Main />
    </section>
  );
}
  
