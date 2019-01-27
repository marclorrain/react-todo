import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class App extends React.Component {

  constructor(props){
    super(props)
    this.state={items: ['']};

    this.handleChange = this.handleChange.bind(this);
    this.handSubmit = this.handleSubmit.bind(this);
  }

handleChange(event) {
  this.setState({value: event.target.value});
}

handleSubmit(event) {
this.state.items.push(this.state.value);
event.preventDefault();
}

listBuilder(){
  for (let listItems of this.state.items){
    return <li> {this.state.items[listItems]} </li>
  }
}

  render() {
    return ( <div className = "main-container">
        <input type="text" value={this.state.value} onChange={this.handleChange}></input>
        <input type="submit" onClick={this.handleSubmit}></input>
        <ul>
          <listBuilder />
        </ul>

      </div>
    );
  }
}
ReactDOM.render( < App /> , document.getElementById('root'));
