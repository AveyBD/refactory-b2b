import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Hero from './components/Hero.jsx';
import WhyRefactory from './components/WhyRefactory.jsx';
import SuccessStory from './components/SuccessStory.jsx';
import JoinUs from './components/JoinUs.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero/>,
  },
  {
    path: "/whyrefactory",
    element: <WhyRefactory/>,
  },
  {
    path: "/successstory",
    element: <SuccessStory/>,
  },
  {
    path: "/joinus",
    element: <JoinUs/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
