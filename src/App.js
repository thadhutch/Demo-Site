import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/app.sass";
import Page from "./components/Page";
import ScrollToTop from "./scrollToTop";
import Home from "./screens/Home";
import Marketplace from "./screens/Marketplace";
import CreateAccount from "./screens/CreateAccount";
import Search from "./components/Search";
import About from "./screens/About";
import EmailVerified from "./screens/VerifyEmail";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import TermsOfService from "./screens/TermsOfService";
import Upload from "./screens/Upload";
import ProfileSwitcher from "./components/ProfileSwitcher";
import { ContextProvider } from "./GlobalState/state";
import "./app.css";
// Restricted Routes 
import PrivateRoute from './restrictions/PrivateRoute';
import UserRestrictedRoute from './restrictions/UserRestrictedRoute';

const App = () => (
  <ContextProvider>
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/marketplace" component={Marketplace} />
        <Route exact path="/about" component={About} />
        <Route exact path="/user/:user" component={ProfileSwitcher} />
        <Route exact path="/createaccount" component={Home} />
        <Route exact path="/emailVerified" component={EmailVerified} />
        <Route exact path="/tos" component={TermsOfService} />
        <Route exact path="/privacypolicy" component={PrivacyPolicy} />
        <Route exact path="/upload" component={Upload} />
        <Route exact path="/search" component={Search} />


        <Route path={["/", "/home"]} component={Home} />
      </Switch>
    </Router>
  </ContextProvider>
);

export default App;
