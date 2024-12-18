# Let's get Classy

- 1. we Created class and we need to import form react 
- 2. We have render() Method for return a component in Class based
### class based componet life cycle : 

- 1. call the constructor (parent)
-  2. call the render method  (parent)
-  3. call the child Constructor (child 1);
-  4. call the render method (child 1);
-    if we have Two Child then 
-    5. call the child Constructor (child 2);
-    6. call the render method (child 2);
-    7. call the componentDidMount (child 1);
-    8. call the componentDidMount (child 2);
-    9. call the componentDidMount (parent);
-   Explaination Metioned On Book 
-   

Life Cycle Of Class Based Component ;
mounting --> updating --> UnMounting
- 1. Constructor
- 2. render() method
- 3. Dom Is Updated 
- 4. componentDidMount
- 5. state Variabale Changes 
- 6. Dom Is Updated
- 7. componentDidUpdate
- 8. UnMounting Phase
- 9. componentWillUnmout

### For more reference [React-Lifecycle-methods-Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

## Q: Why do we use `componentDidMount`?

ANS: The `componentDidMount()` method allows us to execute the React code when the component is already placed in the DOM (Document Object Model). This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered.
Wwe can run any piece of react code to modify the components. For ex. It's the best place to `make API calls`.

## Q: Why Do WE Use `componentDidUpdate`?
ANS:componentDidUpdate() is a lifecycle method in React class components that is called immediately after the component and its children have been updated due to a change in state or props. This method is not called for the initial render.

`useEffect` We pass Dependecy array when array chenge then only the useEffect is Called.
hence in This We Are checking the previous state and then updating the dom or making the things;
```
componentDidUpdate(prevProps, prevState) {
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}
```

## Q: Why do we use `componentWillUnmount`? Show with example.

ANS: `componentWillUnmount()` is useful for the cleanup of the application when we switch routes from one place to another. Since we are working with a SPA(Single Page Application) the component process always runs in the background even if we switch to another route. So it is required to stop those processes before leaving the page. If we revisit the same page, a new process starts that affects the browser performance.
For example, in Repo class, during `componentDidMount()` a timer is set with an interval of every one second to print in console. When the component is unmounted (users moves to a different page), the timer will be running in the background, which we might not even realize and causing huge performance issue. To avoid such situations the cleanup function can be done in componentWillUnmount, in this example `clearInterval`(timer) to clear the timer interval before unmounting Repo component.

## Q: (Research) Why do we use `super(props)` in constructor?

ANS: `super(props)` is used to inherit the properties and access of variables of the React parent class when we initialize our component.
super() is used inside constructor of a class to derive the parent's all properties inside the class that extended it. If super() is not used, then Reference Error : Must call super constructor in derived classes before accessing 'this' or returning from derived constructor is thrown in the console.
The main difference between super() and super(props) is the this.props is undefined in child's constructor in super() but this.props contains the passed props if super(props) is used.
````
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.timerId = null; // Initialize the interval ID
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      // Update state or perform some action
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId); // Stop the interval
  }

  render() {
    // ...
  }
}
````
If you’re using React Hooks (e.g., **useEffect**), you can use the return function to clean up the interval. For example:
```
import { useEffect } from 'react';

function MyComponent() {
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update state or perform some action
    }, 1000);
    setIntervalId(intervalId);
    return () => clearInterval(intervalId); // Clean up the interval
  }, []);

  return <div>...</div>;
}
```

## Q: (Research) we can use componentDidMount return as aync but in useEffect hook we not return async why ?

ANS: In React, the `componentDidMount` lifecycle method and the `useEffect` hook serve similar purposes for running code after a component mounts. However, they handle asynchronous logic differently due to the constraints of JavaScript functions and the design of `useEffect`.

### 1. **componentDidMount and Async**

In `componentDidMount`, you can mark the function as `async`, allowing you to use `await` directly inside it. This works because `componentDidMount` is a synchronous function, and React expects it to complete without requiring a return cleanup function (it doesn’t return anything by default). 

```javascript
class MyComponent extends React.Component {
  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }
  // ...
}
```

### 2. **useEffect Hook and Async Functions**

In contrast, `useEffect` expects **either nothing or a cleanup function** to be returned, and React runs the cleanup function whenever the component unmounts or before re-running the effect. Returning a promise (which is what an `async` function implicitly does) would break this expectation. Since React doesn’t wait for promises in `useEffect`, using `async` directly in `useEffect` is not allowed.

#### Example of `useEffect` with Async Logic

Instead of making `useEffect` itself `async`, you can define an async function inside the effect and then call it.

```javascript
import React, { useEffect, useState } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/data');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
}
```

### Why We Don’t Return an Async Function in `useEffect`

1. **React’s Expected Behavior**: `useEffect` expects a cleanup function or nothing in return, and React uses this cleanup function to handle unmounting or dependencies updating. Returning a promise from `useEffect` doesn’t match this expectation and would lead to issues.

2. **Async Handling Best Practice**: By defining an async function inside `useEffect` and calling it, you keep the effect’s cleanup mechanism intact, allowing React to manage it properly.

3. **Consistent Design**: This pattern is recommended to keep React effects synchronous, avoiding race conditions or unexpected behavior due to unawaited promises.

### Summary

You can’t mark `useEffect` itself as `async` because it would return a promise, which React can’t handle as a cleanup function. Instead, place async logic inside an inner function in `useEffect`, and call that function immediately within the hook.

