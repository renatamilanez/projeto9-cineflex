import "./style.css";
import { Link } from "react-router-dom";

export default function Movie({movie}){
    return(
        <div className="movie">
            <Link to={`filme/${movie.id}`}><img src={movie.posterURL} alt=''/></Link>
        </div>
    )
}