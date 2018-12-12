import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './views/Home.js'
import Search from './views/Search.js'
import Provider, {MyContext} from './provider/index.js'
import {getAll} from './BooksAPI'
import {search} from './BooksAPI';
import './App.css'

class BooksApp extends React.Component {
  
  async componentDidMount() {
    try {
      const books = await getAll();
        this.props.addBooks(books);

    } catch( error ) {
      console.log(error)
    }

  }

  handleChange = async e => {
    try {

      const query = e.target.value;
      this.setState({query})
      if(query.trim()) {
        const results = await search(query);
        if (results.error) {
        this.setState({books:[]});
        } else {
        this.setState({books: results});
        }} else {this.setState({books:[]});
    }

    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="app">
        <Provider>
            <Switch>
              <Route exact path={'/'} 
                render={() => (
                  <MyContext.Consumer>
                    {context => <Home {...context}/>}
                  </MyContext.Consumer>
                    )}/>
              
              <Route exact path={'/search'} 
                render={() => (
                  <MyContext.Consumer>
                    {context => <Search {...context}/>}
                  </MyContext.Consumer>
                    )}/>
            </Switch>
        </Provider>  
      </div>
    )
  }
}

export default BooksApp
