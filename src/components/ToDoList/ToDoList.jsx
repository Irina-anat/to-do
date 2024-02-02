import React, { Component } from 'react';
import ToDo from '../ToDo/ToDo';
import todo from '../../todo.json';
import FormToDo from 'components/FormToDo/FormToDo';
import { nanoid } from 'nanoid';


class ToDoList extends Component {
    state = {
        todoList: todo,
        isDelete: false,
        isCreate: false,
    };

    componentDidUpdate(_, prevState) {
       //console.log(prevState)
       // console.log(this.state)
        // if (prevState.todoList.length !== this.state.todoList.length)
        //     console.log("Edit todo list")
        if (prevState.todoList> this.state.todoList)
            //console.log("Del")
        { this.setState({ isDelete: true }) }
        setTimeout(() => {
            this.setState({ isDelete: false })
        }, 3000);
        if (prevState.todoList < this.state.todoList)
        //console.log("Create")
            { this.setState({ isCreate: true }) }
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
                {this.state.isDelete && <div class="alert alert-danger" role="alert">
                To-do delete successfuly!
                </div>}
                {this.state.isCreate && <div class="alert alert-success" role="alert">
                To-do create successfuly!
                </div>}
                <FormToDo addToDo={this.addToDo} />
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
			</>
		)
    }
};

export default ToDoList;