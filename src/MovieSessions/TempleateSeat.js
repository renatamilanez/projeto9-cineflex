import "./style.css";

export default function TemplateSeat({number, selectedSeat, setSelectedSeat}){

    if(selectedSeat === 'selected'){
        console.log('caiu aqui')
        return(
            <div className={`seat selected`} onClick={() => setSelectedSeat(true)}>{number}</div>
        )
    }

    return (
        <div className={`seat available`} onClick={() => setSelectedSeat('selected')}>{number}</div>
    )
}