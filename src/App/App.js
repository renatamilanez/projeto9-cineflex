import {useState} from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import "../assets/css/reset.css"
import "./style.css";
import Home from "../Home/Home";
import MovieTime from "../MovieTime/MovieTime";
import MovieSessions from "../MovieSessions/MovieSessions";
import SucessPage from "../SucessPage/SucessPage";

export default function App(){
	const [list, setList] = useState([]);
	const [sessions, setSessions] = useState(null);
	const [seats, setSeats] = useState(null);
	const [sucessionTime, setSucessionTime] = useState('');
	const sucessionSeats = [];

	let userSeats = {	
		ids: [],
		name: '',
		cpf: ''
	};

	return(
		<BrowserRouter>
			<Link to='/'>
				<div className="header">
					<h1>CINEFLEX</h1>
				</div>
			</Link>
			<Routes>
				<Route path='/' element={<Home list={list} setList={setList} />}/>
				<Route path='/filme/:idFilme' element={<MovieTime sessions={sessions} setSessions={setSessions} sucessionTime={sucessionTime} setSucessionTime={setSucessionTime}/>}/>
				<Route path='/sessao/:idSessao' element={<MovieSessions userSeats={userSeats} seats={seats} setSeats={setSeats} sucessionSeats={sucessionSeats}/>}/>
				<Route path='/sucesso' element={<SucessPage userSeats={userSeats} sessions={sessions} seats={seats} sucessionSeats={sucessionSeats} sucessionTime={sucessionTime} setSucessionTime={setSucessionTime}/>}/>
			</Routes>
		</BrowserRouter>
	);
}