import React from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';


export function App() {
    

    return (
        <section className='App'>
            <TwitterFollowCard isFollowing={true}  UserName="carlos"  >
                Carlos Nogeroles
                
                </TwitterFollowCard> 
             
            
            <TwitterFollowCard isFollowing={false} UserName="saiken">
                Saiken sonkaru
            </TwitterFollowCard>
            
            <TwitterFollowCard isFollowing={true} UserName="goku">
                Son Goku
            </TwitterFollowCard>
            
        </section>
    );
}
