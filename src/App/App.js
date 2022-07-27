import {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import "../assets/css/reset.css"
import "./style.css";
import ListMovies from "../ListMovies/ListMovies";


export default function App(){
    const [list, setList] = useState([]);

    return(
        <BrowserRouter>
            <div className="header">
                <h1>CINEFLEX</h1>
            </div>
            <Routes>
                <Route path='/' element={<Home list={list} setList={setList} />}/>
            </Routes>
        </BrowserRouter>
    )
}