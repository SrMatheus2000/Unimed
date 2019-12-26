import React, { Component } from 'react';

class Helloworld extends Component {
  
  exibeMensagem = () => {
    alert( "Hello World" );
  }
  
  render() {
    return (
      // React.createElement("button",{className:{btn, btn-success}, onClick: this.exibeMensagem}, "Hello World")
      <button className="btn btn-danger" onClick={this.exibeMensagem}>
        Hello World
      </button>
    );
  }
}

export default Helloworld;