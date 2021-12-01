
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
import ModalCreateTours from './components/CRUDSTours/modalCreateTours';
import ModalDeleteTours from './components/CRUDSTours/modalDeleteTours';
import ModalUpdateTours from './components/CRUDSTours/modalUpdateTours';
import ModalReadTours from './components/CRUDSTours/modalReadTours';
import ModalCreateExhibitions from './components/CRUDSExhibitions/modalCreateExhibitions';
import ModalDeleteExhibitions from './components/CRUDSExhibitions/modalDeleteExhibitions';
import ModalUpdateExhibitions from './components/CRUDSExhibitions/modalUpdateExhibitions';
import ModalReadExhibitions from './components/CRUDSExhibitions/modalReadExhibitions';
import ModalCreateArtwork from './components/CRUDSArtworks/modalCreateArtwork';
import ModalDeleteArtwork from './components/CRUDSArtworks/modalDeleteArtwork';
import ModalUpdateArtwork from './components/CRUDSArtworks/modalUpdateArtwork';
import ModalReadArtwork from './components/CRUDSArtworks/modalReadArtwork';
import ModalCreateServices from './components/CRUDSServices/modalCreateServices';
import ModalDeleteServices from './components/CRUDSServices/modalDeleteServices';
import ModalUpdateServices from './components/CRUDSServices/modalUpdateServices';
import ModalReadServices from './components/CRUDSServices/modalReadServices';
import ModalReadPurchases from './components/ReadTickets/modalReadPurchases';
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
                <ModalCreateTours/>
                <ModalDeleteTours/>
                <ModalUpdateTours/>
                <ModalReadTours/>
                <ModalCreateExhibitions/>
                <ModalDeleteExhibitions/>
                <ModalUpdateExhibitions/>
                <ModalReadExhibitions/>
                <ModalCreateArtwork/>
                <ModalDeleteArtwork/>
                <ModalUpdateArtwork/>
                <ModalReadArtwork/>
                <ModalReadServices/>
                <ModalCreateServices/>
                <ModalDeleteServices/>
                <ModalUpdateServices/>
                <ModalReadPurchases/>
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
