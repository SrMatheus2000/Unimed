import React, { Component } from 'react';

class Busca_Beneficiario extends Component {
   
  state={
    nome:undefined,
    dtNascimento:undefined,
    ativo:undefined,
    styleResposta: "none",
    styleTabela: "none",
    styleSpinner: "none"
  }
  
  testeEnter=(event) => {
    if (event.key === 'Enter') {
      this.buscaBeneficiario();
    }
  }
  
  buscaBeneficiario=() => {
    const data={
      acao: "buscaBeneficiario",
      idBenef: parseInt(this.refs.codigo.value)
    }
    this.comunica(data);
    this.setState({styleSpinner:"inline"});
  }

  comunica=(dados) => {
    fetch('http://192.168.2.25:8008/jUniIII/Integra', {
      method: 'POST',
      body: JSON.stringify(dados)
    }).then(resposta => resposta.json())
      .then(resposta => this.resolveBusca(resposta)  
     );
  }

  resolveBusca=(resposta) => {
    this.setState({
      styleTabela: "table",
      styleResposta: "inline",
      styleSpinner: "none"
    })
    if (resposta.status) {
      let nome = resposta.nome.toLowerCase().split(' ');
      for (let i = 0; i < nome.length; i++) {
        nome[i] = nome[i].charAt(0).toUpperCase() + nome[i].substring(1);     
      }
      nome = nome.join(' ');
      this.setState({nome: nome});
      resposta.ativo ? this.setState({ ativo: "Sim" }) : this.setState({ ativo: "Não" });
      let data = resposta.dtNascimento.split('-');
      data[2] = data[2].split(' ', 1);
      data[2] = data[2][0];
      this.setState({dtNascimento: (data[2] + '/' + data[1] + '/' + data[0])});
    } else {
      this.setState({styleTabela:"none"});
      alert( 'Erro: ' + resposta.dsErro );
    }
  }
  
  render() {
    return (
      <React.Fragment>
        <div className="container-sm">
          <div className="row">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">Código:</span>
              </div>
              <input type="number" ref="codigo" className="form-control" placeholder="Código" onKeyDown={this.testeEnter}/>
              <div className="input-group-append">
                <button onClick={this.buscaBeneficiario} className="btn btn-danger" id="procurar">Procurar</button>
              </div>
              <div className="spinner-border text-danger input-group-append" role="status" id="spinner" style={{display:this.state.styleSpinner}}>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
          <div className="row">
            <table className="table table-striped table-borderless table-hover table-dark" style={{display: this.state.styleTabela}}>
              <tbody>
                <tr>
                  <th itemScope="row">Nome:</th>
                  <td>{this.state.nome}</td>
                </tr>
                <tr>
                  <th itemScope="row">Ativo:</th>
                  <td>{this.state.ativo}</td>
                </tr>
                <tr>
                  <th itemScope="row">Data de Nascimento:</th>
                  <td>{this.state.dtNascimento}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Busca_Beneficiario;