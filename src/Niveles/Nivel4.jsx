import React from 'react'
import { useState } from 'react'
import queja1 from "../sounds/queja1.mp3"
import queja2 from "../sounds/queja2.mp3"
import queja3 from "../sounds/queja3.mp3"
import { Link } from 'react-router-dom'
import background from '../sounds/Hmm.mp4'

import japon from '../sounds/japon.mp4'
import staywithme from '../sounds/staywithme.mp3'

export default function Nivel3({ onStopMusic }) {

    function answerError() {
        const answers = ["Definitivamente no es esa", "Creo que no... a ver, segui pensando", "Puede ser pero no creo", "Intenta otra vez"]
        return answers[errorCount % answers.length]
    }

    function play() {
        const sounds = [queja1, queja2, queja3]
        const randomSound = sounds[Math.floor(Math.random() * sounds.length)]
        new Audio(randomSound).play()
    }
    
    function playSuccess(){
        const audio = new Audio(staywithme)
        audio.volume = 0.35
        audio.play()
    }

    const [answer, setAnswer] = useState("")
    const [check, setCheck] = useState(false)
    const [error, setError] = useState(false)
    const [errorCount, setErrorCount] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault()

        const validAnswers = [
            "JAPON",

            
        ]

        const normalized = answer.trim().toUpperCase()

        if (validAnswers.includes(normalized)) {
            setCheck(true)
            setError(false)
            setErrorCount(0)
            playSuccess()
            if (typeof onStopMusic === 'function') {
                onStopMusic()
            }
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
                <div>Cual es nuestro proximo destino?</div>

                <input type="text" name="" id="" onChange={(e) => { setAnswer(e.target.value) }} />

                <button>Contestar</button>
            </form>

            {
                check && <p>本当だ！日本だ、今思い出した。 いつか一緒に旅行して、ラーメンも寿司もお腹いっぱい食べられたらいいな</p>
            }

            {
                check && <>

                <video src={japon} autoPlay muted loop playsInline />
                </>
            }

            {
                check && <Link to="/LevelFinal">
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
