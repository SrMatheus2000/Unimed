import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Helloworld from './Hello_World';
import Idade from './Idade';
import {Juros} from './Juros';
import {Primos} from './Primos';
import {Triangulo} from './Triangulo'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Not_Found from './Not_Found'
import 'bootstrap/dist/css/bootstrap.css';
import Busca_Beneficiario from './Busca_Beneficiario'

const routing = (
    <Router>
      <div className="container">
        <ul className="list-inline">
            <li className="btn">
                <Link className="btn btn-success" to="/">Hello World</Link>
            </li>
            <li className="btn">
                <Link className="btn btn-success" to="/Idade">Idade</Link>
            </li>
            <li className="btn">
                <Link className="btn btn-success" to="/Juros">Juros</Link>
            </li>
            <li className="btn">
                <Link className="btn btn-success" to="/Primos">Primos</Link>
            </li>
            <li className="btn">
                <Link className="btn btn-success" to="/Triangulo">Triangulo</Link>
            </li>
            <li className="btn">
                <Link className="btn btn-success" to="/Busca_Beneficiario">Busca Beneficiário</Link>
            </li>
        </ul>
        <Switch>
            <Route exact path="/" component={Helloworld} />
            <Route path="/Idade" component={Idade} />
            <Route path="/Juros" component={Juros} />
            <Route path="/Primos" component={Primos} />
            <Route path="/Triangulo" component={Triangulo} /> 
            <Route path="/Busca_Beneficiario" component={Busca_Beneficiario} /> 
            <Route component={Not_Found} />
        </Switch>
      </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

serviceWorker.unregister();
