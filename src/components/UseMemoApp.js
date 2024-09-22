import React, { useMemo, useState } from 'react'

function expensiveSum(a,b){
    let sum = a+b;
    return sum;
}

function UseMemoApp() {
  
  const [a, setA] = useState(1);
  const [b, setB] = useState(1);
  const [count, setCount] = useState(0);  

  const memoizedValue = useMemo(()=> expensiveSum(a,b));

  return (
    <div>
        <h2>Expensive value : {memoizedValue}</h2>
        <button onClick={() => setA(a+1)}>Increment A</button>
        <button onClick={() => setB(b+1)}>Increment B</button>
        <button onClick={() => setCount(count+1)}>Increment count</button>
    </div>
  )
}

export default UseMemoApp