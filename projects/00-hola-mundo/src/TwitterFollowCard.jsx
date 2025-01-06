import React, { useState } from 'react';
import './App.css';

export function TwitterFollowCard({ children, UserName, InitialisFollowing }) {
    const [isFollowing, setIsFollowing] = useState(InitialisFollowing);

    const buttonClassName = isFollowing 
        ? 'tw-followcard-button is-following' 
        : 'tw-followcard-button';

    const handleButtonClick = () => {
        setIsFollowing(!isFollowing);
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
                    {isFollowing ? (
                        <>
                            <span className="tw-followcard-followText">Siguiendo</span>
                            <span className="tw-followcard-stopFollow">Dejar de seguir</span>
                        </>
                    ) : (
                        'Seguir'
                    )}
                </button>
            </aside>
        </article>
    );
}
