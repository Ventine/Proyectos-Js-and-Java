import './App.css';
import logo from './imagenes/1.png';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='logo-contenedor'>
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className='tareas-lista-principal'>
        <h1> My Task </h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
