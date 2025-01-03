import React from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';


export function App() {
    const formatUserName = (userName) => `@${userName}`;
    return (
     
       <section className='App'>
   <TwitterFollowCard  formatUserName={ formatUserName}isFollowing={true} UserName="carlos" name="Carlos Nogeroles Colmenero" />
            <TwitterFollowCard isFollowing={false} UserName="saiken" name="Saiken Sonkaru" />
            <TwitterFollowCard isFollowing={true} UserName="goku" name="Son Goku" />
</section>
    )
}
