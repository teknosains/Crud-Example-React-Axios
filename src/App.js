import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'
import Api from './Api'
import Hook from './Hook'
import Counter from './Counter'
import Mreducer from './Mreducer'
import Useref from './Useref'

class App extends Component {

  state = {
    workers: []
  }

  removeWorker = (index) => {
    const { workers } = this.state;  
    let remove = workers.filter((val, idx) => {
      return idx !== index;
    })
    this.setState({
      workers: remove
    })
  }

  handleSubmit = (worker) => {
    this.setState({
      workers: [...this.state.workers, worker]
    })
  }

  render() {   
    const { workers } = this.state;
    return (
      <div className="container">
        <h1>Hellow World</h1>
        <Table tData={workers} removeWorker={this.removeWorker}/>
        <Form handleSubmit={this.handleSubmit}/>
        <Api />
        <hr />
        <Hook />
        <hr />
        <Counter />
        <hr />
        <h4>Hook reducer example</h4>
        <Mreducer />
        <hr />
        <h4>Testing useRef react Hook</h4>
        <Useref />
      </div>
    )
  }
}

export default App