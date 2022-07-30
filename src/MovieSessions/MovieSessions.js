import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";

export default function MovieSessions(){
    const [seats, setSeats] = useState(null);
    const {sessionId} = useParams();
    console.log(sessionId);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sessionId}/seats`);

        promise.then(res => {
            setSeats(res.data);
        });
    }, []);

    if(seats === null){
        return(
            <p>Carregando...</p>
        )
    }
    console.log(seats)


    console.log(seats);

    return(
        <p>
            oi
        </p>
    )
}