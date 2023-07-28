import { useState } from 'react';
import './App.css';
// import EjemploReloj from './EjemploReloj';
import MostrarTexto from './MostrarTexto';
// import ProyectarContenido from './ProyectarContedo';
// import ProyectarContenido2 from './ProyectandoContenido2';
// import ContenidoDinamico from './ContenidoDinamico';
import FormularioTexto from './FormularioTexto';
import EjemploUseEffect from './EjemploUseEffect';
import ValorContext from './ValorContext';

function App() {
  const [texto, setTexto] = useState('Valor por Defecto');

  <ValorContext.Provider value={texto}>

  </ValorContext.Provider>
  // const [cheked, setCheked] = useState(false);

  // const calificaciones = [
  //   {nombre:'Felipe', calificacion: 95},
  //   {nombre:'Martín', calificacion: 85},
  //   {nombre:'María', calificacion: 50},
  // ]
  
  // const manejarClick = () => console.log("click");
  const manejarKeyUp = (textoInput: string) => {
    setTexto(textoInput);
  }

  // const parteIntermedia = <EjemploReloj />

  // const estilo = {
  //   backgroundColor: 'red', width: '50px', height: '50px', marginLeft: '1rem'
  // }

  // const parteInferior = <div style={estilo}></div>
  const [cheked, setCheked] = useState(true);

  return (
    <>
      <h1 className='rojo'>Hola Mundo!</h1>

      <ValorContext.Provider value={texto}>

      </ValorContext.Provider>

      <div>
        <input type='checkbox' 
          onChange={(e) => setCheked(e.currentTarget.checked)}
          checked={cheked}/> Mostrar Componenete Use Efect
      </div>

      {cheked ? <EjemploUseEffect />: null} 

      

      {/* {calificaciones.map(cal => <ContenidoDinamico key={cal.nombre} {...cal} />)} */}

      {/* <ProyectarContenido2
        parteSuperior={<span>Este es un Mensaje del Componente Padre</span>}
        parteIntermedia={parteIntermedia}
        parteInferior={parteInferior}
      /> */}

      {/* <button 
        onMouseEnter={()=> console.log("Entrando!")}
        onClick={manejarClick}>Clickeame
      </button> */}
      <br></br>
      <FormularioTexto manejarKeyUp={(e: string) => manejarKeyUp(e)} />
      
      <MostrarTexto texto={texto} />
      <br></br>
      {/* <div>
        <input type='checkbox' 
          onChange={(e) => setCheked(e.currentTarget.checked)}
          checked={cheked}/> Este es un checkbox
      </div> */}
    </>
  );
}

export default App;
