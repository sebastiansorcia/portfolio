import "./button-download.css";

export default function ButtonDownload(props) {
    return (
        <a href="#download" className="btn__download" aria-label="download cv">{props.download}</a>
    )
}