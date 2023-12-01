import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import CameraProjectPage from './views/camera-project-page'
import LandingPage from './views/landing-page'
import QuestionMarkPage from './views/question-mark-page'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          component={CameraProjectPage}
          exact
          path="/camera-project-page"
        />
        <Route component={LandingPage} exact path="/" />
        <Route component={QuestionMarkPage} exact path="/question-mark-page" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
