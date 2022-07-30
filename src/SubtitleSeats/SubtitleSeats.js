export default function SubtitleSeats(){
    return(
        <div className="subtitles">
        <div className="subtitle-icon">
            <div className={`seat selected`}></div>
            <p>Selecionado</p>
        </div>
        <div className="subtitle-icon">
            <div className={`seat available`}></div>
            <p>Disponível</p>
        </div>
        <div className="subtitle-icon">
            <div className={`seat unavailable`}></div>
            <p>Indisponível</p>
        </div>
    </div>
    )
}