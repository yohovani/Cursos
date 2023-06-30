import React from 'react'
import  ReactDOM  from 'react-dom/client'
import { useState } from 'react'

const root = ReactDOM.createRoot(document.getElementById('root'))

function Counter(){

    var [mensaje, setMensaje] = useState('')

    return<>
        <input onChange={e => setMensaje(e.target.value)}/>
        <button onClick={() => alert('El mensaje es: '+mensaje)}>Save</button>
    </>

}
root.render(
    <Counter />
)