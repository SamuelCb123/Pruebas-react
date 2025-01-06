import React, { useState } from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';


export function App() {
    
 const [name, setname] = useState('carlos')
 const cambiar = () => {
setname('aas'); // Cambia elnombre al pulsar el boton
};
    return (
        <section className='App'>
            <TwitterFollowCard   UserName= {name} InitialisFollowing={true}  >
                Carlos Nogeroles
                
                </TwitterFollowCard> 
             
            
            <TwitterFollowCard  UserName="saiken">
                Saiken sonkaru
            </TwitterFollowCard>
            
            <TwitterFollowCard  UserName="goku">
                Son Goku
            </TwitterFollowCard>
           
         
            <button onClick={cambiar}>Cambio de nombre</button> 
        </section>
    );

}
