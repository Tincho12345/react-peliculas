import { ReactElement } from "react"

export default function ProyectarContenido(props: proyectarContenidoProps){
    return(
        <>
            <h3>Parte Superior Contenido</h3>

            {props.children}

            <h3>Parte Inferior Contenido</h3>
        </>
    )
}

interface proyectarContenidoProps{
    children: ReactElement
}