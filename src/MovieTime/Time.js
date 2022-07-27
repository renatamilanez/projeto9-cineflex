import "./style.css";

export default function Time({weekday, date, showtime}){
    return(
        <div className="time">
            <p>{weekday} - {date}</p>
            <div>
                <button>{showtime}</button>
                <button>{showtime}</button>
            </div>
        </div>
    )
}