import React, { useState, useEffect } from 'react';
import './index.css'
const App = () => {
  const [time1, setTime1] = useState(5);
  const [time2, setTime2] = useState(10);
  const [time3, setTime3] = useState(20);


  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);

  const handleClick1= () => {
    setClicked1(true);
  };
  const handleClick2 = () => {
    setClicked2(true);
  };
  const handleClick3 = () => {
    setClicked3(true);
  };

  useEffect(() => {
    let intervalId;

    if (clicked1) {
      intervalId = setInterval(() => {
        time1==0?setClicked1(false):setTime1(time1-1)
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [clicked1, time1]);

  

  useEffect(() => {
    let intervalId;

    if (clicked2) {
      intervalId = setInterval(() => {
        time2==0?setClicked2(false):setTime2(time2-1)
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [clicked2, time2]);
 


  useEffect(() => {
    let intervalId;

    if (clicked3) {
      intervalId = setInterval(() => {
        time3==0?setClicked3(false):setTime3(time3-1)
      }, 1000);
    }
   return () => clearInterval(intervalId);
  }, [clicked3, time3]);


  return (
    <div className='btn'>

        <div className='btn1'>
          <p>Current Time: {time1}</p>
          <button onClick={handleClick1} >
            {clicked1 ? 'Processing...' : 'Render Minutes to 0'}
          </button>

          <div>
          <button onClick={()=>setTime1(5)}>Reset</button>
          </div>
          
        </div>
      
        <div className='btn2'>
          <p>Current Time: {time2}</p>
          <button onClick={handleClick2} >
            {clicked2 ? 'Processing...' : 'Render Minutes to 0'}
          </button>

         <div>
          <button onClick={()=>setTime2(10)}>Reset</button>
          </div>
        </div>
     
      <div className='btn3'>
        <p>Current Time: {time3}</p>
        <button onClick={handleClick3} >
          {clicked3 ? 'Processing...' : 'Render Minutes to 0'}
        </button>
        <div>
        <button onClick={()=>setTime3(20)}>Reset</button>
        </div>
      </div>

    </div>
  );
};

export default App;