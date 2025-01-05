import React from 'react';
import './App.css';


export function TwitterFollowCard({children, UserName,  isFollowing }) {
    console.log(isFollowing); // Solo muestra true o false
    return (
        <article className="tw-followcard">
            <header className="tw-followcard-header">
                <img 
                    src={`https://unavatar.io/${UserName}`} 
                    alt={`Avatar de ${name}`} 
                    className="tw-followcard-avatar" 
                />
                <div className="tw-followcard-info">
                    <strong>{children}</strong>
                    <span className="tw-followcard-infoUserName">@{UserName}</span>
                </div>
            </header>
            <aside>
                <button className="tw-followcard-button">
                    Seguir
                </button>
            </aside>
        </article>
    );
}

