import React, { useCallback, useState } from 'react'

function useCallbackExample() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count+1);
  },[]);

  return (
    <div>
        <h2>Count : {count}</h2>
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default useCallbackExample