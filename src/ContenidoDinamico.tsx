export default function ContenidoDinamico(props: any){
    if (props.calificacion > 90) {
        return(
            <div>
                <h3>{props.nombre}: Excelente</h3>
            </div>
        )
    }else if (props.calificacion > 70) {
        return(
            <div>
                <h3>{props.nombre}: Muy bien</h3>
            </div>
        )
    } else {
        return(
            <div>
                <h3>{props.nombre}: Lol...</h3>
            </div>
        )
    }
}