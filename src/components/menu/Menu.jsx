import ButtonCt from "../buttons/ButtonCt";
import "./menu.css";

function Menu() {
    return (
        <div className="menu__header">
            <ul className="list__items">
                <li className="list__item"><a href="#home" className="link__item item" aria-label="seccion de inicio">inicio</a></li>
                <li className="list__item"><a href="#ability" className="link__item item" aria-label="seccion sobre mi">habilidades</a></li>
                <li className="list__item"><a href="#proyects" className="link__item item"aria-label="seccion de proyectos">proyectos</a></li>
                <li className="list__item"><ButtonCt content="Contáctame"/></li>
            </ul>
        </div>
    )
}

export default Menu;