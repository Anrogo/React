import React, { useState } from "react";
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: 'anrogo',
        name: 'Antonio Rodríguez González',
        isFollowing: true
    },
    {
        userName: 'cr7',
        name: 'Cristiano Ronaldo',
        isFollowing: false
    },
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true
    },
    {
        userName: 'pedrobue',
        name: 'Pedro Buenaño',
        isFollowing: false
    }
]

export function App() {
    const format = (userName) => `@${userName}`

    const [name, setName] = useState('midudev')

    return (
        <section className="App">
            {
                users.map(user => {
                    const { userName, name, isFollowing } = user
                    return (
                        <TwitterFollowCard 
                            key={userName}
                            formatUserName={format} 
                            userName={userName}
                            name={name}
                            initialIsFollowing={isFollowing} >
                        </TwitterFollowCard>

                    )
                })
            }
        </section>
    )
}

/*

        <section className="App">
            <TwitterFollowCard formatUserName={format} userName="anrogo4" name="Antonio Rodríguez" />
            <TwitterFollowCard formatUserName={format} name='Pedro Buenaño' />
            <TwitterFollowCard formatUserName={format} userName='cr7' name="Cristiano Ronaldo" initialIsFollowing={true} />
            <TwitterFollowCard formatUserName={format} userName={name} name="midudev" />
            <button onClick={() => setName('messi')}>
                Cambiar nombre
            </button>
        </section>
        
*/