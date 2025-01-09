import { Children } from 'react';
import './App.css';
const turns = {
  X: 'x',
  o: 'O', // Creación de constantes para los turnos
};

const Square = ({ children, updateBoard, index }) => {
  return (
    <div className="square">
      {children} 
    </div>
  );
};//constante que contiene el tablero children que sera las x o O
function App() {
  
  const board = Array(9).fill(null); // Array de 9 posiciones para el tablero

  return (
    <main className="board">
      <h1>Tres en Raya</h1>
      <section className="game">
        {
          board.map((_, index) => ( // Quitamos el `return` innecesario
            <Square
              key={index} // Asignamos una key única
              index={index} // Pasamos el índice como prop
             
            >
             
            </Square>
          ))
        }
      </section>
    </main>
  );
}


export default App;