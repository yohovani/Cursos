import React from 'react'
import  ReactDOM  from 'react-dom/client'
import {Greeting, UserCard} from './Greeting'
import Product,{NavBar} from './Product'
import {Button} from './Button'
import {TaskCard} from './Task'
import { Saludar } from './Saludar'
import {Post} from './Posts'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    
    <>
        <Post />
    </>
)