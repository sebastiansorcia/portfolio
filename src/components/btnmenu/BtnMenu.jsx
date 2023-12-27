import React, { useState } from 'react';
import "./btn.css";
// iconos del boton de menu
import HamburguerIcon from "./menu.svg";
import CloseIcon from "./x.svg";


function BtnMenu() {
    const [imageSrc, setImageSrc] = useState(HamburguerIcon);
    const [isInitialImage, setIsInitialImage] = useState(true);

    const handleClick = () => {
      // Alternar entre la imagen inicial y la nueva imagen al hacer clic
    let menuHeader = document.querySelector(".menu__header");
    if (isInitialImage) {
        setImageSrc(CloseIcon);
        menuHeader.classList.add("active");
    } else {
        setImageSrc(HamburguerIcon);
        menuHeader.classList.remove("active");
        // menuHeader.classList.remove("active");
    }
    
    // Alternar el estado para la próxima vez
    setIsInitialImage(!isInitialImage);
    };

    return (
        <div className="btn__mobile__menu">
            <img src={imageSrc} className='iconmenu' alt='icon' onClick={handleClick} width="30px" height="30px" />
        </div>
    )
}

export default BtnMenu;