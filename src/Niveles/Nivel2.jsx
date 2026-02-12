import React from 'react'
import { useState } from 'react'
import queja1 from "../sounds/queja1.mp3"
import queja2 from "../sounds/queja2.mp3"
import queja3 from "../sounds/queja3.mp3"
import { Link } from 'react-router-dom'
import background from '../sounds/Hmm.mp4'
import sushi from '../sounds/sushi.mp4'

export default function Nivel2() {

  function answerError() {
    const answers = ["Definitivamente no es esa", "Creo que no... a ver, segui pensando", "Puede ser pero no creo", "Intenta otra vez"]
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
            "SUSHI"
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
        <div>Que comida fue la que mas veces comimos hasta explotar?</div>

        <input type="text" name="" id="" onChange={(e) => { setAnswer(e.target.value) }} />

        <button>Contestar</button>

        {
          check && <p>SI! DIOS QUE GANAS DE COMER SUSHI LIBRE, pero no al del venezolano drogado... HH@#M</p>
        }

        {
          check && <video className='sushi' src={sushi} autoPlay muted loop playsInline />
        }

        {
          check && <Link to="/Level3">
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
