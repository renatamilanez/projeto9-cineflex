import "./style.css";
import Movie from "../ListMovies/Movie";

export default function Footer({title}){
    return(
        <div className="footer">
            <Movie />
            <h4>{title}</h4>
        </div>
    )
}