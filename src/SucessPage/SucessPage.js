import "./style.css";
import { Link } from "react-router-dom";

export default function SucessPage({seats, userSeats, sessions, sucessionSeats, sucessionTime}){
    console.log(sucessionTime);
    return(
        <div className="main-container">
            <h4>Pedido feito<br/>com sucesso!</h4>
            <div className="confirmation-data">
                <h5>Filme e sessão</h5>
                <h6>{sessions.title}</h6>
                <h6>{seats.day.date} {sucessionTime}</h6>
            </div>
            <div className="confirmation-data">
                <h5>Ingressos</h5>
                {sucessionSeats.map((number, index) => {
                    return(
                    <h6 key={index}>Assento {number}</h6>
                    )
                })}
            </div>
            <div className="confirmation-data">
                <h5>Comprador</h5>
                <h6>Nome: {userSeats.name}</h6>
                <h6>CPF: {userSeats.cpf}</h6>
            </div>
            <Link to='/'>
                <button>Voltar para Home</button>
            </Link>
        </div>
    )
}