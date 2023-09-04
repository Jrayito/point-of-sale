import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './views/Login';
import reportWebVitals from './reportWebVitals';
import './assets/bootstrap/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router  = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  }
]);
// errorElement: <element> para cuando no se cuentre la página
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
