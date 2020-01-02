import React, { Component } from 'react';

class Helloworld extends Component {
  
  exibeMensagem = () => {
    alert( "Hello World" );
  }
  
  render() {
    return (
      <button className="btn btn-danger" onClick={this.exibeMensagem}>
        Hello World
      </button>
    );
  }
}

export default Helloworld;