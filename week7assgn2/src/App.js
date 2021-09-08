import logo from './logo.svg';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import Home from './Components/Home';
import Error from './Components/Error'

function App() {
  return (
    <div>
    <switch>
      <Route exact path = '/' component = {Home}/>
      <Route path = '/oops' component = {Error}/>

    </switch>
    </div>
  );
}

export default App;
