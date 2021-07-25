import './App.css';
import Header from './components/Header/Header'
import Home from './pages/Home';
import Sobre from './pages/Sobre'
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
      <Route path="/home">
        <Home/>
      </Route>
      <Route path="/sobre">
        <Sobre/>
      </Route>
      
    </div>
  );
}

export default App;
