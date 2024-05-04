import React, { useState, useEffect } from 'react';
import './ProgressBar.css'; // Import CSS file for styling

const AnimatedProgressBar = ({ value, animationDuration }) => {
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      if (progressWidth < value) {
        setProgressWidth(progressWidth + 1);
      } else {
        clearInterval(progressInterval);
      }
    }, animationDuration / (value - progressWidth));

    return () => clearInterval(progressInterval);
  }, [progressWidth, value, animationDuration]);

  return (
    <div className="progress mb-1">
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${progressWidth}%` }}
        aria-valuenow={progressWidth}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {progressWidth}%
      </div>
    </div>
  );
};

export default AnimatedProgressBar;
