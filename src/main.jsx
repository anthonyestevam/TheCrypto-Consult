import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//routes
import Contact from './routes/contact/contact.jsx'
import Sobre from './routes/sobre/Sobre.jsx'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path:"/",
    element: <App />
  },
  {
    path:"/about",
    element: <Sobre />,
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
