import React from 'react';

class Item extends React.Component{
  render(){
    return <li>hello</li>;
  }
}

class App extends React.Component{
  render(){
    return (
      <div>
        <h1>hello world</h1>
        <ul>
          <Item></Item>
        </ul>
      </div>
    );
  }
}

export default App;