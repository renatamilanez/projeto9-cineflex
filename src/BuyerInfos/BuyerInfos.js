import "./style.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BuyerInfos({userSeats}){
	const [username, setUsername] = useState('');
	const [userID, setUserID] = useState('');
  const navigate = useNavigate();

	function handleForm(e){
		if(userID.length !== 11){
			return alert('Digite o CPF corretamente!');
		}
		
		if(userSeats.ids.length !== 0){
			e.preventDefault();
			userSeats.name = username;
			userSeats.cpf = userID;
			const promise = axios.post('https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many', userSeats);
			promise.then(res =>{
				navigate('/sucesso');
			});
		} else {
			alert('Selecione os seus assentos!');
		}
	}  

	return(
		<form onSubmit={handleForm}>
			<label htmlFor='username'>Nome do comprador:</label>
			<input id='username' placeholder="Digite o seu nome..." required onChange={(e) => setUsername(e.target.value)} value={username}/>
			<label htmlFor='UserID'>CPF do comprador:</label>
			<input id='UserID' placeholder="Digite o seu CPF..." type='number' required onChange={(e) => setUserID(e.target.value)} value={userID}/>
				<div className="submit-button">
					<button type='submit'>Reservar assento(s)</button>
				</div>
		</form> 
	);
}
