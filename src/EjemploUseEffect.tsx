import { useEffect, useState } from "react"

export default function EjemploUseEffect(){

    const [clicks, setClicks] = useState(0)
    const [fecha, setFecha] = useState(new Date())

    useEffect(() => {
        console.log('componenete Cargado');
        document.title= `${clicks} veces`

        return () => {
            //Se ejecuta al destruir el componenete
            console.log('El componenete se va a destruir')
        }
    }, [clicks]);

    useEffect(()=>{
        const intervalId = setInterval(() => {
            setFecha(new Date())
        }, 3000)
        return ()=> clearInterval(intervalId)
    }, )

    useEffect(()=>{
        console.log('Voy a ejecutarme solo una vez')
    }, []);
  
    return(
        <>
            <button onClick={()=> setClicks(clicks + 1)}>
                Me as Clickeado {clicks} Veces
            </button>
            <div>
                {fecha.toString()}
            </div>
        </>
        
    )
}