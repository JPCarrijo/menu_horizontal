import React from 'react';
import Titulo from '../Titulo/Titulo.js';
//import { Link } from 'react-router-dom';
import './Cursos.css';
import CursosHeader from './CursosHeader.js';

export default function Cursos() {
    return (
        <>
            <CursosHeader />
            <Titulo texto="Sessão de Cursos!" />

            <div className="cursos">

            </div>
        </>
    )
}