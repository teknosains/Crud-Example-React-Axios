import React, { Component } from 'react'

class Api extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'
    fetch(url)
      .then((result) => {
        return result.json()
      })
      .then((result) => {
        this.setState({
          data: result
        })
      })
  }

  render() {
    const { data } = this.state
    const rows = data.map((val, idx) => {
      return (
        <li key={idx}>{val}</li>
      )
    })

    return (
      <div>
        <ul>{rows}</ul>
      </div>
    )
  }

}

export default Api