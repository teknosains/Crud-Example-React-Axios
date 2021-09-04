import { useContext } from "react"
import AuthContext from "./context/AuthContext"

const Home = (props) => {
  const { session, setSession } = useContext(AuthContext)
  const handleLogout = () => {
    setSession({
      username: '',
      isLogin: false
    })
    localStorage.removeItem('session')
    props.history.push('/login')
  }

  return (
    <fieldset style={{width: 400}}>
      <legend>Welcome, {session.username}</legend>
      <br />
      <br />
      <br />
      <button onClick={handleLogout}>Logout</button>
    </fieldset>
  )
}

export default Home