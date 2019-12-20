import React, {Component} from 'react';

export class Juros extends Component{
    render(){
        return(
            React.createElement("div", null,
                React.createElement(
                    "input", {
                        type:"number", 
                        placeholder:"Valor Investido", 
                        ref:"valor", 
                        name:"valor"
                    }, null
                ),
                React.createElement(
                    "input", {
                        type:"number", 
                        placeholder:"Taxa de Juros", 
                        ref:"taxa", 
                        name:"taxa"
                    }, null
                ),
                React.createElement(
                    "input", {
                        type:"number", 
                        placeholder:"Meses", 
                        ref:"meses", 
                        name:"meses"
                    }, null
                )
            )
        );
    }
}