import React, { Component } from 'react'

class Form extends Component {

  initState = {
    name: '',
    job: ''
  }

  state = this.initState

  // agar saat input nya berubah, state nya ke update jg
  handleChange = (event) => {
    const {name, value} = event.target
    console.log(event.target.id)
    this.setState({
      [name]: value
    })
  }

  submitForm = () => {
    this.props.handleSubmit(this.state) 
    this.setState(this.initState) // reset the state
  }

  render() {
    const {name, job} = this.state
    return (
      <div>
        <form>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            placeholder="Input name.."
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="job"
            id="job"
            value={job}
            placeholder="Input job.."
            onChange={this.handleChange}
          />
        </form>
        <button type="button" onClick={this.submitForm}>Submit</button>
      </div>
    )
  }
}

export default Form