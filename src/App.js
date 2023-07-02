/* eslint-disable import/extensions */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Album from './pages/Album/Album.jsx';
import Favorites from './pages/Favorites/Favorites.jsx';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile.jsx';
import ProfileEdit from './pages/ProfileEdit/ProfileEdit.jsx';
import Search from './pages/Search/Search';
import Global from './styles/global';
import Header from './components/Header.jsx';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <>
          <Global />
          <Header />
          <Route exact path="/profile/edit" component={ ProfileEdit } />
          <Route exact path="/profile" component={ Profile } />
          <Route path="/favorites" component={ Favorites } />
          <Route path="/album/:id" render={ (props) => <Album { ...props } /> } />
          <Route path="/search" component={ Search } />
          <Route exact path="/" component={ Login } />
        </>
      </Switch>
    );
  }
}

export default App;
