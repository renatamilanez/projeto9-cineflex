import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import "./style.css";
import loadingImage from "../assets/images/loading.gif"

export default function ListMovies({list, setList}){
	useEffect(() => {
		const promise = axios.get('https://mock-api.driven.com.br/api/v7/cineflex/movies');

		promise.then(res => {
			setList(res.data);
		});
	}, [setList]);

	if (list.length === 0){
		return(
			<div className='loading'>
				<img src={loadingImage} alt=''/>
			</div>
		);
	}

	return(
		<ul className="deck-movies">
			{list.map(movie => (
				<li key={movie.id}>        
					<div className="movie">
						<Link to={`filme/${movie.id}`}><img src={movie.posterURL} alt=''/></Link>
					</div>
				</li>
			))}
		</ul>
	);
}