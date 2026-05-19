import { useState } from 'react'
import Header from './components/Header.jsx'
import Feed from './components/Feed.jsx'
import Usuario from './components/Usuario.jsx'
import PostDetallado from './components/PostDetallado.jsx'
import './App.css'

function App() {
    const [vistaActual, setVistaActual] = useState('feed')
    const [postSeleccionado, setPostSeleccionado] = useState(null)

    function abrirPost(post) {
        setPostSeleccionado(post)
        setVistaActual('post')
    }

    function volverAlFeed() {
        setPostSeleccionado(null)
        setVistaActual('feed')
    }

    return (
        <>
            <Header vistaActual={vistaActual} setVistaActual={setVistaActual} />
            {vistaActual === 'feed' && <Feed abrirPost={abrirPost} />}
            {vistaActual === 'usuario' && <Usuario />}
            {vistaActual === 'post' && postSeleccionado && <PostDetallado post={postSeleccionado} onVolver={volverAlFeed} />}

        </>
    )
}

export default App