import "./style.css";
import Title from "../Title/Title";
import ListMovies from "../ListMovies/ListMovies";

export default function Home({list, setList}){
    return(
        <>
            <Title title='Selecione o filme'/>
            <ListMovies list={list} setList={setList} />
        </>
    )
}