import { useState } from 'react'
import queja1 from "../sounds/queja1.mp3"
import queja2 from "../sounds/queja2.mp3"
import queja3 from "../sounds/queja3.mp3"
import { Link } from 'react-router-dom'
import background from '../sounds/Hmm.mp4'
import cuatro from '../sounds/cuatro.mp4'

export default function Nivel1() {



    function answerError() {
        const answers = ["Ah bue, tremendo alzeimer", "Esa edad no es la correcta", "En serio no te acordas? Esa respuesta no es correcta", "Bueno, me parece que el que es dori sos vos..."]
        return answers[errorCount % answers.length]
    }

    function play() {
        const sounds = [queja1, queja2, queja3]
        const randomSound = sounds[Math.floor(Math.random() * sounds.length)]
        new Audio(randomSound).play()
    }

    const [answer, setAnswer] = useState("")
    const [check, setCheck] = useState(false)
    const [error, setError] = useState(false)
    const [errorCount, setErrorCount] = useState(0)

    

    const handleSubmit = (e) => {
        e.preventDefault()

        const validAnswers = [
            "CUATRO",
            "4"

            
        ]

    const normalized = answer.trim().toUpperCase()
    
        if (validAnswers.includes(normalized)) {
            setCheck(true)
            setError(false)
            setErrorCount(0)
        } else {
            setCheck(false)
            setError(true)
            setErrorCount((prev) => prev + 1)
            play()
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <div>Ingresa cuantos años tenes</div>

                <input type="text" name="" id="" onChange={(e) => {setAnswer(e.target.value) }} />

                <button>Contestar</button>

                {
                    check && <p>Si, tenes cuatro anios...</p>
                }

                {
                    check && <video src={cuatro} autoPlay muted loop playsInline />
                }
                {
                    check && <Link to="/Level2">
                        <button>Continuar</button>
                    </Link>
                }
                {
                    error && <p>{answerError()}</p>
                }
                {
                    error && <video src={background} autoPlay muted loop playsInline />
                }
            </form>
        </>
    )
}
