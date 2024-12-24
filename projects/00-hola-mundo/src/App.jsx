import './App.css';

export function App() {
    return (
        <article className="tw-followcard">
            <header className="tw-followcard-header">
                <img 
                    src="https://unavatar.io/goku" 
                    alt="Avatar de Son Goku" 
                    className="tw-followcard-avatar" 
                />
                <div className="tw-followcard-info">
                    <strong>Son Goku</strong>
                    <span className="tw-followcard-infoUserName">@gokuaa</span>
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
