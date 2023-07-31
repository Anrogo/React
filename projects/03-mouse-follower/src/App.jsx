import './App.css'
import { useEffect, useState } from 'react'

const FollowMouse = () => {

  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('efecto', { enabled })
    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }
    //Limpieza de eventos. Se ejecuta cuando el componente se desmonta o cambian las dependencias
    return () => {
      window.removeEventListener('pointermove', handleMove)
      //console.log('Cleanup')
    }
  }, [enabled])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        border: '3px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}>

      </div>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar ' : 'Activar '}
        seguir puntero
      </button>
    </>

  )
}

function App() {
  const [mounted, setMounted] = useState(true)

  return (
    <main>
      {mounted && <FollowMouse />}
      <button onClick={() => setMounted(!mounted)}>
        Reiniciar puntero
      </button>
    </main>

  )
}

export default App
