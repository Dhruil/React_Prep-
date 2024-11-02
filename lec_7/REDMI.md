# Episode 07 - Finding the Path

## Q: What are various ways to `add images` into our App? Explain with `code examples`.

A: Using the `full URL of the image` for the web (CDN) or any public images.
Example :

```
<img src="https://reactjs.org/logo-og.png" alt="React Image" />
```

Adding the image into the project
`Drag your image into your project` and `import it` into the desired component

```
import reactLogo from "./reactLogo.png";
export default function App() {
  return <img src={reactLogo} alt="react logo" />
}
```

The correct way to structure images in your project is to add them in an `images` folder. If you are using other `assets` than just images, you might want to add all in the `assets` folders.

```
import reactLogo from "../../assets/images/reactLogo.png";
export default function App() {
  return <img src={reactLogo} alt="react logo" />
}
```
----
## Q: What would happen if we do `console.log(useState())`?

A: If we do `console.log(useState())`, we get an array `[undefined, function]` where first item in an array is `state` is `undefined` and the second item in an array is `setState` `function` is bound dispatchSetState.

---
## Q: How will `useEffect` behave if we `don't add` a `dependency array`?

A: Syntax of `useEffect` is:

```
useEffect(() => {}, []);
```

Case 1 : When the `dependency array is not included` in the arguments of `useEffect() hook`, the callback function will be executed `every time` the component is rendered and re-rendered.

```
useEffect(() => {
	console.log("I run everytime this component rerenders")
});
```

Case 2 : When the `dependency array is empty` in the arguments of `useEffect() hook`, the callback function will be executed `only one time` during the initial render of the component.

```
useEffect(() => {
	console.log("I Only run once (When the component gets mounted)")
}, []);
```

Case 3 : When the `dependency array contains a condition`, the callback function will be executed `one time` during the initial render of the component and also rerender if there is a `change in the condition`.

```
useEffect(() => {
	console.log("I run every-time when my condition changed")
}, [condition]);
```
---
## Q: What is `SPA`?

A: `Single Page Application (SPA)` is a web application that dynamically updates the webpage with data from web server without reloading/refreshing the entire page. All the HTML, CSS, JS are retrieved in the initial load and other data/resources can be loaded dynamically whenever required. An SPA is sometimes referred to as a `single-page interface (SPI)`.

---
## Q: What is the difference between `Client Side Routing` and `Server Side Routing`?

A: In `Server-side routing or rendering (SSR)`, every change in URL, http request is made to server to fetch the webpage, and replace the current webpage with the older one.

In `Client-side routing or rendering (CSR)`, during the first load, the webapp is loaded from server to client, after which whenever there is a change in URL, the router library navigates the user to the new page without sending any request to backend. All `Single Page Applications uses client-side routing`.

----------------------------------------------------------------
## Q: react-router-dom
ANS:**React Router DOM** is a library in React that allows for routing and navigation between different views or pages in a single-page application (SPA). It provides tools to create dynamic routes, manage history, and handle navigation, so users can navigate seamlessly without refreshing the entire page.

### Installation

To use React Router DOM in a React application, install it via npm:

```bash
npm install react-router-dom
```

### Key Concepts and Components

1. **BrowserRouter**: The top-level component that wraps your entire app to enable routing.
2. **Routes**: A component used to define route configurations and match URLs to different components.
3. **Route**: Each `Route` specifies a path and the component to render for that path.
4. **Link**: A component that provides navigation without reloading the page.
5. **useNavigate**: A hook to programmatically navigate between routes.
6. **useParams**: A hook to access URL parameters.
7. **useLocation**: A hook to access the current route location.

### Example Setup

Below is a simple example to help understand how `react-router-dom` works.
1. **Define the Router using `createBrowserRouter`.**
2. **Render the Router at the root using `RouterProvider`.**

Here's how to set up a basic routing structure using `createBrowserRouter` and render it in your application root.

### 1. Install React Router DOM (if you haven’t already)

```bash
npm install react-router-dom
```

### 2. Define the Router in `App.js` (or a similar main file)

In this example, we’ll create routes for `Home`, `About`, `Contact`, and `NotFound` pages.

```javascript
// App.js
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Create the router with route definitions
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

function App() {
  return (
    // Use RouterProvider to render the defined router
    <RouterProvider router={router} />
  );
}

export default App;
```

### 3. Render the App in `index.js` (or similar entry file)

Make sure your `App` component is rendered at the root. This file should look similar to this:

```javascript
// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### 4. Define Page Components

Create each component in a `pages` directory (or your preferred location).

**Home.js**
```javascript
import React from 'react';

