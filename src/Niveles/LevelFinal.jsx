import React from 'react'
import background from "../sounds/background.mp4"

export default function LevelFinal() {
        return (
                <div className="level-final">
                        <video
                                className="level-final__video"
                                src={background}
                                autoPlay
                                muted
                                loop
                                playsInline
                        />
                        <main className="level-final__content">
                                <p>
                                        Hola, mi amor:
                                </p>
                                <p>
                                        La verdad es que no soy muy bueno haciendo estas cosas, pero voy a intentar hacerlo lo mejor que pueda. Como ya sabés, me cuesta bastante expresar mis sentimientos; no porque no los tenga o no los sienta, sino porque a veces me da vergüenza abrirme y mostrar esa parte más sensible mía. Capaz los expreso de otra manera, más física, más cotidiana.
                                        Pero hoy decidí escribir y ver qué pasaba, porque valés la pena y porque quiero salir de mi zona de confort por vos.
                                </p>
                                <p>
                                        Quería dedicarte estas palabras y decirte que estoy profundamente agradecido con lo que sea que haya hecho que nos conozcamos y nos encontremos en esta vida. Así como en su momento me dijiste que yo te había demostrado que no todo era caos, vos también me demostraste —o mejor dicho, me enseñaste— lo que es el amor, y sobre todo, lo que es amar de verdad.
                                        Es la primera vez que siento, sin dudas, que estoy realmente enamorado.
                                </p>
                                <p>
                                        Creo que te lo demuestro de muchas maneras, pero gracias a vos también pude dar un paso enorme: contarle a mis viejos no solo que me gustaban los chicos, sino que estaba saliendo con vos y que quería que te conozcan. Algo que, antes de conocerte, me parecía imposible o lejano. Y sin embargo pasó. Y pasó porque estabas vos.
                                </p>
                                <p>
                                        Te amo. Te amo, te amo y te amo.
                                        Amo la complicidad que tenemos, cómo nos entendemos, y también cómo a veces peleamos como dos nenes chiquitos por boludeces que, en el fondo, sé que cada vez nos hacen más fuertes y más unidos.
                                        Te amo porque, además de ser mi novio, sos también mi sensei. Aprendí —y sigo aprendiendo— muchísimo de vos desde el primer día que te conocí. Y aunque a veces sea medio terco o pesimista, vos siempre estás ahí, apoyándome en todo lo que hago y ayudándome a ser mejor.
                                </p>
                                <p>
                                        Feliz cumpleaños, mi amorcito.
                                        Mi bebote enojón.
                                        Por muchos más sushis libres… y vamos por Japón 2027 🤍
                                </p>
                                <p>
                                        PD: hay mas regalos...

                                </p>
                        </main>
                </div>
        )
}
