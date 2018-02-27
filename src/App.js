import React, { Component } from 'react';
import './App.css';

import UserIn from './UserIn/UserIn';
import UserOut from './UserOut/UserOut';

class App extends Component {
  state = {
    userId: 'Vin',
    paragraph_1: 'It was the best of times.  It was the worst of times.  I feel that these words can describe all spans of time in the history of man.',
    paragraph_2: 'Rows and flows of angel hair; And ice cream castles in the air; And feather canyons everywhere; Ive looked at clouds that way.  But now they only block the sun; They rain and snow on everyone; So many things I would have done; But clouds got in my way.  Ive looked at clouds from both sides now; From up and down and still somehow; Its clouds illusions I recall.  I really dont know clouds at all'
  };

  onInputChange = (event) => {
    const userId = event.target.value;
    console.log(userId);
    this.setState({ userId });
  }
  
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-title">React-16-Example #1</h1>
        </header>
        <UserIn id={ this.state.userId } onInputChange={ this.onInputChange.bind(this) } />
        <UserOut />
      </div>
    );
  }
}

export default App;
