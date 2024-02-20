import React, { useState } from 'react';

const FormLogin = ({ createUser, closeModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [gender, setGender] = useState('male');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser({
      email,
      password,
      gender,
    });
    setEmail('');
    setPassword('');
    setIsChecked(false);
    setGender('male');
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          name="email"
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={handleEmailChange}
          value={email}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          name="password"
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          onChange={handlePasswordChange}
          value={password}
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          I agree
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          checked={gender === 'male'}
          onChange={handleGenderChange}
          value="male"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Male
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          checked={gender === 'female'}
          onChange={handleGenderChange}
          value="female"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          Female
        </label>
      </div>
      <button
        disabled={!isChecked}
        type="submit"
        className="btn btn-primary"
      >
        Submit
      </button>
    </form>
  );
};

export default FormLogin;



// class FormLogin extends Component {
//   state = {
//     email: '',
//     password: '',
//     isChecked: false,
//     gender: 'male',
//   };

//   handleChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     // this.props.createUser(this.state);
//     this.props.createUser({
//       email: this.state.email,
//       password: this.state.password,
//       gender: this.state.gender,
//     });
//     this.setState({
//       email: '',
//       password: '',
//     });
//     this.props.closeModal();
//   };

//   handleCheck = ({ target: { checked } }) => {
//     this.setState({
//       isChecked: checked,
//     });
//   };

//   handleRadio = ({ target: { value } }) => {
//     this.setState({ gender: value });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="exampleInputEmail1" className="form-label">
//             Email address
//           </label>
//           <input
//             name="email"
//             type="email"
//             className="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//             onChange={this.handleChange}
//             value={this.state.email}
//           />
//           <div id="emailHelp" className="form-text">
//             We'll never share your email with anyone else.
//           </div>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleInputPassword1" className="form-label">
//             Password
//           </label>
//           <input
//             name="password"
//             type="password"
//             className="form-control"
//             id="exampleInputPassword1"
//             onChange={this.handleChange}
//             value={this.state.password}
//           />
//         </div>
//         <div className="mb-3 form-check">
//           <input
//             type="checkbox"
//             className="form-check-input"
//             id="exampleCheck1"
//             checked={this.state.isChecked}
//             onChange={this.handleCheck}
//           />
//           <label className="form-check-label" htmlFor="exampleCheck1">
//             I agree
//           </label>
//         </div>
//         <div className="form-check">
//           <input
//             className="form-check-input"
//             type="radio"
//             name="flexRadioDefault"
//             id="flexRadioDefault1"
//             checked={this.state.gender === 'male'}
//             onChange={this.handleRadio}
//             value="male"
//           />
//           <label className="form-check-label" htmlFor="flexRadioDefault1">
//             Male
//           </label>
//         </div>
//         <div className="form-check">
//           <input
//             className="form-check-input"
//             type="radio"
//             name="flexRadioDefault"
//             id="flexRadioDefault2"
//             checked={this.state.gender === 'female'}
//             onChange={this.handleRadio}
//             value="female"
//           />
//           <label className="form-check-label" htmlFor="flexRadioDefault2">
//             Female
//           </label>
//         </div>
//         <button
//           disabled={!this.state.isChecked}
//           type="submit"
//           className="btn btn-primary"
//         >
//           Submit
//         </button>
//       </form>
//     );
//   }
// }
