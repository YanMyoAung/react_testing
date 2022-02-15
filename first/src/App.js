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

class AddForm extends React.Component{

  nameRef = React.createRef();
  priceRef = React.createRef();

  add = () => {
    let name = this.nameRef.current.value;
    let price = this.priceRef.current.value;

    this.props.add_val(name,price);
  }
  render(){
    return(
      <div>
      <input type="text" ref={this.nameRef} /><br />
      <input type="text" ref={this.priceRef} /><br />
      <button onClick={this.add}>Add</button>
      </div>
    )
  }
}

class App extends React.Component{
  state = {
    items : [
      { id : 1 , name : 'banana' , price : 20},
      { id : 2 , name : 'appple' , price : 30}
    ]
  }

  add = (name,price) => {
    let id = this.state.items.length + 1;
    this.setState({
      items : [
        ...this.state.items,
        { id , name, price }
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
              <Item key={n.id} name={n.name} price={n.price}></Item>
            )
          })}
        </ul>
        <AddForm add_val={this.add}></AddForm>
      </div>
    );
  }
}


export default App;