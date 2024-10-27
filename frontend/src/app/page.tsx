"use client"; 

import React, { useState } from 'react';
import styles from './page.module.css';
import DataDisplayComponent from '../components/DataDisplay';

const displayMode='Line'

const Page: React.FC = () => {
  const [fileUploaded, setFileUploaded] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Perform file validation or parsing here if needed
      console.log("File uploaded:", file.name);
      setFileUploaded(true);
    }
  };

  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>PatientView.io</h1>
      </div>

      
      <div className={styles.container1}>
        <h2 className={styles.heading}>Visualization</h2>
        <DataDisplayComponent displayMode={displayMode}/>
        <p></p>
      </div>

      <div className={styles.container2}>
        <p>Upload your Dataset JSON v1.1 file:</p>
        <input 
          type="file"
          accept=".json"
          id="fileInput"
          className={styles.fileInput}
          onChange={handleFileChange}
        />
        <button
          className={styles.customFileButton}
          onClick={() => document.getElementById("fileInput").click()}
        >
          Choose File
        </button>
        {fileUploaded && (
        <div className={styles.buttonContainer}>
          <button className={styles.roundButton}>Button 1</button>
          <button className={styles.roundButton}>Button 2</button>
          <button className={styles.roundButton}>Button 3</button>
          <button className={styles.roundButton}>Button 4</button>
        </div>
        )}
      </div>
    </div>
  );
};

export default Page;
