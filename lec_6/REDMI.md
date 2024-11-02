## Exporing The World 

- Monolith Architecture & Microservice Architecture
-  Use The Fetching Data From API And Use Those Data In Website For Rendering The restaurant Card
-  use for Fetchig when page loads and make call fetching data use 
-  useEffect() == is a function in javascript give 2 arguments ( callback , dependencies array);
-  if we need do Some work after rendering the component then we can pass in the useEffect Hook
-  We need to install `extension` of **CORS** in brower for fecth the api data otherwise is give cors error in console
  ---
## Monolith and Microservices Architectures :
  A monolithic architecture is a traditional approach where a single, self-contained unit of code handles all aspects of an application. In contrast, microservices architecture breaks down an application into multiple, independent services that communicate with each other through APIs.

**Design and Development**

* Monolithic: Single code base with multiple interdependent functions, requiring less planning at the start but becoming increasingly complex to understand and maintain.
* Microservices: Independent software components with autonomous functionality, requiring more planning and infrastructure at the start, but easier to manage and maintain over time.

**Deployment and Scaling**

* Monolithic: Entire application deployed as a single entity, with scaling limitations.
* Microservices: Each microservice is an independent software entity, requiring individual containerized deployment, and allowing for scalable and flexible scaling.

**Debugging and Modification**

* Monolithic: Tracing code paths in the same environment, with small changes introducing greater risks as they impact the entire code base.
* Microservices: Requires advanced debugging tools to trace data exchange between multiple microservices, with individual microservices allowing for modification without impacting the entire application.

**Operational Impact**

* Monolithic: Tightly coupled dependencies, difficulties deploying changes, and long release cycles.
* Microservices: Increased application complexity and convoluted testing, but allowing for faster innovation, high availability, and reliability.

**When to Use Each**

* Monolithic: Suitable for small to medium-sized applications with simple requirements, or when rapid prototyping is necessary.
* Microservices: Ideal for large-scale, complex applications with multiple teams and stakeholders, or when scalability, flexibility, and maintainability are critical.

**Transitioning from Monolithic to Microservices**

* Start by identifying independent functions and planning consistent APIs.
* Gradually extract modules from the monolith and convert them into services.
* Use the Strangler pattern to incrementally migrate functionality from the monolith to microservices.

**Real-World Examples**

* Amazon Prime Video's case study: Moving from microservices to monolith reduced infrastructure costs by 90% and increased scaling capabilities.
* Netflix's migration from monolithic to microservices architecture improved scalability and reduced technical debt.

**Best Practices**

* Plan carefully before starting a microservices migration.
* Use the Strangler pattern to incrementally migrate functionality.
* Focus on autonomous services with well-defined APIs.
* Monitor and optimize the system as a whole.

**Conclusion**

Monolithic and microservices architectures have distinct differences in design, development, deployment, and operational impact. While monolithic architectures are suitable for small applications, microservices are ideal for large-scale, complex systems. Understanding the trade-offs and best practices can help you choose the right approach for your project.

---
## Fetch API then-catch & asyn-await method :
In JavaScript, the `fetch` API is used to make HTTP requests (e.g., to fetch data from a server). It’s promise-based, meaning it returns a `Promise` that resolves to the response of the request. Here’s a step-by-step look at how to use `fetch` and handle the response, along with rendering data to a web page.

### 1. Basic Syntax of `fetch`

The basic syntax of the `fetch` function is:

```javascript
fetch(url, options)
  .then(response => {
    // handle response
  })
  .catch(error => {
    // handle error
  });
```

- `url`: The endpoint or URL you want to request.
- `options` (optional): An object with additional options like `method`, `headers`, and `body`.

### 2. Handling the `fetch` Promise

A `fetch` request returns a `Promise` that resolves to a `Response` object. To handle this, you can chain `.then()` and `.catch()` to process the response or handle errors.

