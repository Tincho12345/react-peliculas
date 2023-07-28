import AppCSS from './App.module.css';
const subtitulo = "Esto es un Subtítulo"
const duplicar = (valor: number) => valor * 2;

export default function EjemploCSS() {
    const cuadradoAzul = {
        backgroundColor: 'blue', 
        width: '50px', 
        height: '50px', 
        marginLeft: '1rem'
    }
    const cuadradoRojo = {
        backgroundColor: 'red', 
        width: '50px', 
        height: '50px', 
        marginLeft: '1rem'
      }

      return(
        <>
            <div className='cuadrdoRojo'></div>
            <div style={cuadradoRojo}></div>
            <div style={cuadradoAzul}></div>
            <br></br>
            <div style={cuadradoAzul}></div>
            <h3 style={{color: 'blue'}}>{subtitulo.toUpperCase()}</h3>
            <h4 className='color'>Index.css El doble de 3 es {duplicar(3)}</h4>
            <h4 className={AppCSS.color}>App.module.css</h4>
        </>
    )
}