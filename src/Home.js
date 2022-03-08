import { useReducer, useState } from "react"
import axios from "axios";

function stateReducer(state, action) {
  switch (action.type) {
    case 'LOAD_DATA':
      return {
        ...state,
        users: [],
        isLoading: true,
      };
    case 'DATA_LOADED':
      return {
        ...state,
        users: action.users,
        isLoading: false
      };
    case 'ADD_USER':
      return {
        ...state,
        isAddUser: true
      };
    case 'CANCEL_ADD_USER':
      return {
        ...state,
        isAddUser: false
      };
    case 'SAVE_ADD_USER':
      let users = [...state.users]; // clone current users
      users.push(action.newUser);
      return {
        ...state,
        isAddUser: false,
        users: users
      };
    default:
      return state;
  }
}


const Home = (props) => {
  console.log('render home')
  
  const initState = {
    users: [],
    isLoading: false,
    isError: false,
    isAddUser: false,
    newUser: {}
  };

  const [state, dispatch] = useReducer(stateReducer, initState);

  const fetchUsers = async () => {
    dispatch({ type: 'LOAD_DATA' }); // set loading indicator
    let users = await axios.get('https://fakestoreapi.com/users?limit=5');
    
    // set data users ke State
    if (users.data.length) {
      dispatch({ type: 'DATA_LOADED', users: users.data });
    }

  };

  const addUser = async () => {
    console.log('fake addd');

    let randomize = Math.floor(Math.random() * 100);

    let newUser = {
      id: randomize,
      username: `Username${randomize}`,
      email: `${randomize}@gmail.com`,
      phone: `081223${randomize}`
    }
    dispatch({ type: 'SAVE_ADD_USER', newUser: newUser});
  };

  const updateUser = async () => {
    alert('Fake update');

    // let update = axios.put(...)
  };

  const deleteUser = async (userId) => {
    alert('Fake delete');

    // let delete = axios.delete(...)
  };


  return (
    <fieldset style={{width: 700, marginLeft: 300, marginTop: 100}}>
      <legend>Welcome, </legend>

      <button onClick={fetchUsers}>
        {state.isLoading ? 'Loading' : 'Load Data'}
      </button>
      <button
        style={{float: 'right', backgroundColor: 'green', borderColor: 'green'}} 
        onClick={() => dispatch({ type: 'ADD_USER' })}>
        Add User
      </button>
      <hr />
      {/** form add user */}
      {state.isAddUser && (
        <form style={{border: '1px solid #ddd', padding: 10}}>
          <h5><i>Data random will be added...</i></h5>
          <br />
          <button onClick={addUser}>Save</button>
          <button 
            style={{marginLeft: 20, backgroundColor: 'red', borderColor: 'red'}} 
            onClick={() => dispatch({ type: 'CANCEL_ADD_USER' })}>
            Cancel
          </button>
          <br />
        </form>
      )}

      {/** Table list user */}
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {state.users.length > 0 && state.users.map((item, index) => 
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>
                <a href="#!" onClick={updateUser}>Edit</a>
                &nbsp;|&nbsp;
                <a href="#!" onClick={() => deleteUser(item.id)}>Delete</a>
              </td>
            </tr>
          )}
        </tbody>
      </table>

    </fieldset>
  )
}

export default Home