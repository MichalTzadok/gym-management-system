import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// import AdminDashboard from './components/Admin/AdminDashboard.tsx';
// import Customers from './components/Admin/Customers.tsx';
// import Meetings from './components/Admin/Meetings.tsx';
// import Services from './components/Admin/Services.tsx';
// import Login from './components/Login.tsx';
// import SignUp from './components/SignUp.tsx';
// // import { CssBaseline } from '@mui/material';

// const router = createBrowserRouter([
//   {
//     path: '/sign-up',
//     Component: SignUp,
//   }, {
//     path: '/login',
//     Component: Login,
//   }, {
//     path: '/Admin',
//     Component: AdminDashboard,
//   }, {
//     path: '/Admin/Services',
//     Component: Services,
//   }, {
//     path: '/Admin/Meetings',
//     Component: Meetings,
//   }, {
//     path: '/Admin/Customers',
//     Component: Customers,
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    {/* <CssBaseline /> */}
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>,
)


