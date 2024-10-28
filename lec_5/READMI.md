## Clean Code
- 1. make src folder and move the react.js file and update the path of script in index.html
- 2. creat seprate file to structure the project to easy to build and maintain the code use the components diff file to easy to maintain the code . It's not recommanded by react.
- 3. Creat a diff file for each component and give name  of file as Component name for easy identification
- 4. mostly component name first letter is capital use this convetion in this code
- 5. Many developer give component name as .js || .jsx both are same as at the and but follow only one extension of file entire project joureny
- 6. need to export the component and import where we need to use the component
  Two Types of export named and default export
  can we use this two export in same time in same func to export ?
- 7. Never keep hard coded data in main component file make onther comman folder utils where we can keep all comman data
- also comman file have lowercase file name
## React Hooks 
  
  - 1. we creating a button which use for filtering the resturant which have top rating 
  - 2. noraml javascript utility function
There are multiple Hooks in React But Most Of the time We use Only this Two;
importing as Named Import
- useState()
- useEffect()
- whenever state variable change react re-render the component

---
## React export and Types Of export and import can we use two export in same file to export
In React (and JavaScript in general), **export** and **import** are used to share and use code across files. There are two main types of exports in JavaScript: **default exports** and **named exports**. Each type has specific use cases and rules.

### 1. Default Export

A **default export** allows a single export from a file, and it can be imported without specifying the exact name in the importing file.

#### Syntax

```javascript
// Default export in file (e.g., MyComponent.js)
export default MyComponent;

// Importing default export (can be any name)
import MyComponent from './MyComponent';
```

#### Key Points
- A file can have only one default export.
- When importing, you can use any name for the imported component, function, or value.

### 2. Named Export

**Named exports** allow multiple exports from the same file. These are exported with specific names and must be imported using the exact name.

#### Syntax

```javascript
// Named exports in file (e.g., utils.js)
export const helperFunction = () => { /* function code */ };
export const anotherFunction = () => { /* function code */ };

// Importing named exports
import { helperFunction, anotherFunction } from './utils';
```

#### Key Points
- A file can have multiple named exports.
- When importing, you must use the exact name of the exported item.
- Named exports can also be imported with an alias using `as`.

### Can We Use Both Named and Default Exports in the Same File?

Yes, you can have both a **default export** and **named exports** in the same file. This can be helpful if you want to export one main item as a default (e.g., a main component) and additional helper functions or constants as named exports.

#### Example

```javascript
// myComponent.js

// Default export
const MyComponent = () => {
  return <div>My Component</div>;
};
export default MyComponent;

// Named exports
export const helperFunction = () => {
  console.log("Helper Function");
};

export const anotherHelper = "Some value";
```

#### Importing Both in Another File

You can import both the default and named exports from the same file:

```javascript
import MyComponent, { helperFunction, anotherHelper } from './myComponent';

function App() {
  helperFunction(); // calls the helper function
  console.log(anotherHelper); // logs "Some value"
  return <MyComponent />;
}

export default App;
```
## can we use one function export default and named ?
No, in JavaScript you **cannot export the same function as both a default export and a named export in a single declaration**. However, you can create a workaround by declaring the function separately and then exporting it in two ways.

Here's how it can be done:

### 1. Declare the Function

Define the function first, then export it as both a **default export** and a **named export**.

```javascript
// myFunction.js

// Declare the function
function myFunction() {
  console.log("This is my function!");
}

// Export as default and named
export default myFunction;
export { myFunction };
```

### 2. Importing Both

In another file, you can import the function using either the default import or the named import:

```javascript
// Importing default and named exports
import myFunc from './myFunction'; // default import
import { myFunction } from './myFunction'; // named import

// Both myFunc and myFunction refer to the same function
myFunc(); // This is my function!
myFunction(); // This is my function!
```

### Why Use Both?

Although technically possible, using both is generally avoided because it can make the code harder to understand and maintain. However, it can sometimes be useful if:
- You want to provide flexibility for importing.
- You're refactoring legacy code and want to support multiple ways of importing temporarily.

### Summary

While you can’t export the same function as both default and named in a single line, you can declare the function separately and export it both ways afterward.
### Summary of Types of Export and Import

| Export Type     | Can Use Only One? | Import Syntax                              | Import Alias    |
|-----------------|-------------------|--------------------------------------------|-----------------|
| Default Export  | Yes               | `import Name from './file'`                | Any name        |
| Named Export    | No                | `import { name } from './file'`            | `name as alias` |
| Mixed Export    | No                | `import Default, { name1, name2 }`         | Default, Exact names with alias options |

### Best Practices

- **Use default exports** for the primary item or component in a file, as it’s clear and easy to import.
- **Use named exports** for multiple functions, constants, or other components that a file provides alongside the primary component.
- **Avoid multiple default exports** within the same file (JavaScript will prevent this anyway).
- **Combine both** only when it makes sense, like when exporting a main component along with helper functions or constants related to it.
---
## React Hooks 
React Hooks are functions that let you **use state and other React features in functional components** (as opposed to class components). Introduced in React 16.8, Hooks allow you to manage component state, side effects, and more, making code more modular and easier to read. Here’s an overview of some commonly used Hooks in React:

