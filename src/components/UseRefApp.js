import React, { useEffect, useRef, useState } from 'react'

function UseRefApp() {

   const [count, setCount] = useState(0);
   const prevCountRef = useRef(0);

   useEffect(() => {
    prevCountRef.current = count;
   },[count]);

  return (
    <div>
        <h2>Count : {count}</h2>
        <h3>Previous Count : {prevCountRef.current}</h3>
        <button onClick={() => setCount(count+1)}>Increment</button>
    </div>
  )
}

export default UseRefApp