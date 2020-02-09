import React, { Component } from "react";

class List extends Component{
    state={
        todoToShow: "all"
    }

    render(){
        let newTodo=[];
        if (this.props.todoToShow === "all") {
            newTodo = this.props.data;
        } else if (this.props.todoToShow === "active") {
            newTodo = this.props.data.filter(todo => !todo.isCompleted);
        } else if (this.props.todoToShow === "complete") {
            newTodo = this.props.data.filter(todo => todo.isCompleted);
        }
        return(
            <div className="list container">
                <div className="change">
                    <button onClick={()=>{this.props.updateTodoToShow("all")}} className="btn btn-primary mr-2">All</button>
                    <button onClick={()=>{this.props.updateTodoToShow("active")}} className="btn btn-danger mr-2">Active</button>
                    <button onClick={()=>{this.props.updateTodoToShow("complete")}} className="btn btn-success mr-2">Completed</button>
                    <button className="btn btn-warning btn-sm" onClick={()=>this.props.clearTask()} type="reset">Reset List</button>
                
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Task</th>
                            <th>Created</th>
                            <th>Deadline</th>
                            <th>Edit/Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {newTodo.map((data, index)=>{
                            let color =null
                            if(data.isCompleted){
                                color = "green"
                            } else{
                                color="red"
                            }
                            return(
                                <tr style={{color}} key={index}>
                                    {data.isCompleted && <td><input checked onClick={()=>{this.props.editComplete(index)}} type="checkbox"/></td>}
                                    {!data.isCompleted && <td><input onClick={()=>{this.props.editComplete(index)}} type="checkbox"/></td>}
                                    <td>{data.task}</td>
                                    <td>{data.createdDate}</td>
                                    <td>{data.deadline}</td>
                                    <td><i onClick={()=>{this.props.editTodo(index)}} className="fas fa-edit mr-4"></i> <i onClick={()=>{this.props.deleteTask(index)}} className="fas fa-trash"></i></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                
            </div>
        )
    }
}

export default List