import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Search from './pages/Search/Search';
import Global from './styles/global';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <>
          <Global />
          <Route path="/profile/edit" component={ ProfileEdit } />
          <Route path="/profile" component={ Profile } />
          <Route path="/favorites" component={ Favorites } />
          <Route path="/album/:id" render={ (props) => <Album { ...props } /> } />
          <Route path="/search" component={ Search } />
          <Route exact path="/" component={ Login } />
          <Route component={ NotFound } />
        </>
      </Switch>
    );
  }
}

export default App;
