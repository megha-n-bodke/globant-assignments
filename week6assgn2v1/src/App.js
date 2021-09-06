import React from 'react';
import logo from './logo.svg';
import './App.css';
import Blog from './Blog';

class App extends React.Component {  
  constructor(props) {
    super(props);
    //this.props.fruits = this.state.fruits;
    this.state = {
      name: null,
      price: null,
      quantity: null,
      fruits: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    event.preventDefault();
  }

   handleSubmit(event) {
    alert('Fruit: ' + this.state.name);
    // create object of fruit
    // push to array
    var fruit = Object.create({
      'name': this.state.name, 
      'price': this.state.price,
      'quantity': this.state.quantity
      });
    this.state.fruits.push(fruit) ;
    // event.preventDefault();
  }

  renderRows() {
    const content = this.state.fruits.map((fruit) =>
    <tr>
    <td>{fruit.name}</td>
    <td>{fruit.price}</td>
    <td>{fruit.quantity}</td>
    <td>{fruit.quantity * fruit.price}</td>
    </tr>
      );
    return (
        {content}
    );
  }

  render() {
    const temp = this.state.fruits;
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Fruit Basket-
        </label>
        <br />
        <label>
          Fruit Name:
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Price per piece:
          <input
            name="price"
            type="number"
            value={this.state.price}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Quantity:
          <input
            name="quantity"
            type="number"
            value={this.state.quantity}
            onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
        {/* <table className="">
          <thead>
            <tr>
              <th>
                Item
              </th>
              <th>
                Actions
              </th>
            </tr>
          </thead>
      <tbody>
      {this.renderRows()}
      </tbody>
    </table> */}
      <Blog posts={this.state.fruits} />
      {console.log(this.state.fruits.quantity)}
        </div>
    );
  }
}

export default App;
