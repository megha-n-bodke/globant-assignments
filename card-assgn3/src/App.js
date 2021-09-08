import './App.css';
import React from 'react';
import Card from './card';
import './Card.css'

class App extends React.Component {

  constructor(props)
  {
    super(props)
    this.state = {
      username : "",
      gender : "",
      users:[]
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event)
  {
    var users = this.state.users;
    var user = {
        'name': this.state.username,
        'gender': this.state.gender,
    }
    users.push(user);
    this.setState({
      users: users,
      name: "",
      gender:""
    });
    event.preventDefault();
 }

  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  render(){
    return(
    <div className = 'listcontainer' >
      {/* <form> */}
        <p className = 'heading'>
          User Information
        </p>
        <br></br>
        <input type="text" placeholder ="username" name = "username" value = {this.state.username} onChange = {this.handleChange} className = 'inputfields'></input>
        <br></br>
        <div class = 'check'>
        <label>
            <input type = "radio" name = "gender" value = "Male" checked ={this.state.gender === "Male"} onChange = {this.handleChange}></input>
            Male
        </label>
        <label>
            <input type = "radio" name ="gender" value = "Female" checked = {this.state.gender === "Female"} onChange = {this.handleChange}></input>
            Female
        </label>
        </div>
        <br></br>
        <button onClick = {this.handleClick} className = 'button'>Add Card</button>
      {/* </form> */}
      <div>
        <Card value={this.state.users}/>
      </div>
    </div>
    )
}
}
export default App

