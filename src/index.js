import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Component } from 'react';
import Helloworld from './Hello_World';
import Idade from './Idade';
import {Menu} from './Menu';

// let exibeMensagem=()=>{
//     alert("Hello world");
// }

// const element = (
//     <button onClick={exibeMensagem}>Hello</button>

// );

// ReactDOM.render(element, document.getElementById('root'));


// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Menu/>,document.getElementById('menu'));

ReactDOM.render(<Helloworld/>,document.getElementById('hello'));
ReactDOM.render(<Idade/>,document.getElementById('idade'));
// ReactDOM.render(<Idade/>,document.getElementById('juros'));
// ReactDOM.render(<Idade/>,document.getElementById('primos'));
// ReactDOM.render(<Idade/>,document.getElementById('triangulo'));














// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