function Home() {
  return <h1>Welcome to the Home Page</h1>;
}

export default Home;
```

**About.js**
```javascript
import React from 'react';

function About() {
  return <h1>About Us</h1>;
}

export default About;
```

**Contact.js**
```javascript
import React from 'react';

function Contact() {
  return <h1>Contact Page</h1>;
}

export default Contact;
```

**NotFound.js**
```javascript
import React from 'react';

function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

export default NotFound;
```

### Explanation

- **`createBrowserRouter`**: Defines the routes, each with a path and component.
- **`RouterProvider`**: Wraps the `router` object and renders it as the application’s main routing system.
- **404 Handling**: Using `path: '*'` in the router setup provides a catch-all route that displays a custom 404 page if no route matches.

This setup gives you a fully functional, centralized routing structure using React Router’s `createBrowserRouter`.

---
## Q:  how to make dynamic routes?
ANS: create dynamic routes using `createBrowserRouter` along with route components like `Link`, `Outlet`, and `useParams`.

### Step-by-Step Implementation

1. **Define Dynamic Routes using `createBrowserRouter`**.
2. **Access Dynamic Route Parameters using `useParams`**.
3. **Use Components like `Link`, `Outlet`, `useNavigate`, and `useParams` for navigation and rendering.**
  
In React Router, **`Outlet`** and **`useParams`** are two essential tools for working with nested routes and accessing dynamic route parameters, respectively.

###  1.**`useParams` Hook**

The `useParams` hook is used to access **dynamic URL parameters**. When you define a route with a dynamic segment (e.g., `/users/:id`), `useParams` allows you to access the value of `:id` within that component.

#### Example: Using `useParams` to Access Route Parameters

Let’s say we want to view details of a specific user on a `UserDetail` page by passing their ID in the URL.

**Step 1**: Define a dynamic route with `:id`.

```javascript
const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/users/:id', element: <UserDetail /> }, // Dynamic route with "id" parameter
]);
```

**Step 2**: Use `useParams` in the `UserDetail` component to retrieve the `id` parameter from the URL.

```javascript
// UserDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

function UserDetail() {
  const { id } = useParams(); // Access the "id" parameter from the URL

  return (
    <div>
      <h1>User Detail Page</h1>
      <p>User ID: {id}</p>
      {/* Use the ID to fetch and display user-specific data here */}
    </div>
  );
}

export default UserDetail;
```

In this example:

- **Dynamic Route**: `/users/:id` captures any `id` value from the URL.
- **`useParams`**: Extracts the `id` parameter so you can use it in your component (e.g., to fetch data based on the user ID).

---


### 2. **`Outlet` Component**

The `Outlet` component is used to render child routes inside a parent route. It allows you to create **nested routing** structures, where a layout or common component wraps around other pages.

#### Example: Setting up Nested Routes with `Outlet`

Imagine an application with a **Users** page that has nested routes for **User Profile** and **User Settings**. Here’s how you would set this up:

**Step 1**: Define the router with nested routes using `createBrowserRouter`.

```javascript
// App.js
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout';
import Users from './pages/Users';
import UserProfile from './pages/UserProfile';
import UserSettings from './pages/UserSettings';

const router = createBrowserRouter([
  {
    path: '/users',
    element: <Layout />, // Parent component for nested routes
    children: [
      { path: '', element: <Users /> }, // Default Users page
      { path: 'profile', element: <UserProfile /> }, // Nested Profile route
      { path: 'settings', element: <UserSettings /> }, // Nested Settings route
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
```

**Step 2**: Create the `Layout` component and use `Outlet` to render the child components.

```javascript
// Layout.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <h1>User Dashboard</h1>
      <nav>
        <Link to="profile">Profile</Link> | <Link to="settings">Settings</Link>
      </nav>
      <Outlet /> {/* Render child components here */}
    </div>
  );
}

export default Layout;
```

In this setup:

- **`Layout` Component**: Acts as a parent component that provides a layout for child routes.
- **`Outlet`**: Renders the matched child route component based on the nested path (like `/users/profile` or `/users/settings`).
- **`Link`**: Provides navigation to each nested route.

When you navigate to `/users/profile`, the `UserProfile` component will render within the `Layout`, and similarly for `/users/settings` with `UserSettings`.

---
### Summary
- **`Outlet`**: Used in parent components to render nested child routes, ideal for layouts that wrap around specific page sections.
- **`useParams`**: A hook that retrieves dynamic parameters from the route, enabling you to use route-specific information like `id` for API calls or displaying specific data. 

Using these tools, you can create complex and organized routing structures in React applications.

---
## Q: React router dom useNavigate useLocation and Link components and other componets :
ANS:In React Router, **`useNavigate`**, **`useLocation`**, **`Link`**, and other components provide essential navigation and routing utilities to manage route transitions, track the URL state, and handle links without reloading the page. Let’s go through each one and explore other useful React Router components.

### 1. `useNavigate`

`useNavigate` is a hook that allows you to **programmatically navigate** to different routes. It’s useful for cases where you want to redirect users based on a condition, such as after form submission, or when a user is unauthorized.

#### Example Usage of `useNavigate`

```javascript
import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the About page
    navigate('/about');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleClick}>Go to About Page</button>
    </div>
  );
}

