
import ReactDOM from 'react-dom';
import React, { useState, Component } from 'react';
import ClassClock from './ClassClock';



function Clock() {
  
  let [ date, setDate ] = useState(new Date().toLocaleString());
  
  setInterval(() => {
    setDate(new Date().toLocaleString());
  },1000)

  


  return (
    <div>
      <h1>Hello World!</h1>
      <h2>It is { date }</h2>
    </div>
  )
}

class ToggleClassVer extends Component {
  constructor(props) {
    super(props) // this.props = props;
    // this.handleClick = this.handleClick.bind(this);
    this.state = { switched: false };
  }

  handleClick() {
    console.log(this);
    this.setState({ switched: !this.state.switched });
  }

  render() {
    console.log("its rendered again!");
    return (
      <button onClick={this.handleClick.bind(this)}>{ this.state.switched ? "on" : "off"}</button>
    )
  }
}

function Toggle() {

  const [switched, setSwitched] = useState(false);
  function handleClick() {
    setSwitched(!switched);
  }
  return (
    <button onClick={handleClick}>{ switched ? "on" : "off"}</button>
  )
}




ReactDOM.render(<Toggle />, document.getElementById('root'));

// setTimeout(() => {
//   ReactDOM.render(<div>Its Gone! check timer</div>, document.getElementById('root'));
// }, 5000)




