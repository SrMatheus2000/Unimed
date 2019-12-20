import React, {Component} from 'react';

export class Juros extends Component{
    state = {
        jurosCalculados:undefined
    }
    calculaJuro=()=>{
        let juros, 
            valor=parseFloat(this.refs.valor.value), 
            taxa=parseFloat(this.refs.taxa.value), 
            meses=parseFloat(this.refs.meses.value);
        for(let i=0; i<meses; i++){
            juros = valor * taxa;
            valor = valor + juros;
        }
        this.setState({
            jurosCalculados:valor
        })
    }
    render(){
        const {jurosCalculados} = this.state;
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
                ),
                React.createElement("button", {onClick: this.calculaJuro}, "Calcular Juros"),
                React.createElement("h4", null, jurosCalculados)
            )
        );
    }
}