#### Example: Fetching and Handling JSON Data

```javascript
fetch("https://api.example.com/data")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parse the JSON data from response
  })
  .then(data => {
    console.log(data); // Handle the data
  })
  .catch(error => {
    console.error("Fetch error:", error);
  });
```

In this example:
- `response.json()` converts the response to a JavaScript object.
- `.then(data => { ... })` lets you access the JSON data from the server.
- `.catch()` handles any network errors or rejections.

### 3. Rendering Data to the Page

To display the fetched data on the page, you can use JavaScript to dynamically create HTML elements and update the DOM.

#### Example: Fetch Data and Render to Page

Let's say you want to display a list of user names from an API.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fetch and Render Example</title>
</head>
<body>
  <div id="userList"></div>

  <script>
    // Fetch data from API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(users => {
        const userList = document.getElementById("userList");
        users.forEach(user => {
          const userElement = document.createElement("p");
          userElement.textContent = user.name;
          userList.appendChild(userElement);
        });
      })
      .catch(error => console.error("Error fetching users:", error));
  </script>
</body>
</html>
```

In this example:
- We fetch data from a placeholder API (`https://jsonplaceholder.typicode.com/users`).
- For each user, a `<p>` element is created, and `user.name` is added as the text content.
- Each `<p>` element is then appended to the `userList` container.

### 4. Handling Asynchronous Code with `async` / `await`

Using `async` and `await` can make the code cleaner and easier to read.

#### Example with `async` / `await`

```javascript
async function fetchAndRenderUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const users = await response.json();

    const userList = document.getElementById("userList");
    users.forEach(user => {
      const userElement = document.createElement("p");
      userElement.textContent = user.name;
      userList.appendChild(userElement);
    });
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

fetchAndRenderUsers();
```

### 5. Summary of Fetch Workflow

1. **Initiate fetch**: Make an HTTP request to the desired URL using `fetch(url)`.
2. **Handle the response**: Use `.then()` to process the `Response` object or use `await` in an async function.
3. **Parse the data**: Convert the response to JSON or another format.
4. **Render to the page**: Manipulate the DOM to display the data on the page.
5. **Error handling**: Use `.catch()` or a `try...catch` block to handle network or response errors.

Using `fetch` with promises or `async` / `await` provides a flexible way to retrieve and render data dynamically in a web application.

---
## The Way Fetching Data and render it on Page :
These terms—**fetch then render**, **fetch on render**, and **render as you fetch**—refer to different strategies for handling data fetching and rendering in applications, particularly in React. Here’s a breakdown of each strategy, when to use them, and how they work.

---

### 1. **Fetch Then Render**

In the **fetch then render** approach, you first fetch the data, wait for it to load, and then render the component with the data.

#### How It Works:
1. Initiate the data fetch in a `useEffect` or component lifecycle method.
2. Wait for the data to be fully fetched.
3. Render the component once the data is ready.

#### Example in React:
```javascript
import React, { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false); // Set loading to false once data is ready
      })
      .catch(error => console.error("Error fetching users:", error));
  }, []);

  if (loading) return <p>Loading...</p>; // Render a loading indicator

  return (
    <div>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
```

#### Pros:
- Simple and straightforward.
- Ensures data is fully ready before rendering.

#### Cons:
- Slower perceived performance, as the component waits until data fetching is complete.
- May block the entire component from rendering, impacting user experience.

---

### 2. **Fetch On Render**

**Fetch on render** starts fetching the data only once the component has been rendered initially, showing a loading indicator in the meantime.

#### How It Works:
1. Render the component with a placeholder or loading state.
2. Start fetching the data once the component is on the page.
3. Update the component with the data once it arrives.

This is often the default approach in React with `useEffect`.

#### Example:
```javascript
import React, { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Starts fetching only after initial render
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => console.error("Error fetching users:", error));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
```

