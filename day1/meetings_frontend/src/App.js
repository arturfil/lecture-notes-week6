import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SideNavBar from './components/SideNavBar';
import ErrorView from './views/ErrorView';

// component imports
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';

function App() {
  return (
    <BrowserRouter>
    <div className="container-fluid">
      <div className="row">
        <div className="col-3 navbar-container">
          <SideNavBar/>
        </div>
        <div className="col-9">
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route exact path="/login" component={LoginView} />
            <Route component={ErrorView} />
          </Switch>
        </div>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App;
