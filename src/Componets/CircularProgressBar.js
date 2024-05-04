import React, { useState, useEffect } from 'react';
import './CircularProgressBar.css'; // Import CSS file for styling

const CircularProgressBar = ({ value, animationDuration }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      if (progress < value) {
        setProgress(progress + 1);
      } else {
        clearInterval(progressInterval);
      }
    }, animationDuration / (value - progress));

    return () => clearInterval(progressInterval);
  }, [progress, value, animationDuration]);

  const radius = 110; // Adjust the radius of the circle for a larger circle
  const strokeWidth = 10; // Adjust the width of the ring
  const circumference = 2 * Math.PI * radius;
  const progressOffset = ((100 - progress) / 100) * circumference;

  return (
    <div className="circular-progress mb-4">
      <svg className="progress-ring" width={radius * 2} height={radius * 2}>
        <circle
          className="progress-ring-circle"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius - strokeWidth / 2}
          cx={radius}
          cy={radius}
        />
        <circle
          className="progress-ring-progress"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius - strokeWidth / 2}
          cx={radius}
          cy={radius}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: progressOffset,
          }}
        />
      </svg>
      <div className="progress-text">{progress}%</div>
    </div>
  );
};

export default CircularProgressBar;
