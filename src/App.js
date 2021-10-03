import logo from './logo.svg';
import './App.css';
import News from './components/news';
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
            <Route exact path="/news">
                <News />
            </Route>
            <Route exact path="/">
              <div className="App">
                <header className="App-header">
                </header>
              </div>
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
