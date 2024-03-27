import React from 'react';
import html2canvas from 'html2canvas';

const screenShot = () => {
  const takeScreenshot = () => {
    // Assume you want to capture the whole body for simplicity
    html2canvas(document.body).then((canvas) => {
      // Create an image from the canvas
      const base64image = canvas.toDataURL("image/png");
      // For example, you can open the image in a new tab like this
      window.open(base64image, '_blank');
    });
  };

  return (
    <button onClick={takeScreenshot}>Take Screenshot</button>
  );
};

export default screenShot;