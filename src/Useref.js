// understanding useRef
import React, { useState, useEffect, useRef } from 'react'

function Avatar(props) {
  return (
    <img src={props.avatarUrl} alt="Avatar"/>
  )
}

function Username(props) {
  return (
    <span>Name: {props.name}</span>
  )
}

function Useref() {
 
  const user = useRef({
    name: 'Budi',
    avatarUrl: "https://icotar.com/avatar/jake.png?bg=e91e63",
  })

  console.log("Original Name", user.current.name);
  console.log("Original Avatar URL", user.current.avatarUrl);

  //const [, setForceUpdate] = useState(Date.now()); // a hack for useRef to force re-render the componenet

  useEffect(() => {
    setTimeout(() => {
      user.current = {
        name: "Ujang",
        avatarUrl: "https://icotar.com/avatar/craig.png?s=50", // a new image
      };
      console.log(user)
      /**
       * kalo pakai UseRef, meski value nya berubah dia gk akan re-render children component
       * 
       */
       //setForceUpdate(); // call the hack
    },3000)
  }, [user])

  return (
    <div>
      <Username name={user.current.name} />
      <Avatar avatarUrl={user.current.avatarUrl} />
    </div>
  )
}

export default Useref
