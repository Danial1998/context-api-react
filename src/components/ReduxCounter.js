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


// Redux is a state management library that provides a predictable, centralized way to manage and share state across a React application. It addresses some key challenges of managing complex state in larger apps.

// The Problem Redux Solves:
// 1. Scattered State Management
// In a React application, state is typically managed in components using useState or useReducer. This works well for local state, but as the application grows, you may need to share state across multiple components. Without a centralized state management solution:

// State becomes scattered across multiple components.
// Sharing state involves prop drilling or lifting state up to the nearest common ancestor.
// Managing cross-component communication (e.g., one component needs to trigger a state change in another) becomes messy.
// 2. Prop Drilling
// Passing props through multiple intermediate components just to get the data to the right place is tedious and error-prone. For example:

// jsx
// Copy code
// <Parent>
//   <Child>
//     <Grandchild>
//       <ComponentThatNeedsState someProp={state} />
//     </Grandchild>
//   </Child>
// </Parent>
// 3. Complex State Updates
// For large applications, state logic becomes complex and difficult to maintain:

// Multiple components may need to update the same piece of state.
// Debugging becomes hard as the state changes are scattered across many components.
// 4. No Single Source of Truth
// Without a centralized store, it’s hard to keep track of the entire state of the application. This can lead to bugs where components fall out of sync.

// How Redux Solves These Problems
// Centralized State Management

// Redux uses a store to hold the entire application state in one place.
// Any component in the app can access the state without prop drilling.
// Single Source of Truth

// All state lives in the Redux store, making it easier to track, debug, and reason about.
// Predictable State Updates

// State updates are handled by pure functions called reducers.
// Each reducer specifies how the state changes in response to an action (a plain JavaScript object describing the change).
// Global Access via connect or Hooks

// Components can subscribe to the store and access only the pieces of state they need using hooks like useSelector or the connect function.
// Time Travel Debugging

// Redux dev tools allow you to inspect state, replay actions, and "time travel" through state changes.