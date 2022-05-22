import './footer.css';
function Footer(props){
    return(
        <div className="bottom">
            <h2>{props.head}</h2>
            <p>{props.para}</p>
        </div>
    );
}
export default Footer;