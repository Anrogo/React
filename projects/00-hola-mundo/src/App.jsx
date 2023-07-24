import React from "react";
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
    const format = (userName) => `@${userName}`
    
    return (
        <section className="App">
            <TwitterFollowCard formatUserName={format} userName="anrogo4" name="Antonio Rodríguez" isFollowing />
            <TwitterFollowCard formatUserName={format} name="Pedro Buenaño" isFollowing/>
            <TwitterFollowCard formatUserName={format} userName="cr7" name="Cristiano Ronaldo" isFollowing={false}/>
        </section>
    )
}

