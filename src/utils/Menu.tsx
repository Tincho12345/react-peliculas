//Esta parte es de Menu.tsx
 
import { NavLink } from "react-router-dom";
 
export default function Menu(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand"
                to="/" end>React Peliculas</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/generos">
                                Generos
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}