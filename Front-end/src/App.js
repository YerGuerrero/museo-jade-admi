
import './App.css';
import HomeAdmin from './pages/home';
import Login from './pages/login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ModalCreateNews from './components/CRUDSNews/modalCreateNews';
import ModalDeleteNews from './components/CRUDSNews/modalDeleteNew';
import ModalUpdateNews from './components/CRUDSNews/modalUpdateNews';
import ModalReadNews from './components/CRUDSNews/modalReadNew';


function App() {
  return (
    <Router>   
      <div className="App">
        <Switch>
            <Route exact path="/home">
                <ModalCreateNews/>
                <ModalDeleteNews/>
                <ModalUpdateNews/>
                <ModalReadNews/>
                <HomeAdmin/>
            </Route>
            <Route exact path="/">
              <Login/>
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
