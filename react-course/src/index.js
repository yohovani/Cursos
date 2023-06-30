import React from 'react'
import  ReactDOM  from 'react-dom/client'
import { useState, useEffect } from 'react'

const root = ReactDOM.createRoot(document.getElementById('root'))

function Counter(){

    var [mensaje, setMensaje] = useState('');
    var [counter, setCounter] = useState(0)

    useEffect(function () {
        console.log("Render")
    }, [counter])

    return<>
        <input onChange={e => setMensaje(e.target.value)}/>
        <button onClick={() => alert('El mensaje es: '+mensaje)}>Save</button>
        <h1>Counter: {counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>Sumar</button>
        <button onClick={() => setCounter(counter - 1)}>Restar</button>
        <button onClick={() => setCounter(counter = 1)}>Reiniciar</button>
    </>

}
root.render(
    <Counter />
)