import "./style.css";

export default function Footer({poster, title, time, weekday}){
	return(
		<div className="footer">
			<div className="movie-resume">
				<img src={poster} alt=''/>
			</div>
			<div className="resume-movie">
				<h4>{title}</h4>
				<h4>{weekday} - {time}</h4>
			</div>
		</div>
	);
}