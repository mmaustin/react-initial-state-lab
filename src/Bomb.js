import React, { Component } from 'react';

export default class Bomb extends Component {

    constructor(props){
        super();
        this.state = {
            secondsLeft: props.initialCount,
        };
    }

    /*increment = () => {
        const newCount = this.state.count + 1;
        this.setState({
          count: newCount,
        });
      };*/

      countdown = () => {
          if (this.state.secondsLeft === 120) {
              return <p>{this.state.secondsLeft} seconds left before I go boom!</p>
          }
          else if (this.state.secondsLeft === 0){
            return <p>Boom!</p>
          }
      }

    render(){
        return <span>{this.countdown()}</span>
    }

}

/*
class MyComp extends React.Component {
  // we use the constructor to set the INITIAL STATE
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  // our increment method makes use of the 'setState' method, which is what we use to alter state
  increment = () => {
    const newCount = this.state.count + 1;
    this.setState({
      count: newCount,
    });
  };

  render() {
    return <div onClick={this.increment}>{this.state.count}</div>;
  }
}
*/