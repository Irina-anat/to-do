import { Component } from 'react'

class Search extends Component {
    state = {
        value: '',
    };

    handleChange = e => {
        this.setState({ value: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
		//  console.log(this.state)
		this.props.handleSearch(this.state.value);
    };

	render() {
		return (
			<>
				<form onSubmit={this.handleSubmit}
					className='d-flex mt-2'
					role='search'
				>
					<input
						className='form-control me-2 '
						type='search'
						placeholder='Search news'
                        aria-label='Search news'
                        onChange={this.handleChange}
                        value={this.state.value}
					/>
					<button className='btn btn-outline-success' type='submit'>
						Search 
					</button>
				</form>
			</>
		)
	}
};

export default Search;