//const { Component } = require('react');

import React, { useState } from 'react';

const FormToDo = ({ addToDo }) => {
  const [todo, setTodo] = useState('');

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addToDo(todo);
    setTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInput" className="form-label">
          Create to-do
        </label>
        <input
          name="todo"
          type="text"
          className="form-control"
          id="exampleInput"
          onChange={handleChange}
          value={todo}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add to-do
      </button>
    </form>
  );
};

export default FormToDo;

// class FormToDo extends Component {
//     state = {
//         todo: ''
//     };
    
//     handleChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//     handleSubmit = e => {
//         e.preventDefault();
//         this.props.addToDo(this.state.todo)
//         this.setState({
//             todo: '',
//         });
//     };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="exampleInput" className="form-label">
//             Create to-do
//           </label>
//           <input
//             name="todo"
//             type="text"
//             className="form-control"
//             id="exampleInput"
//             onChange={this.handleChange}
//             value={this.state.todo}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Add to-do
//         </button>
//       </form>
//     );
//   }
// }


