import "./ability.css";
import ReactIcon from "./icons/ReactIcon";
import JavascriotIcon from "./icons/JavascriotIcon";
import HtmlIcon from "./icons/HtmlIcon";
import CssIcon from "./icons/CssIcon";
import SassIcon from "./icons/SassIcon";
import NodeIcon from "./icons/NodeIcon";

function Ability() {
    return (
        <div className="box__content container-mx" id="ability">
            <div className="subtitle__section">
                <h3 className="subtitle">Habilidades</h3>
            </div>
            <div className="flex__skillis">
                <div className="card">
                    <HtmlIcon/>
                </div>
                <div className="card">
                    <CssIcon/>
                </div>
                <div className="card">
                    <SassIcon/>
                </div>
                <div className="card">
                    <JavascriotIcon/>
                </div>
                <div className="card">
                    <ReactIcon/>
                </div>
                <div className="card">
                    <NodeIcon/>
                </div>
            </div>
        </div>
    )
}

export default Ability;