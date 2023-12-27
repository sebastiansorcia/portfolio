
import ButtonDownload from "../buttons/ButtonDownload";
import "./home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter,faInstagram,faGithub } from '@fortawesome/free-brands-svg-icons';

function Home() {
    return (
        <section className="section__home">
            <div className="box">
                <div className="box__content__home container-mx">
                    <div className="box__content__texts">
                        <div className="title__home">
                            <h1 className="title">Elevando Estándares En La Web Moderna que Deja Huella</h1>
                        </div>
                        <div className="subtitle__home">
                            <span className="subtitle">Bienvenido mi nombre es sebastian Explora mi portfolio y descubre mis habilidades</span>
                        </div>
                        <ButtonDownload download="download cv"/>
                    </div>
                    <div className="slide__social">
                        <div className="icon">
                            <a href="https://twitter.com/Sebastiansevs" target="_blank" rel="noreferrer" aria-label="ir a twitter" className="link">
                                <FontAwesomeIcon icon={faXTwitter} />
                            </a>
                        </div>
                        <div className="icon">
                            <a href="https://www.instagram.com/sebastianseberiano/" className="link" target="_blank" rel="noreferrer" aria-label="ir a instagram">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                        <div className="icon">
                            <a href="https://github.com/sebastiansorcia" target="_blank" rel="noreferrer" className="link" aria-label="ir a github">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;