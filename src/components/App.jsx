import {  useState } from 'react';
import Header from './Header/Header';
import ToDoList from './ToDoList/ToDoList';
import Modal from './Modal/Modal';
import FormLogin from './FormLogin/FormLogin';
import { nanoid } from 'nanoid';
/* import Search from './Search/Search';
import ContentInfo from './ContentInfo/ContentInfo'; */

const App = () => {
  const [isShowModal, SetIsShowModal] = useState(false);
 // const [searchText, SetSearchText] = useState('');

  const showModal = () => SetIsShowModal(true);

  const closeModal = () => SetIsShowModal(false);

  function createUser(data) {
    //console.log(data)
    const newUser = {
      ...data,
      id: nanoid(),
    };
    console.log(newUser);
  }
//CORS data
  /* const handleSearch = searchText => {
    SetSearchText(searchText);
  }; */

  return (
    <div className="container">
      <Header showModal={showModal} />
      <ToDoList />
      {isShowModal && (
        <Modal closeModal={closeModal}>
          <FormLogin createUser={createUser} closeModal={closeModal} />
        </Modal>
      )}
      {/* <Search handleSearch={handleSearch} />
      <ContentInfo searchText={searchText} /> */}
    </div>
  );
};

export default App;

// class App extends Component {
//   state = {
// 	  isShowModal: false,
// 	  searchText:'',
//   };

//   showModal = () => {
//     this.setState({ isShowModal: true })
//   };

//   closeModal = () => {
//     this.setState({ isShowModal: false })
// 	};
	
// 	createUser = (data) => {
// 		//console.log(data)	
// 		const newUser = {
// 			...data,
// 			id: nanoid(),
// 		};
// 		console.log(newUser)
// 	};

// 	handleSearch = (searchText) => {
// 	this.setState({searchText})	
// 	}

// 	render() {
// 		return (
// 			<div className='container'>
// 				<Header showModal={this.showModal} />
// 				<ToDoList />
// 				{this.state.isShowModal && (
// 					<Modal closeModal={this.closeModal}>
// 						<FormLogin createUser={this.createUser}
// 						closeModal={this.closeModal}/>
// 					</Modal>
// 				)}	
// 				<Search handleSearch={this.handleSearch} />
// 				<ContentInfo searchText={this.state.searchText} />
// 			</div>
// 		)
// 	};
// };

