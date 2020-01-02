import React, {Component} from 'react';

export class Juros extends Component{
    state = {
        jurosCalculados:undefined,
        styleResposta: "none"
    }

    testeEnter = (event) => {
        if (event.key === 'Enter') {
            this.calculaJuro();
        }
    }

    calculaJuro=()=>{
        let juros, 
            valor=parseFloat(this.refs.valor.value), 
            taxa=parseFloat(this.refs.taxa.value)/100, 
            meses=parseFloat(this.refs.meses.value);
        for(let i=0; i<meses; i++){
            juros = valor * taxa;
            valor = valor + juros;
        }
        this.setState({
            jurosCalculados: valor.toFixed(2)
        });
        this.setState({
            styleResposta: "inline"
        });
    }

    render(){
        return(
            <React.Fragment>
                < label htmlFor = "basic-url" > Valor Investido: </label>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3">R$:</span>
                    </div>
                    <input type="number" className="form-control" placeholder="Valor" ref="valor" onKeyDown={this.testeEnter}/>
                </div>
                <label htmlFor="basic-url">Taxa de Juros:</label>
                <div className="input-group mb-3">
                    <input type="number" className="form-control" placeholder="Taxa" ref="taxa" onKeyDown={this.testeEnter}/>
                    <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon3">%</span>
                    </div>
                </div>
                < label htmlFor = "basic-url" > Duração: </label>
                <div className="input-group mb-3">
                    <input type="number" className="form-control" placeholder="Meses" ref="meses" onKeyDown={this.testeEnter}/>
                    < div className = "input-group-append" >
                        <button className="btn btn-danger" onClick={this.calculaJuro}>Calcular Juros</button>
                    </div>
                </div>                    
                    <h4 style={{display: this.state.styleResposta}}>O Valor final é de R$ {this.state.jurosCalculados}</h4>             
            </React.Fragment>
        );
    }
}