#### Pros:
- Allows the component to render immediately, showing a loading state.
- Simple to implement in React with `useEffect`.

#### Cons:
- Slightly slower, as data fetching only starts after the initial render.
- Additional render cycle may slightly delay data presentation.

---

### 3. **Render As You Fetch**

**Render as you fetch** is an advanced approach where the data fetching and rendering begin simultaneously, reducing delays in showing content. This approach is commonly used in server-side rendering frameworks and with tools like React’s Suspense.

#### How It Works:
1. Start fetching the data before rendering the component, typically at the routing level.
2. As data loads, begin rendering components that depend on it.
3. Render components as data for them becomes available, potentially with `Suspense` and `React.lazy`.

#### Example with Suspense:
To achieve "render as you fetch" with Suspense, you could use libraries like React Query or Next.js’s `getServerSideProps`. Here’s a basic idea of how it could look:

```javascript
import React, { Suspense } from 'react';

const UserList = React.lazy(() => import('./UserList'));

function App() {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <UserList />
      </Suspense>
    </div>
  );
}
```

In this case:
- `React.lazy` allows lazy loading, only fetching the `UserList` component when it’s needed.
- `Suspense` provides a loading indicator while waiting for the component to load.

#### Pros:
- Faster perceived loading times, as components begin rendering as soon as they have data.
- Allows for more efficient, non-blocking UI updates.

#### Cons:
- More complex to set up, especially in client-rendered apps.
- Requires more setup and, potentially, integration with libraries or server-side rendering.

---

### Comparison of Approaches

| Approach           | When to Use                                                    | Pros                                   | Cons                                  |
|--------------------|-----------------------------------------------------------------|----------------------------------------|---------------------------------------|
| Fetch Then Render  | Simple applications with minor data dependencies               | Easy to implement                      | Slower perceived performance          |
| Fetch On Render    | When you want an immediate initial render with loading state   | Immediate visual feedback              | Slightly slower fetching              |
| Render As You Fetch| For optimized and complex data-fetching flows                  | Fastest perceived performance          | Complexity, setup required            |

---

### Summary

- **Fetch then render** is straightforward and useful for simple data-fetching needs, but it may delay initial render.
- **Fetch on render** allows the UI to display instantly, but it waits for the component to mount before fetching data.
- **Render as you fetch** is the most performant for large apps, enabling faster rendering but requiring more setup.

The choice depends on the complexity and performance requirements of your application.

---
## Sepration of concern and single resposiblity principle : 

**Separation of Concerns (SoC)** and the **Single Responsibility Principle (SRP)** are both fundamental concepts in software design aimed at creating cleaner, more maintainable code.

---

### 1. **Separation of Concerns (SoC)**

**Definition**: Separation of Concerns is a software design principle that advocates dividing a program into distinct sections, where each section addresses a specific aspect or concern of the program's functionality.

#### Key Concepts:
- **Modularity**: SoC encourages breaking down a program into smaller, independent modules where each module handles a specific "concern" (e.g., UI rendering, data access, business logic).
- **Loose Coupling**: By separating concerns, modules become less dependent on each other, which makes the code easier to maintain and modify without impacting unrelated areas.
- **Examples**:
  - In a web application, separating frontend and backend functionality is an example of SoC.
  - Within a frontend component, handling styling separately from JavaScript logic and data-fetching functions.
  
#### Benefits:
- **Easier Maintenance**: Changes to one concern don’t require changes to unrelated areas.
- **Scalability**: SoC allows development to scale better as different concerns can be developed in parallel.
- **Readability**: It’s easier for developers to understand and focus on a single aspect without being overwhelmed by unrelated code.

#### Example in JavaScript:
Imagine you’re building a simple to-do application. Here’s how SoC might apply:

