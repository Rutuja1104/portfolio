import React, { useState, useEffect } from 'react';
import './CircularProgressBar.css'; // Import CSS file for styling

const CircularProgressBar = ({ value, animationDuration }) => {
  const [progress, setProgress] = useState(0);
  const [progressOffsets, setProgressOffsets] = useState(0);
  const [circumferences, setCircumferences] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  let radius = 110; // Adjust the radius of the circle for a larger circle
  let strokeWidth = 10; // Adjust the width of the ring
  let circumference = 2 * Math.PI * radius;
  let progressOffset = ((100 - progress) / 100) * circumference;

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
  };
  useEffect(() => {

    console.log('screenHeight',screenHeight);
    console.log('screenWidth',screenWidth);

    if(screenWidth<500){
       radius = 50; // Adjust the radius of the circle for a larger circle
       strokeWidth = 10; // Adjust the width of the ring
       circumference = 2 * Math.PI * radius;
       progressOffset = ((100 - progress) / 100) * circumference;
       setProgressOffsets(progressOffset)
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  window.addEventListener('resize', handleResize);

  useEffect(()=>{
    if(screenWidth<500){
      radius = 50; // Adjust the radius of the circle for a larger circle
      strokeWidth = 10; // Adjust the width of the ring
      circumference = 2 * Math.PI * radius;
      progressOffset = ((100 - progress) / 100) * circumference;
      setProgressOffsets(progressOffset)
   }
  },[screenHeight,screenWidth])

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
            strokeDashoffset: progressOffsets,
          }}
        />
      </svg>
      <div className="progress-text">{progress}%</div>
    </div>
  );
};

export default CircularProgressBar;
