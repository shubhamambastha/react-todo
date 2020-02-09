import React, { Component } from 'react';
import './App.css';
import Input from './Components/input'
import List from './Components/list'

class App extends Component{
  state={
    todos:[],
    isEdit:false,
    editTodo:"",
    editIndex:"",
    todoToShow: "all"
  }

  addTask=(task)=>{
    if(this.state.isEdit){
      let editedTodo = this.state.todos;
      editedTodo[this.state.editIndex] = task
      console.log("edited todo>>", editedTodo)
      this.setState({
        todos: editedTodo,
        isEdit: false
      })
    } else if(task.task && task.deadline){
      this.setState({
        todos:[...this.state.todos, task]
      })
    }
  }

  deleteTask=(index)=>{
    let updatedList = [...this.state.todos];
    updatedList.splice(index, 1);
    this.setState({
      todos: updatedList
    })
  }

  clearTask=()=>{
    this.setState({
      todos: []
    })
  }

  editTask=(index)=>{
    this.setState({
      isEdit: true,
      editTodo: this.state.todos[index],
      editIndex: index
    })
  }

  editComplete=(index)=>{
    let completedTask = this.state.todos
    if(!this.state.todos[index].isCompleted){
      completedTask[index].isCompleted = true
      this.setState({
        todos: completedTask
      })
    } else{
      completedTask[index].isCompleted = false
      this.setState({
        todos: completedTask
      })
    }
    console.log(completedTask)
  }

  updateTodoToShow=(str)=>{
    this.setState({
      todoToShow: str
    })
  }

  render(){
    return (
      <div className="App">
        <header><h1><u>ToDO List</u></h1></header>
        <Input 
          addTask={(task)=>{this.addTask(task)}}
          isEdit={this.state.isEdit}
          editTodo= {this.state.editTodo}
        />
        <List
          data={this.state.todos}
          deleteTask={(index)=>this.deleteTask(index)}
          clearTask={()=>this.clearTask()}
          editTodo={(index)=>{this.editTask(index)}}
          editComplete={(index)=>{this.editComplete(index)}}
          updateTodoToShow={(str)=>{this.updateTodoToShow(str)}}
          todoToShow={this.state.todoToShow}
        />
      </div>
    );
  }
}

export default App;
