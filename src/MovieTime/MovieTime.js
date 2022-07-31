import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from "axios";
import Title from "../Title/Title";
import Time from "./Time";
import Footer from "../Footer/Footer";

export default function MovieTime(){
    const [sessions, setSessions] = useState(null);
    const {idFilme} = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`);

        promise.then(res => {
            setSessions(res.data);
        });
    }, []);

    if(sessions === null){
        return(
            <p>Carregando...</p>
        )
    }

    const movieSessions = sessions.days;

    return (
            <div>
                <Title title='Selecione o horário'/>
                {movieSessions.map((session, index) => (
                    <Time key={index} session={session}/>
                ))}
                <Footer title={sessions.title} poster={sessions.posterURL}/>
            </div>
    )
}