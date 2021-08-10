import '../src/componentes/App.css';
import React from 'react';

function App() {
  return (
    <>
      <header className="corpo"> 
        <nav className="menu">
          <ul>
            <li><a href=".inicio"> Home </a></li>
            <li><a href=".cursos"> Cursos </a></li>
            <li><a href=".contatos"> Contatos </a></li>
            <li><a href=".parceiros"> Parceiros </a></li>
            <li><a href=".missao"> Missão </a></li>
            <li><a href=".sobre"> Sobre </a></li>
          </ul>
        </nav>
      </header>

      <section className="inicio">
        <h2> Início </h2>
      </section>

      <section className="cursos">
        <h3> Cursos </h3>
      </section>

      <section className="contatos">
        <h3> Contatos </h3>
      </section>

      <section className="parceiros">
        <h3> Parceiros </h3>
      </section>

      <section className="missao">
        <h3> Missão </h3>
      </section>

      <section className="sobre">
        <h3> Sobre </h3>
      </section>
    </>
  );
}

export default App;
/*
  Seções:
    1 - início
    2 - cursos
    3 - contatos
    4 - parceiros
    5 - missão
    6 - rodapé - footer
*/