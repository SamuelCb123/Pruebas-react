import { useState } from 'react';
import './App.css';

const turns = {
  X: 'X', // Ajustamos los valores para reflejar los turnos correctamente
  O: 'O',
};

const Square = ({ children, isSelected, updateBoard, index }) => {
  const turnito = `square ${isSelected ? 'is-selected' : ''}`; // ternario que en caso de ser true mostrara los estilos de is-selected
  return (
    <div className={turnito}>
      {children} {/* Renderizamos los hijos */}
    </div>
  );
};

function App() {
  // Inicialización del estado
  const [board, setBoard] = useState(Array(9).fill(null)); // Array de 9 posiciones para el tablero
  const [turn, setTurn] = useState(turns.X); // Estado del turno

  return (
    <main className="board">
      <h1>Tres en Raya</h1>
      <section className="game">
        {board.map((_, index) => (
          <Square
            key={index} // Asignamos una key única
            index={index} // Pasamos el índice como prop
          >
            {}
          </Square>
        ))}
      </section>
      <section className="turn">
        <Square isSelected={turn === turns.X}> {/* Corregimos la lógica para determinar el turno */}
          {turns.X}
        </Square>
        <Square isSelected={turn === turns.O}> {/* Corregimos la lógica para determinar el turno */}
          {turns.O}
        </Square>
      </section>
    </main>
  );
}

export default App;
