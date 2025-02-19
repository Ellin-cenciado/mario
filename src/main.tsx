import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import NavBar from './components/NavBar.tsx'
import { PageProvider } from './context/PageContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PageProvider>
      <App />
      <NavBar />
    </PageProvider>
  </StrictMode>,
)
