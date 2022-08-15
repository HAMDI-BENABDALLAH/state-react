import React, { Component } from 'react'
import Todolist from './Component/Todolist'
import './App.css';
import AddTask from './Component/AddTask';
export default class App extends Component {
  state={
    todos:[
      {
        id:Math.random(),task:"html",iscomplated:false
      },
      {
        id:Math.random(),task:"css",iscomplated:true
      },
      {
        id:Math.random(),task:"javascript",iscomplated:false
      }
    ]
  };
  handleDelete=(x)=>{
    this.setState({todos:this.state.todos.filter(el=>el.id!==x)})
  };
  handlecomplete=(y)=>{
    this.setState({todos:this.state.todos.map(el=>el.id===y?{...el,iscomplated:!el.iscomplated}:el)})
  };
  handleAdd=(input)=>{
     const newTask={
      id:Math.random(),
      task:input,
      iscomplated:false
     };
     this.setState({todos:[newTask,...this.state.todos]})
  }
  render() {
    return (
      <div>
        <AddTask add={this.handleAdd}/>
        <Todolist del={this.handleDelete}hamdi={this.state.todos} comp={this.handlecomplete}/>
        
      </div>
    )
  }
}
