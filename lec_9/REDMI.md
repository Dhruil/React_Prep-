# Episode 09 - Optimising our App

making the custom hooks for single reponsibility principle
only one component have to do only one work at a time

making lazy loading for large application

in parcel we have the functionality of bundling a make one file to give server,
but the file size should be lower
to make the file to smaller we are make differnt module of this file
Example : In Swigy website swigy provide the food odering and insta mart option.
we already build the food odering app , for instamart we make onther component and it's import in the react or app file lazy

## Q:Custom Hooks
ANS : Custom hooks in React allow you to **extract and reuse logic** across different components. They enable you to encapsulate complex functionality in a modular way, making your components more readable and maintaining a separation of concerns. Custom hooks are regular JavaScript functions that can use React hooks like `useState`, `useEffect`, and others internally.

### Key Points About Custom Hooks:
1. **Naming Convention**: Custom hooks always start with the word `use`, like `useFetch`, `useLocalStorage`, etc. This is important because React relies on this naming convention to ensure proper hook rules.
2. **Reuse Logic**: You can share stateful logic across components without changing the component hierarchy.
3. **Encapsulation**: Custom hooks can encapsulate logic, making your components cleaner and easier to understand.

### Basic Structure of a Custom Hook

A custom hook is a JavaScript function that can use React hooks. It can return any value: state, functions, or even other hooks.

```javascript
import { useState, useEffect } from 'react';

// Custom Hook: useCounter
function useCounter(initialCount = 0) {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(initialCount);

  // Returning state and functions
  return { count, increment, decrement, reset };
}

export default useCounter;
```

#### Using `useCounter` in a Component

```javascript
import React from 'react';
import useCounter from './useCounter';

function CounterComponent() {
  const { count, increment, decrement, reset } = useCounter(10);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterComponent;
```

### Example Use Cases for Custom Hooks

1. **Fetching Data (useFetch)**:
   You can create a custom hook to encapsulate data-fetching logic, making it reusable in any component that needs to fetch data.

```javascript
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
```

**Usage:**

```javascript
import React from 'react';
import useFetch from './useFetch';

function UserList() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserList;
```

2. **LocalStorage Management (useLocalStorage)**:
   A custom hook can simplify working with local storage, allowing you to read and write to local storage directly in a reusable way.

```javascript
import { useState } from 'react';

function useLocalStorage(key, initialValue) {
  const storedValue = localStorage.getItem(key);
  const [value, setValue] = useState(storedValue ? JSON.parse(storedValue) : initialValue);

  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue];
}

export default useLocalStorage;
```

**Usage:**

```javascript
import React from 'react';
import useLocalStorage from './useLocalStorage';

function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <h1>Current theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemeToggle;
```

### When to Use Custom Hooks

- **Code Reusability**: If you find yourself duplicating logic across multiple components, consider creating a custom hook.
- **Encapsulating Complex Logic**: Complex logic, like data fetching, forms, or event listeners, can be neatly encapsulated in custom hooks.
- **Separation of Concerns**: Custom hooks allow you to separate concerns from your components, making your components more focused on UI rendering.
- **Testing**: Custom hooks can be tested independently, which makes it easier to write unit tests for your application.

### Guidelines for Creating Custom Hooks

1. **Do not use hooks inside conditions**: Custom hooks should always be called unconditionally, just like React’s built-in hooks. This is because hooks must be called in the same order each time the component renders.
   
   ```javascript
   // Bad Example
   if (someCondition) {
     useEffect(() => { ... });
   }
   ```

2. **Use hooks for reusable logic only**: If the logic doesn’t need to be shared across multiple components, consider keeping it inside the component instead of making it a custom hook.

3. **Return values to be used in components**: Custom hooks should return values that the component can use. This may include state, functions, or other hooks.

4. **Use proper names**: Always start your custom hook's name with the word `use` to ensure it follows React’s rules for hooks.

### Conclusion