```javascript
// Separate concerns for each module
// 1. Data Module - handles data
const TodoData = {
  todos: [],
  addTodo(todo) {
    this.todos.push(todo);
  }
};

// 2. UI Module - handles rendering
const TodoUI = {
  renderTodos(todos) {
    todos.forEach(todo => console.log(todo));
  }
};

// Usage: Data and UI are separate concerns
TodoData.addTodo("Learn Separation of Concerns");
TodoUI.renderTodos(TodoData.todos);
```

---

### 2. **Single Responsibility Principle (SRP)**

**Definition**: The Single Responsibility Principle states that a class or module should have only one reason to change. Essentially, it should only be responsible for one aspect of functionality or “reason to change.”

#### Key Concepts:
- **Focus on Purpose**: Each class or function should have a single, well-defined responsibility.
- **Encapsulation**: A class or module should encapsulate only the code related to its specific purpose.
- **Examples**:
  - A function that retrieves data from an API should only handle that responsibility and not perform unrelated tasks like manipulating the UI.
  - A "User" class in an application should only manage user data and not handle complex business logic unrelated to user data.

#### Benefits:
- **Simplifies Testing**: When a module has only one responsibility, it is easier to write focused tests.
- **Improved Readability**: Clear, purpose-specific functions or classes are easier to understand.
- **Reduced Risk of Errors**: Changes made to one responsibility won’t inadvertently impact other unrelated aspects of the application.

#### Example in JavaScript:
Consider a `User` class that follows SRP by only handling user-specific responsibilities:

```javascript
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  // Method that only updates the user's name
  updateName(newName) {
    this.name = newName;
  }
}

// Responsibility separated: data management is separate from logging
function logUserDetails(user) {
  console.log(`User: ${user.name}, Email: ${user.email}`);
}

const user = new User("Alice", "alice@example.com");
user.updateName("Alice Smith");
logUserDetails(user);
```

In this example:
- The `User` class is only responsible for managing user data.
- Logging functionality is handled by a separate function (`logUserDetails`), following SRP.

---

### Summary: Differences and Relationships

| Principle                         | Definition                                                                                     | Focus                        |
|-----------------------------------|-----------------------------------------------------------------------------------------------|------------------------------|
| Separation of Concerns (SoC)      | Dividing a program into sections where each handles a specific concern or aspect              | High-level organization      |
| Single Responsibility Principle (SRP) | Ensuring each class or function has only one reason to change or one responsibility          | Individual class or function |

#### How They Work Together:
- SoC guides the **overall structure** of a program, ensuring modules are separated by concern.
- SRP focuses on **specific modules** or classes within those concerns, ensuring each has a single responsibility.

Both principles are essential for clean, maintainable code and are often used together to keep systems modular, testable, and easy to understand.

---
## Q: cors policy ?

ANS : **Cross-Origin Resource Sharing (CORS)** is a security feature implemented by web browsers to prevent malicious websites from making unauthorized requests to other websites. CORS defines a protocol for how a server and client should communicate securely when making requests across different origins.

### What is CORS?

By default, web browsers restrict web pages from making requests to a different origin (domain, protocol, or port) than the one from which the web page originated. For example, if you have a web app hosted at `https://example.com`, it is typically not allowed to make requests to `https://another-domain.com` unless CORS permissions are in place.

### Why is CORS Important?

CORS prevents cross-origin attacks like Cross-Site Request Forgery (CSRF) by allowing servers to control which websites are permitted to access their resources. It ensures that only trusted websites or origins can make requests, protecting both user data and server resources from potential misuse.

### How CORS Works

When a browser makes a cross-origin request, CORS follows a set of rules:
1. **Simple Requests**: For requests that use safe HTTP methods (e.g., `GET`, `POST` without custom headers), the browser automatically includes an `Origin` header with the request. The server then responds with an `Access-Control-Allow-Origin` header specifying the allowed origin(s).
2. **Preflight Requests**: For requests with unsafe methods (like `PUT`, `DELETE`, custom headers, or when credentials are needed), the browser first sends an **OPTIONS request** (a "preflight") to ask the server if the request is allowed. The server must respond with CORS headers, and only if approved does the browser proceed with the actual request.

