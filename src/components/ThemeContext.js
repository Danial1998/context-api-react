import React,{createContext,useState,useContext} from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme == 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;

// ### EXPLANATION FROM CHAT GPT ### Problem + Solution

// The Context API in React is a tool for sharing state (data) across the component tree 
// without having to pass props manually at every level. It solves the "prop drilling" problem, 
// where data needs to be passed down multiple layers of components through props, even if only 
// the deeply nested components need it.

// Simple Example:
// Imagine you are building an app where you need to show the current theme (e.g., "light" or "dark") in multiple places. Without the Context API, you would need to pass the theme as a prop through every component in the hierarchy, even if they don’t use it.

// The Problem: Prop Drilling
// jsx


// function App() {
//   const theme = "dark";

//   return (
//     <Parent theme={theme} />
//   );
// }

// function Parent({ theme }) {
//   return (
//     <Child theme={theme} />
//   );
// }

// function Child({ theme }) {
//   return <div>The theme is {theme}</div>;
// }
// Here, the theme prop is passed from App -> Parent -> Child. 
// Even though only Child needs it, Parent also has to handle it.


// Solution: Context API
// The Context API allows us to provide the theme value at a higher level and consume it directly in Child, skipping the intermediate components.

// Create a Context:

// jsx
// Copy code
// import React, { createContext } from "react";

// const ThemeContext = createContext();
// Provide the Value: Use the Provider component to wrap your tree and pass the value you want to share.

// jsx
// Copy code
// function App() {
//   const theme = "dark";

//   return (
//     <ThemeContext.Provider value={theme}>
//       <Parent />
//     </ThemeContext.Provider>
//   );
// }
// Consume the Value: Use the useContext hook or the Consumer component to access the shared value.

// jsx
// Copy code
// import React, { useContext } from "react";

// function Child() {
//   const theme = useContext(ThemeContext); // Access theme directly
//   return <div>The theme is {theme}</div>;
// }

// function Parent() {
//   return <Child />;
// }