export default HomePage;
```

- **Navigate with State**: You can pass state data with `navigate`.

  ```javascript
  navigate('/profile', { state: { userId: 123 } });
  ```

- **Navigate Back and Forward**: Use numbers to navigate history.

  ```javascript
  navigate(-1); // Go back
  navigate(1);  // Go forward
  ```

### 2. `useLocation`

`useLocation` is a hook that provides access to the **current location object**. It contains information like `pathname`, `search` (query string), and `state`. This is helpful for accessing and displaying the current URL or reading the data passed via state.

#### Example Usage of `useLocation`

```javascript
import React from 'react';
import { useLocation } from 'react-router-dom';

function ProfilePage() {
  const location = useLocation();

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Current URL: {location.pathname}</p>
      <p>State Data: {location.state?.userId}</p>
    </div>
  );
}

export default ProfilePage;
```

- **`pathname`**: Path of the URL (e.g., `/profile`).
- **`search`**: Query string parameters, which can be parsed if needed.
- **`state`**: Data passed via `navigate()` or `<Link>` components.

### 3. `Link`

The `Link` component is the primary way to navigate between routes in React Router. Unlike a traditional anchor (`<a>`), `Link` does not reload the page, providing a **smooth client-side navigation** experience.

#### Example Usage of `Link`

```javascript
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
    </nav>
  );
}

export default Navigation;
```

- **Pass State**: Like `navigate`, `Link` can also pass state data.

  ```javascript
  <Link to="/profile" state={{ userId: 123 }}>Go to Profile</Link>
  ```

### 4. `NavLink`

`NavLink` is similar to `Link` but is used to apply **active styles** automatically to the link when it matches the current route. It’s useful for navigation menus to highlight the current page.

#### Example Usage of `NavLink`

```javascript
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <NavLink to="/" end>Home</NavLink> | {/* "end" ensures exact match */}
      <NavLink to="/about" activeClassName="active">About</NavLink>
    </nav>
  );
}

export default Navbar;
```

In this example:

- The `activeClassName` prop allows you to style the active link. Alternatively, you can use `isActive` to conditionally apply styles.

### 5. `Outlet`

`Outlet` is a component used for **nested routing**. It serves as a placeholder for child routes inside a parent route, enabling layouts that wrap around specific pages.

#### Example Usage of `Outlet`

```javascript
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <nav>
        <Link to="/dashboard">Dashboard</Link> | <Link to="/dashboard/settings">Settings</Link>
      </nav>
      <Outlet /> {/* Render child routes here */}
    </div>
  );
}

export default Layout;
```

### 6. `Routes` and `Route`

`Routes` and `Route` are core components in React Router that define the routing structure of your application. **`Routes`** is the container, while **`Route`** defines individual paths and components to render.

#### Example Usage of `Routes` and `Route`

```javascript
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Layout from './pages/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/dashboard/*" element={<Layout />}>
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
```

### 7. `Navigate`

`Navigate` is a component that provides declarative redirection. It’s useful for cases like protecting routes based on conditions (e.g., requiring authentication).

#### Example Usage of `Navigate`

```javascript
import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;
```

### Summary of Core Components and Hooks in React Router

- **`useNavigate`**: Programmatically navigate to a route, with optional state and history control.
- **`useLocation`**: Access the current URL, query params, and any state passed via navigation.
- **`Link`**: Navigate between routes without reloading the page.
- **`NavLink`**: Similar to `Link` but applies active styles to indicate the current route.
- **`Outlet`**: Placeholder for rendering nested routes within a parent route.
- **`Routes`** and **`Route`**: Define the routing structure and specify components for paths.
- **`Navigate`**: Declarative component for redirecting to a different route conditionally.

Together, these components and hooks form a flexible and powerful routing solution, letting you build complex navigation and layouts in your React application.

---