import React, { Component } from "react";

function ListaPrimo(primo) {
    return <li key={primo.value.toString()} className="list-group-item">{primo.value}</li>;
}

function mostrarPrimos() {
    const primos = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113];
    const listaPrimos = primos.map((primo) => (
        <div className="container">
            <ListaPrimo key={primo.toString()} value={primo}/>
        </div>
    ));
    return(
        <ul className="list-group">{listaPrimos}</ul>
    );
}

export class Primos extends Component{
    state={
        mostrarPrimos:false
    }
    mostrarPrimos = () => {
        this.setState(prevState => {
          return { isClicked: !prevState.isClicked };
        });
        mostrarPrimos();
      };
    render(){
        return (
            <div>
               <button className="btn btn-danger" onClick={this.mostrarPrimos}>Mostrar Primos</button>
               {this.state.isClicked && mostrarPrimos()}
            </div>
        );
    }
}