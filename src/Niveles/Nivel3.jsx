import React from 'react'
import { useState } from 'react'
import queja1 from "../sounds/queja1.mp3"
import queja2 from "../sounds/queja2.mp3"
import queja3 from "../sounds/queja3.mp3"
import { Link } from 'react-router-dom'
import background from '../sounds/Hmm.mp4'
import gorda from '../sounds/Gorda.mp4'
import thisis from '../sounds/this-is.mp3'

export default function Nivel3() {

    function answerError() {
        const answers = ["Definitivamente no es esa", "Creo que no... a ver, segui pensando", "Puede ser pero no creo", "Intenta otra vez"]
        return answers[errorCount % answers.length]
    }

    function play() {
        const sounds = [queja1, queja2, queja3]
        const randomSound = sounds[Math.floor(Math.random() * sounds.length)]
        new Audio(randomSound).play()
    }
    
    function playGorda(){
        new Audio(thisis).play()
    }

    const [answer, setAnswer] = useState("")
    const [check, setCheck] = useState(false)
    const [error, setError] = useState(false)
    const [errorCount, setErrorCount] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault()

        const validAnswers = [
            "THIS IS WHAT I AM EATING FOR BREAKAST",
            "THIS IS WHAT I AM EATING FOR BREAKFAST",
            "THIS IS WHAT I AM EATING FOR LUNCH",
            "THIS IS WHAT I'M EATING FOR BREAKAST",
            "THIS IS WHAT I'M EATING FOR BREAKFAST",
            "THIS IS WHAT I'M EATING FOR LUNCH",
        ]

        const normalized = answer.trim().toUpperCase()

        if (validAnswers.includes(normalized)) {
            setCheck(true)
            setError(false)
            setErrorCount(0)
            playGorda()
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
                <div>Que frase usalmente decimos antes de comer alguna comida de fattie?</div>

                <input type="text" name="" id="" onChange={(e) => { setAnswer(e.target.value) }} />

                <button>Contestar</button>
            </form>

            {
                check && <p>Todos fuimos ella en algun momento...</p>
            }

            {
                check && <video src={gorda} autoPlay muted loop playsInline/>
            }

            {
                check && <Link to="/Level4">
                    <button>Continuar</button>
                </Link>
            }

            {
                error && <p>{answerError()}</p>
            }

            {
                error && <video src={background} autoPlay muted loop playsInline />
            }
        </>
    )
}
