import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { PortafolioApp } from './PortafolioApp'
import { RouterProvider } from 'react-router'
import { appRouter } from './app.router'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
    <PortafolioApp />

  </StrictMode>,
)
