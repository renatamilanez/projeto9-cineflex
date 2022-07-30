import {useState} from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import "../assets/css/reset.css"
import "./style.css";
import Home from "../Home/Home";
import MovieTime from "../MovieTime/MovieTime";
import MovieSessions from "../MovieSessions/MovieSessions";
import SucessPage from "../SucessPage/SucessPage";

export default function App(){
    const [list, setList] = useState([]);

    return(
        <BrowserRouter>
            <Link to='/'>
                <div className="header">
                    <h1>CINEFLEX</h1>
                </div>
            </Link>
            <Routes>
                <Route path='/' element={<Home list={list} setList={setList} />}/>
                <Route path='/filme/:idFilme' element={<MovieTime list={list} setList={setList}/>}/>
                <Route path='/sessao/:idSessao' element={<MovieSessions/>}/>
                <Route path='/sucesso' element={<SucessPage />}/>
            </Routes>
            </BrowserRouter>
    )
}