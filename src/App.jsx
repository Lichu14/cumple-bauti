import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useRef } from 'react'
import Home from './Home'
import Game from './Game'
import NotFound from './NotFound'
import Nivel1 from './Niveles/Nivel1'
import Nivel2 from './Niveles/Nivel2'
import Nivel3 from './Niveles/Nivel3'
import Nivel4 from './Niveles/Nivel4'
import Popeyes from './Niveles/Popeyes'
import LevelFinal from './Niveles/LevelFinal'
import Final from './Niveles/Final'

function App() {
  const bgMusicRef = useRef(null)

  const handleStartMusic = () => {
    if (!bgMusicRef.current) return
    const audio = bgMusicRef.current
    audio.volume = 0.30
    audio.play()
  }

  const handleStopMusic = () => {
    if (!bgMusicRef.current) return
    bgMusicRef.current.pause()
  }

  return (
    <>
      <audio ref={bgMusicRef} src="/audio/bg-music.mp3" loop preload="auto" />
      <Routes>
        <Route path="/" element={<Home onStartMusic={handleStartMusic} />} />
        <Route path="/juego" element={<Game />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Level1" element={<Nivel1 />} />
        <Route path="/Level2" element={<Nivel2 />} />
        <Route path="/Level3" element={<Nivel3 />} />
        <Route path="/Popeyes" element={<Popeyes />} />
        <Route path="/Level4" element={<Nivel4 onStopMusic={handleStopMusic} />} />
        <Route path="/levelFinal" element={<LevelFinal />} />
        <Route path="/final" element={<Final />} />
      </Routes>
    </>
  )
}

export default App
