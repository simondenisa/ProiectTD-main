import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import Registerscreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';


function App() {
  return (
    <div className="App">
      <Navbar />

      <Router>
        <Routes>
          <Route path="/" exact element={<HomeScreen />} />
          <Route path="/cart" exact element={<CartScreen />} />
          <Route path="/register" exact element={<Registerscreen/>}/>
          <Route path="/login" exact element={<LoginScreen/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
