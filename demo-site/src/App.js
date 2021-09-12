import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/app.sass";
import Page from "./components/Page";
import Home from "./screens/Home";
import Marketplace from "./screens/Marketplace";
import CreateAccount from "./screens/CreateAccount";
import About from "./screens/About";
import EmailVerified from "./screens/VerifyEmail";
import { ContextProvider } from "./GlobalState/state";



const App = () => (
    <ContextProvider>
      <Router>
        <Switch>
        <Route
            exact
            path="/"
            render={() => (
              <CreateAccount />
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
          <Route
            exact
            path="/about"
            render={() => (
              <Page>
                <About />
              </Page>
            )}
          />        
           <Route
            exact
            path="/emailVerified"
            render={() => (
                <Page>
                <EmailVerified />
                </Page>
            )}
          />
        </Switch>
      </Router>
    </ContextProvider>
  );


export default App;
