import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HomePage from './components/HomePage/HomePage';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
const HOCRoute = ({ element, path }) => {
  return <>
    <Header />
    {element}
    <Footer />
  </>

}
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={
        <HOCRoute element={<HomePage />} />
      } />
      <Route path="/re" element={
        <HOCRoute element={<App />} />
      } />
    </>
  )
);
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     // loader: rootLoader,
//     children: [
//       {
//         path: "team",
//         element: <HomePage />,
//         // loader: teamLoader,
//       },
//     ],
//   },
// ], {
//   basename: '/'
// });
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
