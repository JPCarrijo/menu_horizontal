import React from 'react';
import Titulo from '../Titulo/Titulo.js';
//import { Link } from 'react-router-dom';
import './Contatos.css'
import ContatosHeader from '../Contatos/ContatosHeader.js'

export default function Contatos() {
    return (
        <>
            <ContatosHeader />
            <Titulo texto="Sessão de Contatos!" />
            <div className="contatos">
                
            </div>
        </>
    )
}