### 1. `useState` Hook

The `useState` Hook lets you add state to a functional component. It returns an array with two elements: the **current state value** and a **function to update it**.

#### Syntax

```javascript
const [state, setState] = useState(initialValue);
```

#### Example

```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### 2. `useEffect` Hook

The `useEffect` Hook allows you to perform **side effects** in your component, such as fetching data, manually changing the DOM, or setting up subscriptions. It runs after every render by default but can be controlled with **dependencies** to run conditionally.

#### Syntax

```javascript
useEffect(() => {
  // Side effect logic here
  return () => {
    // Cleanup code here (optional)
  };
}, [dependencies]);
```

#### Example

```javascript
import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds(seconds => seconds + 1), 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Empty dependency array ensures this runs only once

  return <p>Elapsed time: {seconds} seconds</p>;
}
```

### 3. `useContext` Hook

The `useContext` Hook lets you **access the nearest context value** directly in a component without needing to wrap it with a `Context.Consumer`.

#### Syntax

```javascript
const value = useContext(MyContext);
```

#### Example

```javascript
import React, { useContext } from 'react';

const ThemeContext = React.createContext('light');

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button style={{ background: theme === 'dark' ? '#333' : '#FFF' }}>Themed Button</button>;
}
```

### 4. `useReducer` Hook

`useReducer` is an alternative to `useState` for managing **more complex state logic** or multiple related states. It’s particularly useful in scenarios where state transitions depend on previous state values.

#### Syntax

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

#### Example

```javascript
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}
```

### 5. `useRef` Hook

The `useRef` Hook allows you to **persist a value between renders** without causing a re-render. It’s often used to access DOM elements or to keep mutable values without triggering re-renders.

#### Syntax

```javascript
const refContainer = useRef(initialValue);
```

#### Example

```javascript
import React, { useRef } from 'react';

function TextInput() {
  const inputRef = useRef(null);

  const focusInput = () => inputRef.current.focus();

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```

### 6. `useMemo` Hook

The `useMemo` Hook **memoizes a computed value** to avoid recalculating it on every render. It’s useful for expensive calculations that don’t need to be recalculated unless their dependencies change.

#### Syntax

```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

#### Example

```javascript
import React, { useMemo, useState } from 'react';

function FibonacciCalculator({ num }) {
  const fibonacci = (n) => (n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2));

  const fibValue = useMemo(() => fibonacci(num), [num]);

  return <p>Fibonacci of {num} is {fibValue}</p>;
}
```

### 7. `useCallback` Hook

The `useCallback` Hook **memoizes a function**, allowing it to be reused without re-creation unless its dependencies change. This is particularly useful when passing callbacks to child components that rely on shallow comparison (e.g., in `React.memo`).

#### Syntax

```javascript
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

#### Example

```javascript
import React, { useState, useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount(count + 1), [count]);

  return (
    <div>
      <ChildComponent onClick={increment} />
      <p>Count: {count}</p>
    </div>
  );
}

const ChildComponent = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Increment</button>;
});
```

### Summary of Common Hooks

| Hook           | Purpose                                         |
|----------------|-------------------------------------------------|
| `useState`     | Add state to functional components              |
| `useEffect`    | Perform side effects (e.g., data fetching)      |
| `useContext`   | Access context values                           |
| `useReducer`   | Manage complex state logic                      |
| `useRef`       | Access DOM elements and persist values          |
| `useMemo`      | Memoize a value to avoid expensive recalculation|
| `useCallback`  | Memoize a callback function                     |

---
## Q.1 We initialise the usestate with const then how it changes happends
ANS : In React, when you initialize `useState` with `const`, it doesn't mean the state itself is constant; it simply means the **reference to the array returned by `useState` cannot be reassigned**. Here’s how it works:

### How `useState` Works

When you call `useState`, React gives you two things in an array:
1. **The current state value**.
2. **A function to update that state**.

```javascript
const [count, setCount] = useState(0);
```

- `count` holds the **current state value**.
- `setCount` is a **function** that lets you update `count`.

### Why `const` Works with `useState`

Even though you use `const`, **the actual value of `count` can still change** because:
- When you call `setCount(newValue)`, React **doesn’t directly mutate `count`**.
- Instead, React will **re-render the component with a new state value** for `count` on the next render.

Here's a step-by-step breakdown:

1. **Initial Render**:
   - `useState(0)` initializes `count` with `0`.
   - The component renders with `count` set to `0`.

2. **Updating the State**:
   - When `setCount(1)` is called, React schedules an update to `count`.
   - React then re-renders the component with `count` now set to `1`.

3. **Re-render with New State**:
   - On each render, React provides a **new value for `count`** based on the last update.
   - The reference to `[count, setCount]` remains constant, but the **state value inside changes**.

### Example

```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1); // React will re-render with updated count
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

### Why React Avoids Direct Mutation

