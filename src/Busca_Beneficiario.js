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
      .then(document.getElementById("spinner").style.display = "none")
      .then(document.getElementById("tabela").style.display = "table")
      .then( resposta => this.resolveBusca( resposta )    
     );
  }
  resolveBusca = ( resposta ) => {
    // console.log('reposta do servidor: ', resposta );
    if( resposta.status ) {
      // document.getElementById( 'resp' ).innerHTML = resposta.nome + '<br /> Ativo: ' + resposta.ativo + '<br /> Nascimento: ' + resposta.dtNascimento;
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
      // document.getElementById( 'resp' ).innerHTML = '';
      alert( 'Erro: ' + resposta.dsErro );
    }
  }
  render() {
    return (
      <React.Fragment>
        {/* <div class="container">
           <div class="row">
             <div class="col-sm-1"></div>
             <div class="col-sm-2">Código:</div>
             <div class="col-sm_9"><input type="text" id="codigo" class="form-control"/></div>
           </div>
           <div class="row">
             <div class="col-sm-3"></div>
             <div class="col-sm-9"><button onClick={this.buscaBeneficiario} class="btn btn-outline-success">Procura</button></div>
           </div>
           <div class="row">
             <span id='resp'></span>
           </div>
         </div> */}
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
            <div class="spinner-border text-success" role="status" id="spinner" style={{display:'none'}}>
              <span class="sr-only">Loading...</span>
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
            {/* <span id='resp'></span> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Busca_Beneficiario;