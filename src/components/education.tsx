"use client"
import React from 'react';

const EducationTimeline: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '200px', borderLeft: '4px solid white', paddingLeft: '20px', position: 'relative' }}>
        {/* CGPA Node */}
        <div style={{ marginBottom: '40vh', position: 'relative' }}>
          <div style={hollowNodeStyle}></div>
          <div style={textStyle}>
            <h2 style={headingStyle}>Current CGPA</h2>
            <p style={valueStyle}>8.35</p>
          </div>
        </div>

        {/* 12th Percentage Node */}
        <div style={{ marginBottom: '40vh', position: 'relative' }}>
          <div style={hollowNodeStyle}></div>
          <div style={textStyle}>
            <h2 style={headingStyle}>12th Percentage</h2>
            <p style={valueStyle}>96.2%</p>
          </div>
        </div>

        {/* 10th Percentage Node */}
        <div style={{ position: 'relative' }}>
          <div style={hollowNodeStyle}></div>
          <div style={textStyle}>
            <h2 style={headingStyle}>10th Percentage</h2>
            <p style={valueStyle}>92.6%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Styles for hollow nodes and timeline
const hollowNodeStyle: React.CSSProperties = {
  width: '15px',
  height: '15px',
  border: '3px solid white',
  borderRadius: '50%',
  backgroundColor: 'white',
  position: 'absolute',
  left: '-30px',
  top: '5px',
};

const textStyle: React.CSSProperties = {
  color: 'white',
  lineHeight: '1.5',
};

const headingStyle: React.CSSProperties = {
  margin: '0',
  fontSize: '18px',
};

// New style for percentages and CGPA values
const valueStyle: React.CSSProperties = {
  fontSize: '24px', // Increase font size
  fontWeight: 'bold', // Make the text bold
};

export default EducationTimeline;
