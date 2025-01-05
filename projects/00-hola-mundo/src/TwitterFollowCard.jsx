import React from 'react';
import './App.css';


export function TwitterFollowCard({children, UserName,  isFollowing }) {
    const text = isFollowing ? 'siguiendo' : 'seguir' //usando una ternaria es como un if pero mas corto en este caso el texto cambiara dependioendo de si estamos siguiendo o no
     // Solo muestra true o false
     const buttonClassName= isFollowing ? 'tw-followcard-button is-following' : 'tw-followcard-button' //cambiando color de boton si es following 
    return (
        <article className="tw-followcard">
            <header className="tw-followcard-header">
                <img 
                    src={`https://unavatar.io/${UserName}`} 
                    alt={`Avatar`} 
                    className="tw-followcard-avatar" 
                />
                <div className="tw-followcard-info">
                    <strong>{children}</strong>
                    <span className="tw-followcard-infoUserName">@{UserName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName}>
                    {text}
                </button>
            </aside>
        </article>
    );
}

