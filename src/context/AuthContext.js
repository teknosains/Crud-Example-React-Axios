import React from 'react'

let session = {
  username: '',
  isLogin: false,
}

// use storage to make the state persist on page-refresh

const storage = localStorage.getItem('session')

if (storage) {
  session = JSON.parse(storage)
}

const init = {
  session,
  setSession: () => {}
}

const AuthContext = React.createContext(init)

export default AuthContext