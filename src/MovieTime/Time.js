import {Link} from "react-router-dom";
import "./style.css";

export default function Time({session}){
    return(
        <div className="time">
            <p>{session.weekday} - {session.date}</p>
            <div>
                {session.showtimes.map(showtime => 
                <Link to={`/sessao/${session.id}`}>
                    <button>{showtime.name}</button>
                </Link>
                )}
            </div>
        </div>
    )
}