### Summary

- CORS restricts cross-origin requests for security purposes.
- The server must specify permitted origins, methods, and headers for cross-origin requests.
- CORS policy errors are resolved by setting the appropriate headers on the server-side to specify trusted origins and allowable methods, headers, and credentials.

----------------------------------------------------------------
## Q: Why do we need a `useEffect Hook`?

ANS: `useEffect Hook` is javascript function provided by `react`. The useEffect Hook allows you to `eliminate side effects` in your components. Some examples of side effects are: `fetching API data`, `directly updating the DOM`, and `setting up subscriptions or timers`, etc can be lead to unwarranted side-effects.
useEffect accepts `two arguments`, a `callback function` and a `dependency array`. The second argument is optional.

```
useEffect(() => {}, [])
```

The `() => {}` is callback function and `[]` is called a empty dependency array.
If anything that we pass (suppose currentState) inside the `[]` it trigger the callback function and changes the state of the application.

```
useEffect(() => {
    setCurrentState("true");
}, [currentState])
```

If we do not pass empty dependency array then the useEffect runs everytime when the UI is rendered.

```
useEffect(() => {})
```
---
## Q: What is `Optional Chaining`?

ANS: `Optional Chaining` (`?.`) operator accesses an object's property or calls a function. If the object accessed or function called is `undefined or null` , it returns `undefined` instead of throwing an error.
`Optional Chaining` (`?.`) is good way of accessing the object keys, it prevents the application from being crashed if the key that we are trying to access is not present. If the key is not present then instead of a throwing key error, it returns `undefined`.

---------------------------------------------
## Q: What is `Shimmer UI`?

ANS: A `Shimmer UI` resembles the page's actual UI, so users will understand how quickly the web or mobile app will load even before the content has shown up. It gives people an idea of what's about to come and what's happening (while UI currently loading) when a page full of content/data takes more than 3 - 5 seconds to load.
Shimmer UI is a great way for loading the applications. Instead of showing a loading circle we can design a shimmer UI for our application that is good for user experience.

---
## Q: What is the difference between `JS expression and JS statement`?

ANS: A `JS expression` returns a value that we use in the application. for example:

```
1 + 2 // expresses
"foo".toUpperCase() // expresses 'FOO'
console.log(2) // logs '2'
isTrue ? true : false // returns us a true or false value based on isTrue value
```

A `JS statement`, does not return a value. for example:

```
let x; // variable declaration
if () { } // if condition
```

If we want to use `JS expression` in JSX, we have to wrap in `{/* expression slot */}` and if we want to use `JS statement` in JSX, we have to wrap in `{(/* statement slot */)}`;

## Q: What is `Conditional Rendering`? explain with a code example.

ANS: `Conditional rendering` in React works the same way conditions work in `JavaScript`. Use JavaScript operators like `if` or the `conditional operator` to create elements representing the current state, and let React update the UI to match them. for example:

```
// Using Ternary operator as a shorthand way or writing an if-else statement
{isLoggedIn ? (return <UserGreeting />) : (return <GuestGreeting />)};
// Using an if…else Statement
{
  (if (isLoggedIn) {
    return <UserGreeting />;
  }else {
    return <GuestGreeting />;
  })
}
// Using Logical &&
{isLoggedIn && <button>Logout</button>}
```
---
## Q: What is the use of `const json = await data.json()`; in `getRestaurants()`?

ANS: The `data` object, returned by the `await fetch()`, is a generic placeholder for multiple data formats.
so we can extract the `JSON object` from a `fetch` response by using `await data.json()`.
`data.json()` is a method on the data object that lets you extract a `JSON object` from the data or response. The method returns a promise because we have used `await` keyword.
so `data.json()` returns a promise resolved to a `JSON object`.
