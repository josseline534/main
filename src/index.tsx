// src/index.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' // Importa tus estilos globales, si los tienes
import App from './App' // Importa tu componente principal

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
