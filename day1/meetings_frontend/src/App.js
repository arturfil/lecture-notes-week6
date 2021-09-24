import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SideNavBar from './components/SideNavBar';

// component imports
import AddMeetingView from './views/AddMeetingView';
import HomeView       from './views/HomeView';
import LoginView      from './views/LoginView';
import ErrorView      from './views/ErrorView';

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
            <Route exact path="/addmeeting" component={AddMeetingView} />
            <Route component={ErrorView} />
          </Switch>
        </div>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App;
