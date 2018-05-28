import React, { Component } from 'react'

export default class componentName extends Component {

    state = {
        todo: " ",
      }
    
      changTodo=(event) => {
        this.setState( {todo: event.target.value})
      }

      addListForm =(event) =>{
        event.preventDefault()
        const todo = this.state.todo
        if(todo){
          this.props.addList(todo)
          this.setState({ todo : '' })
        }
      }      
    

  render() {
    return (
      <div>
        <form onSubmit={this.addListForm} >
          <input
            type="text"
            value={this.state.todo}
            onChange={this.changTodo}
          />
          <button type="submit" >เพิ่ม</button>
      </form>
      </div>
    )
  }
}
