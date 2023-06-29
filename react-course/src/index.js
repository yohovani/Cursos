import React from 'react'
import  ReactDOM  from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

const users = [
    {
        id: 1,
        name: 'Yoho',
        image: 'https://robohash.org/user1'
    },
    {
        id: 2,
        name: 'Joe',
        image: 'https://robohash.org/user2'
    }
]
root.render(
    
    <>
        {users.map((user,i) => {
            return <div key={i}>
                <h1>{user.name}</h1>
                <img src={user.image}/>
                </div>
        })}
    </>
)