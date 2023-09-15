import React, { useState } from 'react';
import Bored from '../assets/images/Bored.svg'

const BoredAPI = () => {
  const [activity, setActivity] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchActivity = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('https://www.boredapi.com/api/activity');
      const data = await response.json();

      if (response.ok) {
        setActivity(data.activity);
      } else {
        console.error('Error fetching data:', data);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="centered-container">
        <img src={Bored} alt="Bored Image" className='nasa-logo'/>
      <h1>Feeling Bored?</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>Here's an activity you can do:</p>
          <p>{activity}</p>
          <button onClick={fetchActivity}>Get Random Activity</button>
        </>
      )}
    </div>
  );
};

export default BoredAPI;