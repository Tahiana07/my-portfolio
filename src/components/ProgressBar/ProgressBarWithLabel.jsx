import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// Composant de ProgressBar circulaire avec un label en dessous
const ProgressBarWithLabel = ({ percentage, label }) => {
  return (
    <div style={{ width: 120, margin: 'auto', textAlign: 'center' }}>
      {/* Cercle de progression */}
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          // Dégradé du contour
          pathColor: `rgba(3, 34, 76, ${percentage / 100})`,  /*rgba(62, 152, 199*/
          textColor: '#fff',
          trailColor: '#d6d6d6',
          backgroundColor: '#f0f0f0',
        })}
      />

      {/* Label sous le cercle */}
      <div style={{ marginTop: 10, fontSize: '16px', fontWeight: 'bold', color: '#fff' }}>
        {label}
      </div>
    </div>
  );
};

export default ProgressBarWithLabel;