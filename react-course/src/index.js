import React from 'react'
import  ReactDOM  from 'react-dom/client'
import {Greeting, UserCard} from './Greeting'
import Product,{NavBar} from './Product'
import {Button} from './Button'


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    
    <div>
        <Button text='Click Me'/>
        <Button text='Salir'/>
        <Button text="text"/>
        <Greeting title="Hola Mundo"/>
        <Greeting title="Hola :v"/>
        <UserCard/>
        <Product/>
        <NavBar/>
    </div>
)