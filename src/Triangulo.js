import React, { Component } from "react";

export class Triangulo extends Component{
    state = {
        eRetangulo:undefined
    }

    testeEnter = (event) => {
        if (event.key === 'Enter') {
            this.checaRetangulo();
        }
    }

    checaRetangulo=()=>{
        let aresta1=parseInt(this.refs.aresta1.value), 
            aresta2=parseInt(this.refs.aresta2.value), 
            aresta3=parseInt(this.refs.aresta3.value);

        if (aresta1 >= aresta2 && aresta1 >= aresta3) {
            if (Math.sqrt(aresta2*aresta2+aresta3*aresta3)===aresta1) {
                this.setState({
                    eRetangulo:'É um triangulo Retangulo'
                })
            } else {
                this.setState({
                    eRetangulo:'Não é um triangulo Retangulo'
                })
            }
        } else if (aresta2 >= aresta1 && aresta2 >= aresta3) {
            if (Math.sqrt(aresta1*aresta1+aresta3*aresta3)===aresta2) {
                this.setState({
                    eRetangulo:'É um triangulo Retangulo'
                })
            } else {
                this.setState({
                    eRetangulo:'Não é um triangulo Retangulo'
                })
            }
        } else if (aresta3 >= aresta1 && aresta3 >= aresta2) {
            if (Math.sqrt(aresta2*aresta2+aresta1*aresta1)===aresta3) {
                this.setState({
                    eRetangulo:'É um Triângulo Retângulo'
                })
            } else {
                this.setState({
                    eRetangulo:'Não é um Triângulo Retângulo'
                })
            }
        } 
    }

    render(){
        const {eRetangulo} = this.state;
        return(
            <React.Fragment>
                <label htmlFor="basic-url">Aresta 1:</label>
                <div className="input-group mb-3">
                    <input type="number" className="form-control" placeholder="Aresta 1" ref="aresta1" onKeyDown={this.testeEnter}/>
                </div>
                <label htmlFor="basic-url">Aresta 2:</label>
                <div className="input-group mb-3">
                    <input type="number" className="form-control" placeholder="Aresta 2" ref="aresta2" onKeyDown={this.testeEnter}/>
                </div>
                <label htmlFor="basic-url">Aresta 3:</label>
                <div className="input-group mb-3">
                    <input type="number" className="form-control" placeholder="Aresta 3" ref="aresta3" onKeyDown={this.testeEnter}/>
                    < div className = "input-group-append" >
                        <button className="btn btn-danger" onClick={this.checaRetangulo}>Calcular se o Triângulo Formado é um Triângulo Retângulo</button>
                    </div>
                </div>
                <h4>{eRetangulo}</h4>
            </React.Fragment>
        );
    }
}