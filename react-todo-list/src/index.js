import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class App extends React.Component {

  // setting up the state to an array to store each new tasks

  constructor(props){
    super(props)
    this.state = {value: '',
                  list: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleChange(event) {
    this.setState({value: event.target.value});
}

 handleSubmit(event) {
  this.setState(state =>{
const list = state.list.concat(state.value);
return {
  list,
  value: ''
}
});
  event.preventDefault();

}

// meant to iterate through each items in the list array and return the list elements.

  render() {
    return ( <div className = "main-container">
    <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value='Submit' />
        </form>
        <ul>
          {this.state.list.map((task) =>
            <li key={task}>{task}</li>)}
        </ul>
      </div>
    );
  }
}
ReactDOM.render( < App /> , document.getElementById('root'));
