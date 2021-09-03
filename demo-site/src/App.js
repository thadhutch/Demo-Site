import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/app.sass";
import Page from "./components/Page";
import Home from "./screens/Home";
import Marketplace from "./screens/Marketplace";
import CreateAccount from "./screens/CreateAccount";
import { ContextProvider } from "./GlobalState/state";



const App = () => (
    <ContextProvider>
      <Router>
        <Switch>
        <Route
            exact
            path="/"
            render={() => (
              <Page>
                <CreateAccount />
              </Page>
            )}
          />
          <Route
            exact
            path="/home"
            render={() => (
              <Page>
                <Home />
              </Page>
            )}
          />
          <Route
            exact
            path="/marketplace"
            render={() => (
              <Page>
                <Marketplace />
              </Page>
            )}
          />
        </Switch>
      </Router>
    </ContextProvider>
  );


export default App;
