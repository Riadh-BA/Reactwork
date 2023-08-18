
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavB from './Components/NavB/NavB';
import Footer from './Components/Footer/Footer';
import Girdcard from './Components/Girdcard/Girdcard';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
     <NavB />
     <Login />
    <Girdcard />
     <Footer />
    </div>
  );
}

export default App;
