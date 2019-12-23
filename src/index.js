import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Component } from 'react';
import Helloworld from './Hello_World';
import Idade from './Idade';
import {Menu} from './Menu';
import {Juros} from './Juros';
import {Primos} from './Primos';
import {Triangulo} from './Triangulo'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
// let exibeMensagem=()=>{
//     alert("Hello world");
// }

// const element = (
//     <button onClick={exibeMensagem}>Hello</button>

// );

// ReactDOM.render(element, document.getElementById('root'));


// ReactDOM.render(<App />, document.getElementById('root'));

const routing = (
    <Router>
      <div>
        <ul>
            <li>
                <Link to="/">Hello World</Link>
            </li>
            <li>
                <Link to="/Idade">Idade</Link>
            </li>
            <li>
                <Link to="/Juros">Juros</Link>
            </li>
            <li>
                <Link to="/Primos">Primos</Link>
            </li>
            <li>
                <Link to="/Triangulo">Triangulo</Link>
            </li>
        </ul>
        <Route exact path="/" component={Helloworld} />
        <Route path="/Idade" component={Idade} />
        <Route path="/Juros" component={Juros} />
        <Route path="/Primos" component={Primos} />
        <Route path="/Triangulo" component={Triangulo} />
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))


// ReactDOM.render(<Menu/>,document.getElementById('menu'));

// ReactDOM.render(<Helloworld/>,document.getElementById('hello'));
// ReactDOM.render(<Idade/>,document.getElementById('idade'));
// ReactDOM.render(<Juros/>,document.getElementById('juros'));
// ReactDOM.render(<Primos/>,document.getElementById('primos'));
// ReactDOM.render(<Triangulo/>,document.getElementById('triangulo'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
