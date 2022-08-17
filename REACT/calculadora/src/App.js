import './App.css';
import Boton from './componentes/Boton';
import Clear from './componentes/Clear';
import Pantalla from './componentes/Pantalla';
import logos from './imagenes/1.jpg'
import {useState} from 'react';
import {evaluate} from 'mathjs';

function App() {

  const [input, setInput] = useState(''); 

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    setInput(evaluate(input));
  };

  return (
    <div className='App'>
      <div className='logo-contenedor'>
      <img 
          className='logo'
          src={logos}
          alt='logo 1' 
          />
      </div>
      <div className='contenedor-calduladora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>s
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <Clear manejarClear={() => setInput('')}>Clear</Clear>
        </div>
      </div>
    </div>
  );
}

export default App;
