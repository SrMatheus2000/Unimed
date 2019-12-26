import React, { Component } from "react";


function ListItem(props){
    return <li className="list-group-item">{props.value}</li>;
}

function looped(){
    const primos = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113];
    const listItems = primos.map((data) =>(
        <div className="container">
            <ListItem  key={data.toString()} value={data}/>
        </div>
    ));
    return(
        <ul className="list-group">{listItems}</ul>
    );
}

export class Primos extends Component{
    state={
        mostrarPrimos:false
    }
    mostrarPrimos = () => {
        this.setState(prevState => {
        //   console.log(prevState);
          return { isClicked: !prevState.isClicked };
        });
        looped();
      };
    render(){
        return (
            // React.createElement("button", {onClick: this.mostrarPrimos}, "Mostrar Primos")
            // <React.Fragment>
            <div>
               <button className="btn btn-danger" onClick={this.mostrarPrimos}>Mostrar Primos</button>
               {this.state.isClicked &&looped()}
            </div>
            /* </React.Fragment> */
        );
    }
}