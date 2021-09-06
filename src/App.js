import React, { useContext, useState } from 'react'
import {
  HashRouter as Router, // for Gihub pages use HashRouter
  Redirect,
  Route,
  Switch,
  useHistory
} from 'react-router-dom'
import routes from './routes'
import AuthContext from './context/AuthContext'



const App = () => {

  let history = useHistory();

  const initSession = useContext(AuthContext)
  const [session, setSession] = useState(initSession.session)
  return (
    <React.Fragment>
    <blockquote><pre>Global State => {JSON.stringify(session, null, 2)}</pre></blockquote>
    <AuthContext.Provider value={{session, setSession}}>
      <Router basename="/">
        <Switch>
          {routes.map(route => (
            <Route 
              key={route.path}
              path={route.path}
              component={route.component}
            />
          ))}
          <Redirect from="/" to="/login" />
        </Switch>
      </Router>
    </AuthContext.Provider>
    </React.Fragment>
  )
}

export default App