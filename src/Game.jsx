import { Link } from "react-router-dom"
import queja1 from "./sounds/queja1.mp3"
import queja2 from "./sounds/queja2.mp3"
import queja3 from "./sounds/queja3.mp3"

export default function Game() {
    function play() {
        const sounds = [queja1, queja2, queja3]
        const randomSound = sounds[Math.floor(Math.random() * sounds.length)]
        new Audio(randomSound).play()
    }
    return (
        <main>

            <p>Ay.. Hola! No te habia visto! Espero que estes bien mi amorisito. La verdad es que estuve mucho tiempo pensando que regalarte para tu cumple, y todavia no lo se... o creo que no me acuerdo. No se, algo paso e hizo que me olvidara lo que te regale para tu cumple. Necesito que me ayudes a recurperar la memoria, corte Dori de buscando a nemo ahre. Bueno chemmmm, empezamos? </p>

            <Link to="/Level1">
            <button>Si</button>
            </Link>


            <button onClick={play}>
                H@#mmhj!
            </button>

        </main>
    )
}
