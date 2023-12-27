import BtnMenu from "../btnmenu/BtnMenu";
import Menu from "../menu/Menu";
import "./header.css";

function Header() {
    return (
        <header className="header__portfolio">
            <nav className="header__navbar__portfolio container-mx">
                <div className="logo__header">
                    <span className="logo">portfolio</span>
                </div>
                <Menu/>
                <BtnMenu/>
            </nav>
        </header>
    )
}

export default Header;