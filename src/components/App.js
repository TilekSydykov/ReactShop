import './App.sass';
import Header from "./header/Header";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import List from "./list/List";
import Details from "./details/Details";

function App() {
  return (
    <div className="App container">
      <Router>
          <Header/>
          <Switch>
              <Route
                  path="/product/:id"
                  render={(props) => (
                      <Details {...props}/>
                  )}
              />
              <Route path="/">
                  <List/>
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
