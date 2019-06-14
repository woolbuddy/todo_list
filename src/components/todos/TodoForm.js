import React, { Component } from 'react';

class TodoForm extends Component {
  state = { name: '' }

  handleChange = (e) => {
    const {name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    // stop the page reloading
    e.preventDefault();
    // add the item to the todos array
    this.props.addItem(this.state.name)
    // clear out the form
    this.setState({ name: ""})
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
        required 
        placeholder='add a todo here' 
        name="name" 
        value={this.state.name}
        onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default TodoForm;