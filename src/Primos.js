import React, { Component } from "react";

export class Primos extends Component{

    mostrarPrimos(){
        <ul>        
            {      
                primos.map((val, index) => {
                    return (
                        <li key={index}>
                        { val }
                        </li>
                    );
                })
            }
        </ul>
    }

    render(){
        let primos = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113];
        return (
            // React.createElement("button", {onClick: this.mostrarPrimos}, "Mostrar Primos"),
            
            <React.Fragment>
                <button onClick={this.mostrarPrimos}>Mostrar Primos</button>
                
            </React.Fragment>
        );
    }
}