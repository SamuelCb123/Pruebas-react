import React from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';


export function App() {
    

    return (
        <section className='App'>
            <TwitterFollowCard   UserName="carlos"  >
                Carlos Nogeroles
                
                </TwitterFollowCard> 
             
            
            <TwitterFollowCard  UserName="saiken">
                Saiken sonkaru
            </TwitterFollowCard>
            
            <TwitterFollowCard  UserName="goku">
                Son Goku
            </TwitterFollowCard>
            
        </section>
    );
}