In React, **directly mutating variables** does not trigger re-renders. By using `useState` and calling `setCount`, React can internally track and manage changes to the state, ensuring that the component re-renders with the latest data. This way, the state value can change even though we’ve used `const`, as React effectively **provides a new state value on every render** based on the updates applied by `setCount`.

So, while the `const` reference remains the same, React manages state changes internally to keep the UI in sync with the latest state.

---
## Q.2 Difference between `Virtual DOM` and `Real DOM`?
ANS : DOM stands for `Document Object Model`, which represents your application UI and whenever the changes are made in the application, this DOM gets updated and the user is able to visualize the changes. DOM is an interface that allows scripts to update the content, style, and structure of the document.

- `Virtual DOM`
  - The Virtual DOM is a light-weight abstraction of the DOM. You can think of it as a copy of the DOM, that can be updated without affecting the actual DOM. It has all the same properties as the real DOM object, but doesn’t have the ability to write to the screen like the real DOM.
  - Virtual DOM is just like a blueprint of a machine, can do the changes in the blueprint but those changes will not directly apply to the machine.
  - Reconciliation is a process to compare and keep in sync the two files (Real and Virtual DOM). Diffing algorithm is a technique of reconciliation which is used by React.
- `Real DOM`
  - The DOM represents the web page often called a document with a logical tree and each branch of the tree ends in a node and each node contains object programmers can modify the content of the document using a scripting language like javascript and the changes and updates to the dom are fast because of its tree-like structure but after changes, the updated element and its children have to be re-rendered to update the application UI so the re-rendering of the UI which make the dom slow all the UI components you need to be rendered for every dom update so real dom would render the entire list and not only those item that receives the update .

| `Real DOM`                                                       | `Virtual DOM`                                            |
| ---------------------------------------------------------------- | -------------------------------------------------------- |
| DOM manipulation is very expensive                               | DOM manipulation is very easy                            |
| There is too much memory wastage                                 | No memory wastage                                        |
| It updates Slow                                                  | It updates fast                                          |
| It can directly update HTML                                      | It can’t update HTML directly                            |
| Creates a new DOM if the element updates.                        | Update the JSX if the element update                     |
| It allows us to directly target any specific node (HTML element) | It can produce about 200,000 Virtual DOM Nodes / Second. |
| It represents the UI of your application                         | It is only a virtual representation of the DOM           |

---
## Q: What is `React Fiber`?
ANS: React Fiber is a concept of ReactJS that is used to render a system faster, smoother and smarter.
The Fiber reconciler, which became the default reconciler for React 16 and above, is a complete rewrite of React’s reconciliation algorithm to solve some long-standing issues in React.
Because Fiber is asynchronous, React can:

- Pause, resume, and restart rendering work on components as new updates come in
- Reuse previously completed work and even abort it if not needed
- Split work into chunks and prioritize tasks based on importance
---
## Q.4 What is `Reconciliation` in React?
ANS: `Reconciliation` is the process through which React updates the Browser DOM and makes React work faster. React use a `diffing algorithm` so that component updates are predictable and faster. React would first calculate the difference between the real DOM and the copy of DOM (Virtual DOM) when there's an update of components.
React stores a copy of Browser DOM which is called `Virtual DOM`. When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one. Comparison is done by `Diffing Algorithm`.
React compares the Virtual DOM with Real DOM. It finds out the changed nodes and updates only the changed nodes in Real DOM leaving the rest nodes as it is. This process is called Reconciliation.

                                 (or)

Reconciliation is the process by which React updates the UI to reflect changes in the component state. The reconciliation algorithm is the set of rules that React uses to determine how to update the UI in the most efficient way possible. React uses a virtual DOM (Document Object Model) to update the UI.

---
## Q.5 What is `Diff Algorithm` ?

The **diff algorithm** is a fundamental part of React’s reconciliation process. It enables React to quickly detect changes between the previous and new virtual DOM and determine which elements need updating in the real DOM.

#### How React’s Diff Algorithm Works:
1. **Element-by-Element Comparison**: React compares nodes from the old and new trees at the same level (rather than recursively comparing the entire trees).
2. **Key-Based Comparison**: For lists, React uses "keys" to identify which items have changed, allowing it to add, remove, or reorder list items efficiently.
3. **Assumptions for Efficiency**:
   - Elements of different types produce different DOM structures, so React removes and re-renders them instead of trying to update them.
   - Keys enable precise tracking of elements in lists, reducing the chance of unnecessary re-renders.

Overall, this algorithm helps React make the update process more efficient, only applying the necessary changes to the DOM.

---
### Summary of Each Concept’s Role

1. **React Fiber**: React’s new architecture for smooth, prioritized rendering, making the UI more responsive.
2. **Reconciliation**: React’s process of comparing the new virtual DOM with the old one to efficiently update the real DOM.
3. **Diff Algorithm**: The method used to find the minimum differences between the previous and new virtual DOM.
4. **Virtual DOM vs. Real DOM**: The virtual DOM is a lightweight copy of the real DOM, allowing React to optimize UI updates without directly manipulating the real DOM until necessary.

These mechanisms work together to improve performance, creating a smoother experience for users in React applications.