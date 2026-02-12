import { Link } from 'react-router-dom'
import background from './sounds/Hmm.mp4'

export default function Home({ onStartMusic }) {
    const handleStartMusic = () => {
        if (typeof onStartMusic === 'function') {
            onStartMusic()
        }
    }

    return (
        <>
        <main className='home'>
        <video src={background} autoPlay muted loop playsInline />
        <h1>Cumple.exe</h1>
        <h2>Encontrando El Regalo Perdido</h2>

        <div className="home-actions">
            <Link to="/juego">Comenzar</Link>
            <button onClick={handleStartMusic}>Activar musica</button>
        </div>
        </main>
        </>
    )
}
