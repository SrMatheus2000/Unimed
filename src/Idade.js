import React, { Component } from "react";

class Idade extends Component{

    state = {
        idade:undefined
    }

    calculaIdade=()=>{
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
            // <React.Fragment>
                // <input type="number" ref="ano" name="ano"/>
                // <button onClick={this.calculaIdade}>Calcular Idade</button>
                // <h2>{idade}</h2>
            // </React.Fragment>
            React.createElement("div", null,
                React.createElement("input", {type:"number", ref:"ano", name:"ano", placeholder:"Data de Nascimento"}, null),
                React.createElement("button", {onClick: this.calculaIdade}, "Calcular idade"),
                React.createElement("h4", null, idade)
            )
        );
    }
}

export default Idade;