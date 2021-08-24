import './App.css';
import React from 'react';
//import Secoes from './'
import Header from '../Header/Header.js'
import Inicio from '../Inicio/Inicio.js'
import Cursos from '../Cursos/Cursos.js'
import Contatos from '../Contatos/Contatos.js'
import Parceiros from '../Parceiros/Parceiros.js'
import Missao from '../Missao/Missao.js'
import Sobre from '../Sobre/Sobre.js'
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <>
      <Header />

      <main>
        <Switch>
          <Route exact path="/" render={(props) => <Inicio />}></Route>
          <Route exact path="/cursos" render={(props) => <Cursos />}></Route>
          <Route exact path="/contatos" render={(props) => <Contatos />}></Route>
          <Route exact path="/parceiros" render={(props) => <Parceiros />}></Route>
          <Route exact path="/missao" render={(props) => <Missao />}></Route>
          <Route exact path="/sobre" render={(props) => <Sobre />}></Route>
        </Switch>
      </main>

      {/*<Titulo />*/}
    </>
  );
}

export default App;
