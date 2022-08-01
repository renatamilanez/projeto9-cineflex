import "./style.css";
import {useState} from "react";

export default function OptionSeat({index, seat, userSeats, sucessionSeats}){
    const [selectedSeat, setSelectedSeat] = useState('available');

    if(seat.isAvailable === false){
        return(
            <div key={index} className={`seat unavailable`} onClick={() => alert ('Este assento não está disponível')}>{seat.name}</div>
        )
    }
    if(seat.isAvailable === true){ 
        if(selectedSeat === 'available'){
            return(
                    <div key={index} className={`seat available`} onClick={() => isSelected()}>{seat.name}</div>
            )
        } if(selectedSeat === 'selected'){

            return(
                    <div key={index} className={`seat selected`} onClick={() => isRemoved()}>{seat.name}</div>
            )
        }
    }

    function isSelected(){
        setSelectedSeat('selected');
        userSeats.ids.push(seat.id);
        sucessionSeats.push(seat.name);
    }

    function isRemoved(){
        setSelectedSeat('available');
        userSeats.ids = userSeats.ids.filter(item => item !== seat.id);
        sucessionSeats = sucessionSeats.filter(item => item !== seat.id);
    }
}