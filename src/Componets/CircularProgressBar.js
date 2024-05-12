import React, { useState, useEffect } from "react";
import "./CircularProgressBar.css"; // Import CSS file for styling

const CircularProgressBar = ({ value, animationDuration }) => {
  const [progress, setProgress] = useState(0);
  const [circleRadius, setCircleRadius] = useState(0);
  const [circleStrokeWidth, setCircleStrokeWidth] = useState(0);

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

  useEffect(() => {
    if ( window.innerWidth < 500) {
      let radius = 50;
      let strokeWidth = 5;
      setCircleRadius(radius);
      setCircleStrokeWidth(strokeWidth);
    } else {
      let radius = 110; 
      let strokeWidth = 10; 
      setCircleRadius(radius);
      setCircleStrokeWidth(strokeWidth);
    }
  }, [window.innerWidth, window.innerHeight]);

  return (
    <div className="circular-progress mb-4">
      <svg
        className="progress-ring"
        width={circleRadius * 2}
        height={circleRadius * 2}
      >
        <circle
          className="progress-ring-circle"
          strokeWidth={circleStrokeWidth}
          fill="transparent"
          r={circleRadius - circleStrokeWidth / 2}
          cx={circleRadius}
          cy={circleRadius}
        />
        <circle
          className="progress-ring-progress"
          strokeWidth={circleStrokeWidth}
          fill="transparent"
          r={circleRadius - circleStrokeWidth / 2}
          cx={circleRadius}
          cy={circleRadius}
          style={{
            strokeDasharray: 2 * Math.PI * circleRadius,
            strokeDashoffset: ((100 - progress) / 100) * (2 * Math.PI * circleRadius),
          }}
        />
      </svg>
      <div className="progress-text">{progress}%</div>
    </div>
  );
};

export default CircularProgressBar;
