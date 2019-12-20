import React, { Component } from "react";

export class Menu extends Component{

    

    render(){
        return (
            <React.Fragment>
                <button onClick={this.menu="hello"}>Hello World</button>
                <button onClick={this.menu="Idade"}>Idade</button>
                <button>Juros</button>
                <button>30 Primos</button>
                <button>Triangulo</button>
            </React.Fragment>
        );
    };
}