Custom hooks are a powerful feature in React that allow you to abstract and reuse logic across different components. By using custom hooks, you can keep your components clean and maintainable, especially when dealing with complex logic like data fetching, form handling, or local storage. Custom hooks allow for better separation of concerns, improved code reusability, and a more modular structure in React applications.

---
## Q: When and why do we need `lazy()`?
In React, `React.lazy()` is a built-in method that allows developers to defer loading a component's code until it's first rendered. This technique is called `lazy` loading and it can help improve the loading time of an application by reducing the amount of JavaScript needed to render a route. Lazy loading can also result in a better user experience.

---

## Q: Why we got this `error`: A component was suspended while responding to `synchronous input`. This will cause the `UI` to be replaced with a `loading indicator`. To `fix this`, `updates that suspend` should be wrapped with `start transition`? How does `suspense fix` this error?
The error message you're encountering suggests that a React component suspended while handling synchronous input, which triggers a loading state in the UI. This happens because React's Suspense mechanism is designed to manage asynchronous operations gracefully, but synchronous operations can't be paused or retried as easily without additional help.

Here’s how Suspense can help fix this issue:

### Understanding the Error
1. **Synchronous Input and Suspense**: React Suspense is primarily designed to handle asynchronous operations such as data fetching and lazy loading of components. When a component suspends during synchronous input handling (like user events or initial render), React doesn't have a built-in way to manage this suspension smoothly.
2. **Loading Indicator Triggered**: When a component suspends during synchronous input handling, React replaces the UI with a loading indicator. This is because React doesn't know how to retry or handle the suspension in the context of synchronous events.

### How Suspense Fixes This
To address this issue and allow React to handle synchronous suspensions gracefully, you can wrap the updates that might suspend (such as state updates or event handlers) with `startTransition` from React. Here’s how it helps:
- **`startTransition`**: This function is a part of the React concurrent mode API. It allows you to mark a synchronous update as transitional, meaning that React can prioritize rendering updates differently when synchronous tasks are involved.
- **Defer Rendering**: By using `startTransition`, you inform React that the following updates are not critical to the immediate UI response. React can then defer rendering updates triggered by these transitions until the main thread is free, reducing the likelihood of a synchronous suspension causing a loading state to be displayed.

### Example Usage

```jsx
import { startTransition } from 'react';

function handleClick() {
  startTransition(() => {
    // Synchronous state update that might suspend
    // Perform your state update or other synchronous operation here
  });
}
```

### Summary
The error message you're seeing indicates that a component suspended during synchronous input handling, which causes React to show a loading indicator. To prevent this and allow React to handle suspensions more gracefully:
- Identify synchronous operations that might suspend (like state updates).
- Wrap these operations with `startTransition` to indicate to React that they are transitional and can be deferred if necessary.
By using `startTransition`, you enable React to manage these suspensions more effectively, ensuring a smoother user experience without unnecessary loading indicators triggered by synchronous suspensions.

---

## Q: `Advantages and Disadvantages` of using this `code splitting pattern`?
Code splitting is a technique used in web development, particularly in modern JavaScript frameworks like React, to improve performance by splitting your code into smaller bundles that can be loaded on demand. Here are the advantages and disadvantages of using code splitting:

### Advantages:

1. **Faster Initial Load Times**: Code splitting reduces the size of the initial JavaScript bundle that needs to be downloaded by the client. This results in faster initial page load times because only essential code is loaded upfront, and additional code is fetched as needed.
2. **Improved Performance**: Smaller initial bundles mean faster parsing and execution times for the JavaScript code that is immediately required for rendering the initial UI. This can lead to improved perceived performance and user experience.
3. **Efficient Resource Utilization**: Code splitting allows resources (such as JavaScript files) to be loaded only when they are needed. This can reduce unnecessary bandwidth usage and server load, especially for larger applications with many components.
4. **Optimized Caching**: Smaller bundles are more likely to be cached by the browser, improving subsequent page loads and reducing server requests. Cached bundles can be reused across multiple sessions or pages within the same session.
5. **Scalability**: Code splitting facilitates easier management and scaling of large applications by organizing code into logical units (chunks or modules). This modular approach can improve code maintainability and developer productivity.

