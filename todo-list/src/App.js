import React, { Component } from 'react';
import FormAdd from './FormAdd.js'
import './app.css';

class App extends Component {

  state = {
    list: ['a', 'b', 'c'],
  }

  componentDidMount = () => {
    alert('ok')
  }

  addList = (todo) => {
    const list = this.state.list
    list.push(todo)
    this.setState({
      list,
    })
  }

  render() {
    return (
      <div className="app">
        <h1>My Todo List</h1>
        <ul className="list">
          {
            this.state.list.map((val, index) =>
              <li key={index}>{val}</li>
            )
          }
        </ul>
        <FormAdd addList={this.addList} />
      </div>
    );
  }
}

export default App;
