import React, { useState } from 'react'

function Counter () {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count+1);
    };

    return(
        <div>
            <h1>Welcome to my Counter</h1>
            <input type={'number'} value={count}>
            </input>
            <button className='btn btn-primary' onClick={incrementCount}>Increment Counter</button>
        </div>
    );
}

export default Counter;