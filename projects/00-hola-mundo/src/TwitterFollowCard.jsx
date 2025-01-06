import React, { useState } from 'react';
import './App.css';

export function TwitterFollowCard({ children, UserName, InitialisFollowing }) {
    // Inicializamos el estado
    const [isFollowing, setIsFollowing] = useState(InitialisFollowing);

    // Texto del botón basado en el estado
    const text = isFollowing ? 'Siguiendo' : 'Seguir';

    // Clase del botón basada en el estado
    const buttonClassName = isFollowing 
        ? 'tw-followcard-button is-following' 
        : 'tw-followcard-button';

    // Función para manejar el clic en el botón
    const handleButtonClick = () => {
        setIsFollowing(!isFollowing); // Cambia el estado
    };

    return (
        <article className="tw-followcard">
            <header className="tw-followcard-header">
                <img 
                    src={`https://unavatar.io/${UserName}`} 
                    alt={`Avatar de ${children}`} 
                    className="tw-followcard-avatar" 
                />
                <div className="tw-followcard-info">
                    <strong>{children}</strong>
                    <span className="tw-followcard-infoUserName">@{UserName}</span>
                </div>
            </header>
            <aside>
                <button 
                    className={buttonClassName} 
                    onClick={handleButtonClick} 
                >
                    {text}
                </button>
            </aside>
        </article>
    );
}
