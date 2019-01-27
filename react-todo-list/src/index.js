import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// const TASKS = [''];

class App extends React.Component {

  // setting up the state to an array to store each new tasks

  constructor(props){
    super(props)
    this.state={items: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleChange(event) {
    this.setState({value: event.target.value});
}

handleSubmit(event) {
  alert(this.state.value);
  event.preventDefault();
}

// meant to iterate through each items in the list array and return the list elements.


  render() {
    return ( <div className = "main-container">
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <input type="submit" value='Submit'/>
        <ul>

        </ul>

      </div>
    );
  }
}
ReactDOM.render( < App /> , document.getElementById('root'));
