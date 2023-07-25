import React, { useState } from "react";
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
    const format = (userName) => `@${userName}`
    
    const [name, setName] = useState('midudev')

    return (
        <section className="App">
            <TwitterFollowCard formatUserName={format} userName="anrogo4" name="Antonio Rodríguez" isFollowing />
            <TwitterFollowCard formatUserName={format} name='Pedro Buenaño' isFollowing/>
            <TwitterFollowCard formatUserName={format} userName={name} name="Cristiano Ronaldo" isFollowing={false}/>
            <TwitterFollowCard formatUserName={format} userName={name} name="Cristiano Ronaldo" isFollowing={false}/>
            <button onClick={() => setName('messi')}>
                Cambiar nombre
            </button>
        </section>
    )
}
