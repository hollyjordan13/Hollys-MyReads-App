import React from 'react';
import Shelf from '../components/shelf';
import FAB from '../components/fab';
import {getAll} from '../BooksAPI';

export default class Home extends React.Component {
  async componentDidMount() {
    try {
      const books = await getAll();
        this.props.addBooks(books);

    } catch( error ) {
      console.log(error)
    }

  }

	render() {
		return(
      <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Shelf title="Currently Reading" books={this.props.currentlyReading} moveBook={this.props.moveBook}/>
              <Shelf title="Want to Read" books={this.props.wantToRead} moveBook={this.props.moveBook}/>
              <Shelf title="Read Again?" books={this.props.read} moveBook={this.props.moveBook}/>
            </div>  
            <FAB />
          </div>)
	}
}