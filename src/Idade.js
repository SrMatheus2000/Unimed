import React, { Component } from "react";


class Idade extends Component{

    state = {
        idade:undefined
    }

    calculaIdade=(ano)=>{
        // alert(2019 - this.refs.ano.value);
        //let idade = 2019 - this.refs.ano.value;
        let d = new Date();
        let data = d.getFullYear();

        this.setState({
            idade: data - this.refs.ano.value
        })
    }
    render(){
        
        const { idade } = this.state;

        return(
            React.createElement("div", null,
                React.createElement("input", {type:"number", ref:"ano", name:"ano"}, null),
                React.createElement("button", {onClick: this.calculaIdade}, "Calcular idade"),
                React.createElement("h4", null, idade)
            )
        );
    }
}

export default Idade;