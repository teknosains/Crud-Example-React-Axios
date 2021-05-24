import React, { Component } from 'react'

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Action</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  const rows = props.tData.map((val, idx) => {
    return (
      <tr key={idx}>
        <td>{val.name}</td>
        <td>{val.job }</td>
        <td>
          <button onClick={() => props.removeWorker(idx)}>Delete</button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>

}


class Table extends Component {
  render() {

    const { tData , removeWorker } = this.props;

    return (
      <table>
        <TableHead />
        <TableBody tData={tData} removeWorker={removeWorker} />
      </table>
    )
  }
}

export default Table