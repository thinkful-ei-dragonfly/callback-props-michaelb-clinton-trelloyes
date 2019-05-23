import React, { Component } from 'react';
import List from './List'
import './App.css';

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };

  removeCard = (index) => {
    console.log(index)
    // console.log(this.state.allCards)
    // const {index, ...rest} = this.state.allCards;
    // console.log(rest)
    // this.setState( { 
    //   allCards: rest
    // } );
  };

  render() {
    const { store } = this.props
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
              removeCard={(index) => this.removeCard(index)}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
