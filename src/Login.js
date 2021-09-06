import React, { useContext, useReducer} from 'react'
import AuthContext from './context/AuthContext'

function loginReducer(state, action) {
  switch (action.type) {
    case 'INPUT':
      return {
        ...state,
        [action.name]: action.value,
      }
    case 'LOGIN':
      return {
        ...state,
        loading: true,
        error: '',
      }
    case 'ERROR':
      return {
        ...state,
        error: 'Incorrect Username or Password',
        loading: false,
      }
    case 'SUCCESS':
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        error: '',
      }
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        username: '',
        password: '',
      }
    default: 
      return state
  }
}

const Login = (props) => {
 const { setSession } = useContext(AuthContext)
  console.log(useContext(AuthContext))
  const initState = {
    loading: false,
    username: '',
    password: '',
    error: '',
    isLoggedIn: false,
  }

  const [state, dispatch] = useReducer(loginReducer, initState);

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch({type: 'LOGIN'})

    setTimeout(() => {
      // do your own server-side login
      if (state.username === 'budi' && state.password === '123') {
        dispatch({type: 'SUCCESS'})
        let sessionData = {
          username: 'budi',
          isLogin: true,
          loginTime: new Date()
        }
        setSession(sessionData)
        localStorage.setItem('session', JSON.stringify(sessionData))
        props.history.push('/home')
      } else {
        dispatch({type: 'ERROR'})
      }
    }, 2000)
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    dispatch({type: 'INPUT', name, value})
  }

  return (
    <>   
      <fieldset style={{width: 400}}>
        <legend>Login</legend>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="Username"
            name="username"
            value={state.username}
            onChange={handleChange}
          />
          <input type="password" placeholder="Password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
          <i style={{color: '#666'}}>Demo: username: budi , password: 123</i>
          <br />
          {state.error && <span style={{color: 'red'}}>{state.error}</span>}
          <br />
          <button>{state.loading ? 'Loading' : 'Login'}</button>
        </form>
      </fieldset>
    </>
  )
}

export default Login