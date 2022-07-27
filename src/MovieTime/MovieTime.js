import Title from "../Title/Title";
import Time from "./Time";
import Footer from "../Footer/Footer";

export default function MovieTime(){
    return (
        <div>
            <Title title='Selecione o horário'/>
            <Time weekday='Quinta-feira' date='24/06/2021' showtime='15:00'/>
            <Time weekday='Sexta-feira' date='25/06/2021' showtime='19:00'/>
            <Footer title='Enola Holmes'/>
        </div>
    )
}