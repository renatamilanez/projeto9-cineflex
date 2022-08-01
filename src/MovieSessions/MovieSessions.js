import { useParams } from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";
import Title from "../Title/Title";
import Footer from "../Footer/Footer";
import "./style.css";
import SubtitleSeats from "../SubtitleSeats/SubtitleSeats";
import BuyerInfos from "../BuyerInfos/BuyerInfos";
import loadingImage from "../assets/images/loading.gif";
import OptionSeat from "./OptionSeat";

export default function MovieSessions({userSeats, seats, setSeats, sucessionSeats}){
    const {idSessao} = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);

        promise.then(res => {
            setSeats(res.data);
        });
    }, []);

    if(seats === null){
        return(
            <div className="loading">
                <img src={loadingImage} alt=''/>
            </div>
        )
    }

    const listSeats = seats.seats;

    return(
        <>
        <div className="container-seats">
            <Title title='Selecione o(s) assento(s)'/>
                <div className="list-seats">
                    {listSeats.map((seat, index) => {
                        return(
                        <OptionSeat userSeats={userSeats} key={index} index={index} seat={seat} sucessionSeats={sucessionSeats}/>
                        )})}  
                </div> 
        </div>
            <SubtitleSeats/>
            <BuyerInfos userSeats={userSeats}/>
            <Footer title={seats.movie.title} weekday={seats.day.weekday} date={seats.day.date} poster={seats.movie.posterURL}/>
        </>
    )
}