import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement} from '../redux/actions/CounterActions'

function ReduxCounter() {

   const count = useSelector((state) => state.counter);
   const dispatch = useDispatch();

  return (
    <div>
        <h2>Count : {count}</h2>
        <button onClick={() => dispatch(increment())} >+</button>
        <button onClick={() => dispatch(decrement())} >-</button>
        <br></br>
        <h2>Count Copy : {count} </h2>
        <button onClick={() => dispatch(increment())}>+ again</button>
    </div>
  )
}

export default ReduxCounter