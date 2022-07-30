import {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "../assets/css/reset.css"
import "./style.css";
import Home from "../Home/Home";
import MovieTime from "../MovieTime/MovieTime";
import MovieSessions from "../MovieSessions/MovieSessions";


export default function App(){
    const [list, setList] = useState([]);

    return(
        <BrowserRouter>
            <div className="header">
                <h1>CINEFLEX</h1>
            </div>
            <Routes>
                <Route path='/' element={<Home list={list} setList={setList} />}/>
                <Route path='/filme/:movieId' element={<MovieTime list={list} setList={setList}/>}/>
                <Route path='/sessao/:sessionId' element={<MovieSessions/>}/>
            </Routes>
            </BrowserRouter>
    )
}