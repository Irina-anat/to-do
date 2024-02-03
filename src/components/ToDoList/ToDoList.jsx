import React, { Component } from 'react';
import ToDo from '../ToDo/ToDo';
//import todo from '../../todo.json';
import FormToDo from 'components/FormToDo/FormToDo';
import { nanoid } from 'nanoid';


class ToDoList extends Component {
    state = {
        todoList: '',
        isDelete: false,
        isCreate: false,
    };

    componentDidMount() {
        // localStorage.setItem('todo', JSON.stringify(todo));
        if(localStorage.getItem('todo'))
            this.setState({ todoList: JSON.parse(localStorage.getItem('todo')) })
    };

    componentDidUpdate(_, prevState) {
         //console.log(prevState)
         // console.log(this.state)
        if (prevState.todoList.length > this.state.todoList.length) {
            //console.log("Del")
            localStorage.setItem('todo', JSON.stringify(this.state.todoList))
            this.setState({ isDelete: true, todo: localStorage.getItem('todo') })
        }
        setTimeout(() => {
            this.setState({ isDelete: false })
        }, 3000);
        if (prevState.todoList.length < this.state.todoList.length) {
            //console.log("Create")
            localStorage.setItem('todo', JSON.stringify(this.state.todoList))
            this.setState({ isCreate: true, todo: localStorage.getItem('todo') })
        }
        setTimeout(() => {
            this.setState({ isCreate: false })
        }, 3000);
    };

    handleCheckCompleted = (id) => {
        this.setState((prevState) => ({
            todoList: prevState.todoList.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo)
        }))
    };

    handleDelete = (id) => {
        this.setState((prevState) => ({
            todoList: prevState.todoList.filter((todo) => todo.id !== id)
        }))
    };

    addToDo = (value) => {
        this.setState((prevState) => {
            return {
                todoList: [
                    ...prevState.todoList,
                    { id: nanoid(), title: value, completed: false }
                ],
            };
        });
    };


	render() {
        return (
                <>
                <h1>My To-Do list</h1>
                {this.state.isDelete && <div className="alert alert-danger" role="alert">
                To-do delete successfuly!
                </div>}
                {this.state.isCreate && <div className="alert alert-success" role="alert">
                To-do create successfuly!
                </div>}
                <FormToDo addToDo={this.addToDo} />
                {this.state.todoList && (
                    <ul className='list-group list-group-flush'>
					{this.state.todoList.map((todo) => (
                        <ToDo
                            key={todo.id}
                            todo={todo}
                            handleCheckCompleted={this.handleCheckCompleted}
                            handleDelete={this.handleDelete}
						/>
					))}
				</ul>
                )}				
			</>
          )};
};

export default ToDoList;