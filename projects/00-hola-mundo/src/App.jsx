import React, { useState } from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

// Array de usuarios
const users = [
    {
        UserName: 'Antonio',
        name: 'Antonio Banderas',
        isFollowing: true,
    },
    {
        UserName: 'saiken',
        name: 'Saiken Sonkaru',
        isFollowing: false,
    },
    {
        UserName: 'goku',
        name: 'Son Goku',
        isFollowing: true,
    },
];

export function App() {
    return (
        <section className="App">
            {users.map((user) => {
                const { UserName, name, isFollowing } = user;
                return (
                    <TwitterFollowCard
                        key={UserName} 
                        UserName={UserName}
                        InitialisFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                );
            })}
        </section>
    );
}
