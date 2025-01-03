import React from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';


export function App() {
    const formatUserName = (UserName) => `@${UserName}`;

    return (
        <section className='App'>
            <TwitterFollowCard 
                isFollowing={true} 
                formatUserName={formatUserName} 
                UserName="carlos" 
                name="Carlos Nogeroles Colmenero" 
            />
            <TwitterFollowCard 
                isFollowing={false} 
                formatUserName={formatUserName} 
                UserName="saiken" 
                name="Saiken Sonkaru" 
            />
            <TwitterFollowCard 
                isFollowing={true} 
                formatUserName={formatUserName} 
                UserName="goku" 
                name="Son Goku" 
            />
        </section>
    );
}
