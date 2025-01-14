import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/about us';
import Listcars from './components/listcar';
import Contact from './components/contact us';
import Describe from './components/desscribe';
import Data from './components/form';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/kilimani-motors-collab",
    element: <App />
  },
  {
    path: "/kilimani-motors-collab/about",
    element: < About/>

  },
  {
    path: "/kilimani-motors-collab/available",
    element: <Listcars/>

  },
  {
    path: "/kilimani-motors-collab/contacts",
    element: <Contact/>
  },  
  {
    path: "/kilimani-motors-collab/describe/:id",
    element: <Describe/>

  },
  {
    path: "/data",
    element: <Data/>

  }
  
])



root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
