"use client"; 

import React, { useState } from 'react';
import styles from './page.module.css';
import DataDisplayComponent from '../components/DataDisplay';

const displayMode='Line'

const Page: React.FC = () => {
  const [fileUploaded, setFileUploaded] = useState(false);
  const [parameters, setParameters] = useState<string[]>([])

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('http://localhost:3001', {
           // Update to your backend URL
          method: 'POST',
          body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Uploaded parameters:", data);
        setParameters(Object.keys(data.data));
        setFileUploaded(true);
        // Use parsed data from backend
      } else {
        console.error("File upload failed.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  } else {
    alert("Please upload a valid JSON file.");
  }
};

  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>PatientView.io</h1>
      </div>

      
      <div className={styles.container1}>
        <h2 className={styles.title}>Graph</h2>
        <DataDisplayComponent displayMode={displayMode} />
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
            {parameters.map((param, index) => (
              <button key={index} className={styles.roundButton}>
                {param}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
