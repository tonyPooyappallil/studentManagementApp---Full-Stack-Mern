import logo from "./logo.svg";
import "./App.css";
import { AdminPanel } from "./components/AdminPanel";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/adminPanel">
          {" "}
          <AdminPanel></AdminPanel>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
