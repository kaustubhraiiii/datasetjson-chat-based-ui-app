
import React from 'react';
import styles from './page.module.css';

const Page: React.FC = () => {
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>PatientView.io</h1>
      </div>
      
      <div className={styles.container1}>
        <h2 className={styles.title}>Graph</h2>
        <p></p>
      </div>

      <div className={styles.container2}>
        <h2 className={styles.title}>Inputs</h2>
        <p></p>
      </div>
    </div>
  );
};

export default Page;
