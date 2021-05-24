import React, { useState, useEffect } from 'react';

function Counter() {

  const [count, setCount] = useState(0);

  // similar to componentDidMount in class component
  /*useEffect(() => {
   document.title = `Counter ${count}`;
  });*/
  useEffect(() => {
    document.title = `Counter ${count}`;
  }, [count]); // this will help boost performance as the Hook will compare if current value == pre value
  // react will skip the Effect

  return (
    <div>
    <h3>Your counter: {count}</h3>
    <button onClick={() => setCount(count + 1)}>Count me!</button>
    </div>
  );

}

export default Counter;