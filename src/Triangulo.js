import React, { Component } from "react";

export class Triangulo extends Component{
    state = {
        eRetangulo:undefined
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
                <label for="basic-url">Aresta 1:</label>
                <div className="input-group mb-3">
                    <input type="number" className="form-control" placeholder="Aresta 1" ref="aresta1" name="aresta1"/>
                </div>
                <label for="basic-url">Aresta 2:</label>
                <div className="input-group mb-3">
                    <input type="number" className="form-control" placeholder="Aresta 2" ref="aresta2" name="aresta2"/>
                </div>
                <label for="basic-url">Aresta 3:</label>
                <div className="input-group mb-3">
                    <input type="number" className="form-control" placeholder="Aresta 3" ref="aresta3" name="aresta3"/>
                    <div class="input-group-append">
                        <button className="btn btn-danger" onClick={this.checaRetangulo}>Calcular se o Triângulo Formado é um Triângulo Retângulo</button>
                    </div>
                </div>
                <h4>{eRetangulo}</h4>
            </React.Fragment>            
            // React.createElement("div", null,
            // React.createElement(
            //     "input", {
            //         type:"number", 
            //         placeholder:"Aresta 1", 
            //         ref:"aresta1", 
            //         name:"aresta1"
            //     }, null
            // ),
            // React.createElement(
            //     "input", {
            //         type:"number", 
            //         placeholder:"Aresta 2", 
            //         ref:"aresta2", 
            //         name:"aresta2"
            //     }, null
            // ),
            // React.createElement(
            //     "input", {
            //         type:"number", 
            //         placeholder:"Aresta 3", 
            //         ref:"aresta3", 
            //         name:"aresta3"
            //     }, null
            // ),
            // React.createElement("button", {onClick: this.checaRetangulo}, "É Retangulo"),
            // React.createElement("h4", null, eRetangulo)
            // )
        );
    }
}