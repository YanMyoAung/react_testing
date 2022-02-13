import React from 'react';

class Item extends React.Component{
  render(){
    return(
      <li>
        {this.props.name},${this.props.price}
      </li>
    );
  }
}

class App extends React.Component{
  state = {
    items : [
      { id : 1 , name : 'banana' , price : 20},
      { id : 2 , name : 'appple' , price : 30}
    ]
  }

  add = () => {
    let id = this.state.items.length + 1;
    this.setState({
      items : [
        ...this.state.items,
        { id , name : `Item ${id}` , price : 1 * id }
      ]
    })
  }

  render(){
    return (
      <div>
        <h1>hello world</h1>
        <ul>
          { this.state.items.map( n => {
            return (
              <Item name={n.name} price={n.price}></Item>
            )
          })}
        </ul>
        <button onClick={this.add}>Add</button>
      </div>
    );
  }
}

export default App;