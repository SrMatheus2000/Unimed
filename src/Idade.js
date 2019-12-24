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
        });
        document.getElementById("idade").style.display="inline";
    }
    render(){
        const { idade } = this.state;
        return(
            <React.Fragment>
                <div className="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="">Seu ano de nascimento:</span>
                    </div>
                    <input type="number" ref="ano" name="ano" className="form-control" placeholder="Seu Ano de Nascimento Aqui"/>
                    <div class="input-group-append">
                        <button className="btn btn-danger" onClick={this.calculaIdade}>Calcular Idade</button>
                    </div>
                </div>
                
                <h3 id="idade" style={{display:"none"}}>Sua idade é de {idade} anos</h3>
            </React.Fragment>
            // React.createElement("div", null,
            //     React.createElement("input", {type:"number", ref:"ano", name:"ano", placeholder:"Data de Nascimento"}, null),
            //     React.createElement("button", {onClick: this.calculaIdade}, "Calcular idade"),
            //     React.createElement("h4", null, idade)
            // )
        );
    }
}

export default Idade;