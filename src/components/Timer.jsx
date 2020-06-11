import React, { Component } from 'react'

export default class Timer extends Component {
  constructor(props){
    super(props)
    this.state=({
      timer: 3,
    })
    this.countDown = this.countDown.bind(this);
  }

  componentDidMount(){
    setInterval(this.countDown, 1000)
  }

  countDown() {
    if (this.state.timer <= 0) { 
      clearInterval(this.timer);
    }
    if (this.state.timer > 0) {
      this.setState({
      timer: this.state.timer - 1,
    });
    }
  }
  render() {
    return (
      <div>
        <p>{this.state.timer}</p>
      </div>
    )
  }
}
