import React, { Component } from 'react';

class Helloworld extends Component {
  exibeMensagem = () => {
    alert( "Hello World" );
  }
  render() {
    return (
      React.createElement("button",{onClick: this.exibeMensagem}, "Hello World")
    );
  }
}

export default Helloworld;