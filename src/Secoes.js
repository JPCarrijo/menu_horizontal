import '../src/componentes/Secoes.css';
import React from 'react';

export default function Secoes() {
  return (
    <>
      <div className="menu">
        <nav className="navMenu">
          <ul>
            <li><a href="#inicio" className="ini"> Home </a></li>
            <li><a href="#cursos" className="cur"> Cursos </a></li>
            <li><a href="#contatos" className="cont"> Contatos </a></li>
            <li><a href="#parceiros" className="parc"> Parceiros </a></li>
            <li><a href="#missao" className="mis"> Missão </a></li>
            <li><a href="#sobre" className="sob"> Sobre </a></li>
          </ul>
        </nav>
      </div>

      {/*<section id="inicio">
        <h2> Início </h2>
      </section>*/}
      <section id="inicio">
        <h2> Início </h2>
        <aside className="aside">
          <a href="#inicio" id="inicio2">Nosso Canal</a>
          <a href="#cursos" id="curso2">Cursos</a>
          <a href="#contatos" id="contatos2">Contatos</a>
          <a href="#parceiros" id="parceiros2">Parceiros</a>
          <a href="#missao" id="missao2">Missão</a>
          <a href="#sobre" id="sobre2">Sobre</a>
        </aside>
      </section>

      <section id="cursos">
        <h3> Cursos </h3>
      </section>

      <section id="contatos">
        <h3> Contatos </h3>
      </section>

      <section id="parceiros">
        <h3> Parceiros </h3>
      </section>

      <section id="missao">
        <h3> Missão </h3>
      </section>

      <section id="sobre">
        <h3> Sobre </h3>
      </section>
      <aside className="aside2">
        <a className="irTopo" href=".menu"> Topo </a>

        <a className="irInicio" href="#inicio"> Início </a>

        <a className="irCursos" href="#cursos"> Cursos </a>

        <a className="irContatos" href="#contatos"> Contatos </a>

        <a className="irParceiros" href="#parceiros"> Parceiros </a>

        <a className="irMissao" href="#missao"> Missão </a>

        <a className="irSobre" href="#sobre"> Sobre </a>
      </aside>

      <footer>
        <h3> Desenvolvido por João Paulo - <a href="https://site.fatecfranca.edu.br/" target="_blank"> Fatec Franca </a></h3>
      </footer>
    </>
  );
}

/*
  Seções:
    1 - início
    2 - cursos
    3 - contatos
    4 - parceiros
    5 - missão
    6 - rodapé - footer
*/