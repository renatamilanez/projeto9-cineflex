import "./style.css";
import { Link } from "react-router-dom";

export default function SucessPage(){
    return(
        <div className="main-container">
            <h4>Pedido feito<br/>com sucesso!</h4>
            <div className="confirmation-data">
                <h5>Filme e sessão</h5>
                <h6>Enola Homes</h6>
                <h6>24/06/2021 15:00</h6>
            </div>
            <div className="confirmation-data">
                <h5>Ingressos</h5>
                <h6>Assento 15</h6>
                <h6>Assento 16</h6>
            </div>
            <div className="confirmation-data">
                <h5>Comprador</h5>
                <h6>Nome: Renata Milanez</h6>
                <h6>CPF: 124.612.337-13</h6>
            </div>
            <Link to='/'>
                <button>Voltar para Home</button>
            </Link>
        </div>
    )
}