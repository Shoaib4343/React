import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Components/Home/Home.jsx'
import Contact from './Components/Contact/Contact.jsx';
import About from './Components/About/About.jsx';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'


// const router = createBrowserRouter([
//  {
//   path: '/',
//   element: <App />,
//   children: [
//     {
//       path : '',
//       element : <Home />
//     },
//     {
//       path : 'contact',
//       element : <Contact />
//     },
//     {
//       path: 'about',
//       element:  <About />
//     }
    
//   ]
//  }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<App/>}>
      <Route path='' element={<Home />} />
      <Route path='home' element={<Home />} />
      <Route path='contact' element={<Contact/>} />
      <Route path='about' element={<About />} />

    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
