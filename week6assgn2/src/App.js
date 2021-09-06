import React from 'react'
import { ReactDOM } from 'react';

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    props.fruits = this.state.fruits;
    this.state = {
      name: null,
      price: null,
      quantity: null,
      fruits: []
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
  }

   handleSubmit(event) {
    alert('Fruit: ' + this.state.name);
    // create object of fruit
    // push to array
    fruit = {
      'name': this.state.name, 
      'price': this.state.price,
      'quantity': this.state.quantity
      };
    this.state.fruits.push(fruit) ;
    event.preventDefault();
  }

  render() {
    const tableBody = this.state.fruits.map((fruit) => (
      <tr>
        <td>{fruit.name}</td>
        <td>{fruit.price}</td>
        <td>{fruit.quantity}</td>
        <td>{fruit.quantity * fruit.price}</td>
      </tr>
    ));

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
      {/* <form onSubmit={this.handleSubmit}> */}
      <div class="leaderboard">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {tableBody}
                </tbody>
              </table>
      </div>
       {/* <input type="submit" value="Submit" /> */}
        {/* </form> */}
        </div>
    );
  }
}

ReactDOM.render(
  <Reservation />,
  document.getElementById('root')
);

//default export Reservation