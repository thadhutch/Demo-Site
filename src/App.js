import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/app.sass";
import Page from "./components/Page";
import Home from "./screens/Home";
import Marketplace from "./screens/Marketplace";
import CreateAccount from "./screens/CreateAccount";
import About from "./screens/About";
import EmailVerified from "./screens/VerifyEmail";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import TermsOfService from "./screens/TermsOfService";
import Upload from "./screens/Upload";
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
                  <EmailVerified /> 
            )}
          />
          <Route
            exact
            path="/tos"
            render={() => (
                  <TermsOfService/>
            )}
          />
          <Route
            exact
            path="/privacypolicy"
            render={() => (
                  <PrivacyPolicy /> 
            )}
          />
          <Route
            exact
            path="/upload"
            render={() => (
                  <Upload /> 
            )}
          />
        </Switch>
      </Router>
    </ContextProvider>
  );


export default App;
