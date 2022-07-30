import {Link} from "react-router-dom";
import "./style.css";

export default function Time({session}){
    return(
        <div className="time">
            <p>{session.weekday} - {session.date}</p>
            <div>
                {session.showtimes.map((showtime, index) => 
                <Link key={index} to={`/sessao/${showtime.id}`}>
                    <button>{showtime.name}</button>
                </Link>
                )}
            </div>
        </div>
    )
}