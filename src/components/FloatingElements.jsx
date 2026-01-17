import React from 'react';
import { Badge } from 'react-bootstrap';

const FloatingElements = () => {
  const floatingElements = [
    { 
      icon: 'fa-heart', 
      color: 'danger', 
      top: '10%', 
      left: '5%',
      animation: 'float 6s ease-in-out infinite',
      size: '30px'
    },
    { 
      icon: 'fa-star', 
      color: 'warning', 
      top: '20%', 
      right: '10%',
      animation: 'float 8s ease-in-out infinite 1s',
      size: '25px'
    },
    { 
      icon: 'fa-code', 
      color: 'primary', 
      top: '40%', 
      left: '3%',
      animation: 'float 7s ease-in-out infinite 0.5s',
      size: '35px'
    },
    { 
      icon: 'fa-bolt', 
      color: 'danger', 
      bottom: '30%', 
      right: '8%',
      animation: 'float 9s ease-in-out infinite 2s',
      size: '28px'
    },
    { 
      icon: 'fa-rocket', 
      color: 'info', 
      bottom: '20%', 
      left: '7%',
      animation: 'float 5s ease-in-out infinite 1.5s',
      size: '32px'
    },
    { 
      icon: 'fa-gem', 
      color: 'success', 
      top: '15%', 
      right: '5%',
      animation: 'float 10s ease-in-out infinite 0.2s',
      size: '22px'
    },
  ];

  return (
    <div style={{ position: 'fixed', width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}>
      {floatingElements.map((element, index) => (
        <div
          key={index}
          className={`text-${element.color}`}
          style={{
            position: 'absolute',
            top: element.top,
            left: element.left,
            right: element.right,
            bottom: element.bottom,
            fontSize: element.size,
            animation: element.animation,
            opacity: 0.3
          }}
        >
          <i className={`fas ${element.icon}`}></i>
        </div>
      ))}
      
      {/* Animated border effects */}
      <div 
        className="position-absolute rounded-circle border border-primary"
        style={{
          top: '50%',
          left: '90%',
          width: '200px',
          height: '200px',
          animation: 'pulse 4s ease-in-out infinite',
          opacity: 0.1
        }}
      ></div>
      <div 
        className="position-absolute rounded-circle border border-danger"
        style={{
          top: '30%',
          left: '85%',
          width: '150px',
          height: '150px',
          animation: 'pulse 3s ease-in-out infinite 1s',
          opacity: 0.1
        }}
      ></div>
    </div>
  );
};

export default FloatingElements;