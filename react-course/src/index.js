import React from 'react'
import  ReactDOM  from 'react-dom/client'
import {Greeting, UserCard} from './Greeting'
import Product,{NavBar} from './Product'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    
    <div>
        <Greeting title="Hola Mundo"/>
        <Greeting title="Hola :v"/>
        <UserCard/>
        <Product/>
        <NavBar/>
    </div>
)