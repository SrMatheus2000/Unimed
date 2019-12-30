import React, { Component } from "react"

class Idade extends Component{
    state = {
        idade:undefined,
        styleResposta:"none"
    }

    testeEnter = (event) => {
        if (event.key === 'Enter') {
            this.calculaIdade();
        }
    }

    calculaIdade=()=>{
        // console.log(2019 - this.refs.ano.value);
        let d = new Date()
        let data = d.getFullYear()
        this.setState({
            idade: data - this.refs.ano.value
        });
        // document.getElementById("idade").style.display="inline";
        this.setState({styleResposta: "inline"})
    }

    render(){
        const { idade } = this.state;
        return(
            <React.Fragment>
                <div className="input-group mb-3">
                    < div className = "input-group-prepend" >
                        <span className="input-group-text" id="">Seu ano de nascimento:</span>
                    </div>
                    <input type="number" ref="ano" className="form-control" placeholder="Seu Ano de Nascimento Aqui" onKeyDown={this.testeEnter}/>
                    < div className = "input-group-append" >
                        <button className="btn btn-danger" onClick={this.calculaIdade}>Calcular Idade</button>
                    </div>
                </div>
                <h3 id="idade" style={{display: this.state.styleResposta}}>Sua idade é de {idade} anos</h3>
            </React.Fragment>
            // React.createElement("div", null,
            //     React.createElement("input", {type:"number", ref:"ano", placeholder:"Data de Nascimento"}, null),
            //     React.createElement("button", {onClick: this.calculaIdade}, "Calcular idade"),
            //     React.createElement("h4", null, idade)
            // )
        );
    }
}

export default Idade;