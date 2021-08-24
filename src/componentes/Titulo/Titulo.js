import React from 'react';
//import { Link } from 'react-router-dom';
import './Titulo.css'

export default function Titulo(props) {
    return (
        <div className="titulo">
            <h3> {props.texto}</h3>
        </div>
    )
}