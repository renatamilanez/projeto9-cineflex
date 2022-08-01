import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from "axios";
import Title from "../Title/Title";
import Time from "./Time";
import Footer from "../Footer/Footer";
import loadingImage from "../assets/images/loading.gif";

export default function MovieTime({sessions, setSessions, sucessionTime, setSucessionTime}){
    const {idFilme} = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`);

        promise.then(res => {
            setSessions(res.data);
        });
    }, []);

    if(sessions === null){
        return(
            <div className="loading">
                <img src={loadingImage} alt=''/>
            </div>
        )
    }

    const movieSessions = sessions.days;

    return (
            <div>
                <Title title='Selecione o horário'/>
                {movieSessions.map((session, index) => (
                    <Time key={index} session={session} setSucessionTime={setSucessionTime}/>
                ))}
                <Footer title={sessions.title} poster={sessions.posterURL}/>
            </div>
    )
}