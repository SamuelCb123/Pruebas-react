import './App.css';

function App() {
  const turns = {
    X: 'x',
    o: 'O', // Creación de constantes para los turnos
  };

  const board = Array(9).fill(null); // Array de 9 posiciones para el tablero

  return (
    <main className="board">
      <h1>Tres en Raya</h1>
      <section className="game">
        {
          board.map((_, index) => (
            <div className="cell" >
              {/* Cada celda tiene un identificador único */}
              <span className="cell_content">
                {index} {/* Mostramos el índice de cada celda */}
              </span>
            </div>
          ))
        }
      </section>
    </main>
  );
}

export default App;