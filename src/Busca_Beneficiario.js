import React, { Component } from 'react';

class Busca_Beneficiario extends Component {
  
  buscaBeneficiario = () => {
    let codigo = document.getElementById( "codigo" ).value;
    const data = {
      acao: "buscaBeneficiario",
      idBenef: codigo 
    }
    this.comunica( data );
  }

  comunica = ( dados ) => {
    // console.log( 'vou enviar: ', dados );
    document.getElementById("spinner").style.display = "inline";
    fetch('http://192.168.2.25:8008/jUniIII/Integra', {
      method: 'POST',
      body: JSON.stringify( dados )
    }).then( res => res.json())
      // .then(document.getElementById("spinner").style.display = "none")
      // .then(document.getElementById("tabela").style.display = "table")
      .then( resposta => this.resolveBusca( resposta )    
     );
    document.getElementById("spinner").style.display = "none";
    document.getElementById("tabela").style.display = "table";
  }

  resolveBusca = ( resposta ) => {
    // console.log('reposta do servidor: ', resposta );
    if( resposta.status ) {
      let nome = resposta.nome.toLowerCase().split(' ');
      for (let i = 0; i < nome.length; i++) {
        nome[i] = nome[i].charAt(0).toUpperCase() + nome[i].substring(1);     
      }
      nome = nome.join(' '); 
      document.getElementById('nome').innerHTML = nome;
      if (resposta.ativo) {
        document.getElementById('ativo').innerHTML = 'Sim';
      } else {
        document.getElementById('ativo').innerHTML = 'Não';
      }
      let data = resposta.dtNascimento.split('-');
      data[2] =  data[2].split(' ', 1);
      data[2] = data[2][0];
      // console.log(data);
      document.getElementById('dNascimento').innerHTML = data[2] + '/' + data[1] + '/' + data[0];
    } else {
      document.getElementById("tabela").style.display = "none";
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
              <input type="number" id="codigo" className="form-control" placeholder="Código"/>
              <div className="input-group-append">
                <button onClick={this.buscaBeneficiario} className="btn btn-danger">Procurar</button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="spinner-border text-success" role="status" id="spinner" style={{display:'none'}}>
              <span className="sr-only">Loading...</span>
            </div>
            <table className="table table-striped table-borderless table-hover table-dark" id="tabela" style={{display:'none'}}>
              <tbody>
                <tr>
                  <th itemScope="row">Nome:</th>
                  <td id="nome"></td>
                </tr>
                <tr>
                  <th itemScope="row">Ativo:</th>
                  <td id="ativo"></td>
                </tr>
                <tr>
                  <th itemScope="row">Data de Nascimento:</th>
                  <td id="dNascimento"></td>
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