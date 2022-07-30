import "./style.css";

export default function BuyerInfos(){
    return(
        <form>
            <label for=''>Nome do comprador:</label>
            <input placeholder="Digite o seu nome..." required/>
            <label>CPF do comprador:</label>
            <input placeholder="Digite o seu CPF..." type='number' required/>
            <div className="submit-button">
            <button type='submit'>Reservar assento(s)</button>
            </div>
        </form>
    )
}