import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { PortafolioApp } from './PortafolioApp'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PortafolioApp />
  </StrictMode>,
)
