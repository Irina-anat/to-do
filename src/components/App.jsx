import { Component } from 'react';
import Header from './Header/Header';
import ToDoList from './ToDoList/ToDoList';
import Modal from './Modal/Modal';
import FormLogin from './FormLogin/FormLogin';
import { nanoid } from 'nanoid';
import Search from './Search/Search';
import ContentInfo from './ContentInfo/ContentInfo';

class App extends Component {
  state = {
	  isShowModal: false,
	  searchText:'',
  };

  showModal = () => {
    this.setState({ isShowModal: true })
  };

  closeModal = () => {
    this.setState({ isShowModal: false })
	};
	
	createUser = (data) => {
		//console.log(data)	
		const newUser = {
			...data,
			id: nanoid(),
		};
		console.log(newUser)
	};

	handleSearch = (searchText) => {
	this.setState({searchText})	
	}

	render() {
		return (
			<div className='container'>
				<Header showModal={this.showModal} />
				<ToDoList />
				{this.state.isShowModal && (
					<Modal closeModal={this.closeModal}>
						<FormLogin createUser={this.createUser}
						closeModal={this.closeModal}/>
					</Modal>
				)}	
				<Search handleSearch={this.handleSearch} />
				<ContentInfo searchText={this.state.searchText} />
			</div>
		)
	};
};

export default App
