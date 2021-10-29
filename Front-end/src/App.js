
import './App.css';
import HomeAdmin from './pages/home';
import Login from './pages/login';
import ModalCreateNews from './components/CRUDSNews/modalCreateNews';
import ModalDeleteNews from './components/CRUDSNews/modalDeleteNew';
import ModalUpdateNews from './components/CRUDSNews/modalUpdateNews';
import ModalReadNews from './components/CRUDSNews/modalReadNew';
import ModalCreateEvents from './components/CRUDSEvents/modalCreateEvents';
import ModalDeleteEvents from './components/CRUDSEvents/modalDeleteEvent';
import ModalUpdateEvents from './components/CRUDSEvents/modalUpdateEvents';
import ModalReadEvents from './components/CRUDSEvents/modalReadEvents';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



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
                <ModalCreateEvents/>
                <ModalDeleteEvents/>
                <ModalUpdateEvents/>
                <ModalReadEvents/>
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
