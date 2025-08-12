
import React from 'react';
import styles from './MainContainer.module.css';

const MainContainer = ({ children }: { children: React.ReactNode }) => (
  <main className={styles['main-container']}>
    {children}
  </main>
);

export default MainContainer;
