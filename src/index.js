import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Helloworld from './Hello_World';
import Idade from './Idade';
import {Juros} from './Juros';
import {Primos} from './Primos';
import {Triangulo} from './Triangulo';
import Busca_Beneficiario from './Busca_Beneficiario'
import Not_Found from './Not_Found';

const routing = (
    <Router>
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 btn-toolbar">
                        <div className="btn-group btn-group-lg" style={{marginBottom:20}}>
                            <Link className="btn btn-success" to="/">Hello World</Link>
                            <Link className="btn btn-success" to="/Idade">Idade</Link>
                            <Link className="btn btn-success" to="/Juros">Juros</Link>
                            <Link className="btn btn-success" to="/Primos">Primos</Link>
                            <Link className="btn btn-success" to="/Triangulo">Triangulo</Link>
                            <Link className="btn btn-success" to="/Busca_Beneficiario">Busca Beneficiário</Link>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
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
                    <div className="col-md-2"></div>
                </div>
            </div>
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

serviceWorker.unregister();
