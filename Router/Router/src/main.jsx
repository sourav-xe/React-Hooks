import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/home.jsx';
import About from './components/about.jsx';
import Counter from './components/counter.jsx'; // moved counter logic here

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // contains nav only
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "counter",
        element: <Counter />, // counter is isolated here
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
