import './App.css';
import Testimonio from './componentes/testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1> Pagina de prueba N° 1</h1>
        <Testimonio
        nombre='Loremp'
        pais='Ipsum'
        imagen='1'
        cargo='Lorem Impsum'
        empresa='LL'
        testimonio='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa ab cum dignissimos accusamus reiciendis minus perferendis! Aperiam dolores laborum exercitationem error quis magnam, non unde?
        '
         />
        <Testimonio
        nombre='Loremp'
        pais='Ipsum'
        imagen='2'
        cargo='Lorem Impsum'
        empresa='LL'
        testimonio='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa ab cum dignissimos accusamus reiciendis minus perferendis! Aperiam dolores laborum exercitationem error quis magnam, non unde?
        '
         />
        <Testimonio
        nombre='Loremp'
        pais='Ipsum'
        imagen='3'
        cargo='Lorem Impsum'
        empresa='LL'
        testimonio='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa ab cum dignissimos accusamus reiciendis minus perferendis! Aperiam dolores laborum exercitationem error quis magnam, non unde?
        '
         />
      </div>
    </div>
  );
}

export default App;
