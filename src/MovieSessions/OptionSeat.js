import "./style.css";
import {useState} from "react";

export default function OptionSeat({index, seat}){
    const [selectedSeat, setSelectedSeat] = useState('available');

    if(seat.isAvailable === false){
        return(
            <div key={index} className={`seat unavailable`}>{seat.name}</div>
        )
    }
    if(seat.isAvailable === true){ 
        if(selectedSeat === 'available'){
            return(
                    <div key={index} className={`seat available`} onClick={() => setSelectedSeat('selected')}>{seat.name}</div>
            )
        } if(selectedSeat === 'selected'){
            return(
                    <div key={index} className={`seat selected`} onClick={() => setSelectedSeat('available')}>{seat.name}</div>
            )
        }
    }
}