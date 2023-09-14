import React, { useState, useEffect } from 'react';

function ImageComponent() {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    // Replace 'http://localhost:3000/image' with the actual URL of your Express server endpoint
    const imageUrl = 'http://localhost:3000/image';

    // Fetch the image from the Express server
    fetch(imageUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then((blob) => {
        // Create a URL for the image blob
        const imageUrl = URL.createObjectURL(blob);
        setImageData(imageData);
      })
      .catch((error) => {
        console.error('Error fetching image:', error);
      });

    return () => {
      // Clean up by revoking the object URL when the component unmounts
      if (imageData) {
        URL.revokeObjectURL(imageData);
      }
    };
  }, []);

  return (
    <div>
      {imageData && <img src={imageData} alt="Image Description" />}
      {!imageData && <p>Loading image...</p>}
    </div>
  );
}

export default ImageComponent;