### Disadvantages:

1. **Complexity**: Implementing and managing code splitting can introduce complexity into the build process and development workflow. Developers need to ensure that code splitting is correctly implemented and maintained across different parts of the application.
2. **Increased Initial Setup Overhead**: Setting up code splitting initially requires effort to configure correctly, especially in complex applications with multiple entry points and dependencies. This setup might involve configuring tools like Webpack or using built-in features of modern frameworks like React.lazy and Suspense.
3. **Potential for Overhead**: While code splitting reduces initial load times, dynamically fetching additional code when needed can introduce slight overhead due to network latency and additional HTTP requests. Careful optimization and caching strategies can mitigate this issue.
4. **Compatibility Concerns**: Code splitting relies on modern JavaScript features and browser capabilities. Older browsers or certain configurations might not fully support code splitting or may require additional polyfills or fallback strategies.
5. **Debugging and Testing**: Debugging and testing code-split applications can be more challenging compared to monolithic applications, especially when tracking down issues related to module loading, dependency resolution, or dynamic imports.

---
## Q: When `do we and why do we need suspense`?
**Suspense** in the context of React is a mechanism introduced to handle asynchronous operations such as data fetching and code splitting in a more declarative and intuitive way. Here’s when and why we need Suspense:

### When Do We Need Suspense?

1. **Data Fetching**: When fetching data asynchronously, Suspense allows components to suspend rendering until the data is ready. This prevents the need for complex state management or loading state handling within components.

2. **Code Splitting**: In large applications, splitting code into smaller chunks (lazy loading) is essential for optimizing initial load times. Suspense provides a declarative way to manage loading states and handle component transitions seamlessly.

3. **Nested Loading States**: When components have nested asynchronous dependencies (e.g., fetching data for nested routes), Suspense can coordinate the loading states and ensure a smooth user experience without manual state management.

### Why Do We Need Suspense?

1. **Declarative Syntax**: Suspense introduces a declarative way to handle loading states and asynchronous operations in React components. Instead of managing loading states with additional state variables or libraries, Suspense allows you to wrap asynchronous operations directly in your components.

2. **Simpler Code**: By encapsulating loading state management within Suspense boundaries, you can avoid complex state management patterns (like loading flags or conditional rendering) in your components. This leads to cleaner and more maintainable code.

3. **Better User Experience**: Suspense helps in improving the perceived performance of your application by managing loading states more gracefully. Users experience smoother transitions between loading and fully rendered states without abrupt changes or flickering.

4. **Integration with Concurrent Mode**: Suspense is designed to work seamlessly with React's Concurrent Mode, which prioritizes updates to provide a more responsive user interface. Concurrent Mode combined with Suspense enables more efficient rendering and resource allocation.
5. **Future-Proofing**: As React evolves, Suspense is becoming more integral to handling various asynchronous scenarios within the framework. Embracing Suspense early ensures your codebase aligns with best practices and future improvements in React.

### Example Use Cases:

- **Data Fetching Example**: Suppose you have a component that fetches user data from an API. Instead of managing loading states and error handling manually, you can use `Suspense` and `React.lazy` to handle the loading and error states gracefully:

  ```jsx
  import React, { Suspense } from 'react';

  const UserProfile = React.lazy(() => import('./UserProfile'));

  function App() {
    return (
      <div>
        <Suspense fallback={<LoadingSpinner />}>
          <UserProfile />
        </Suspense>
      </div>
    );
  }
  ```

- **Code Splitting Example**: When lazy loading components for better performance, Suspense allows you to specify a fallback UI while the component is being fetched:

  ```jsx
  import React, { Suspense } from 'react';

  const LazyComponent = React.lazy(() => import('./LazyComponent'));

  function App() {
    return (
      <div>
        <Suspense fallback={<LoadingSpinner />}>
          <LazyComponent />
        </Suspense>
      </div>
    );
  }
  ```

In summary, Suspense is crucial in React applications for managing asynchronous operations and improving the user experience by simplifying loading state handling and ensuring smoother transitions between different states of your application.

---