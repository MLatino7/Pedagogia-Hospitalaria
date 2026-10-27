import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'

class AppErrorBoundary extends React.Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    console.error('La demo no pudo renderizarse:', error, info.componentStack)
  }

  render() {
    if (this.state.error) {
      return <main role="alert" style={{ maxWidth: 720, margin: '12vh auto', padding: 32, fontFamily: 'sans-serif', color: '#24352f' }}>
        <p style={{ color: '#a33', fontWeight: 700 }}>No se pudo mostrar la demo</p>
        <p>El servidor está activo, pero la interfaz encontró un error. Revisa la consola del navegador o la terminal para ver el detalle y vuelve a cargar la página después de corregirlo.</p>
        {import.meta.env.DEV && <pre style={{ whiteSpace: 'pre-wrap', padding: 16, background: '#f4e9e5', borderRadius: 8 }}>{this.state.error.message}</pre>}
      </main>
    }
    return this.props.children
  }
}

createRoot(document.getElementById('root')).render(<React.StrictMode><AppErrorBoundary><App /></AppErrorBoundary></React.StrictMode>)
