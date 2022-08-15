import React, { Component } from 'react'

export default class AddTask extends Component {
  state={
    newTask:''
  };
  handleChange=(e)=>this.setState({newTask:e.target.value})
   handleSubmit=(e)=>{
    e.preventDefault();
    // this.state.newTask===""?alert("Insert Task"):
    this.props.add(this.state.newTask);
    // this.setState({newTask:''});
   }
  render() {
    return (
      <div>
        <form  onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.newTask} onChange=
        {this.handleChange}/>
        <button type= 'submit'>+</button>
        </form>
       
      </div>
    )
  }
}
