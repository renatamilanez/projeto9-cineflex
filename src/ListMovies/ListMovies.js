import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Movie from "./Movie";
import "./style.css";

export default function ListMovies({list, setList}){
    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies');

        promise.then(res => {
            setList(res.data);
        });
    }, []);

    if (list.length === 0){
        return(
            <p>Carregando...</p>
        )
    }

    return(
        <ul className="deck-movies">
            {list.map(movie => <li key={movie.id}><Movie movie={movie}/></li>)}
        </ul>
    );
}