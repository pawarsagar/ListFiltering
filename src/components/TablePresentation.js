import React from 'react'

export function TablePresentation(props) {
  let myShop = props.myShop;
  if (props.inputData != null) {
    if (props.inputData.length >= 3) {
      myShop = myShop.filter((element, index) => {
        return ((element.name.toUpperCase().indexOf(props.inputData.toUpperCase())) == 0);
      })
    }
  }
  let tableElements = myShop.map((element, index) => {
    return (
      <tr key={element.id}>
        <td>{element.id}</td>
        <td>{element.name}</td>
        <td>{element.price}</td>
      </tr>
    )
  });
  const tableHead = (
    <thead>
      <tr>
        <th>#</th>
        <th>Product Name{"  "}
          <button onClick={props.sortAlpha}>
            <span className="glyphicon glyphicon-sort-by-alphabet"></span>
          </button>{' '}
          <button onClick={props.sortRevAlpha}>
            <span className="glyphicon glyphicon-sort-by-alphabet-alt"></span>
          </button>
        </th>
        <th>Price{"  "}
          <button onClick={props.sortPrice}>
            <span className="glyphicon glyphicon-sort-by-attributes"></span>
          </button>{' '}
          <button onClick={props.sortRevPrice}>
            <span className="glyphicon glyphicon-sort-by-attributes-alt"></span>
          </button>
        </th>
      </tr>
    </thead>
  );
  return (
    <div className="container">
      <table className="table table-striped">
        {tableHead}
        <tbody>
          {tableElements}
        </tbody>
      </table>
    </div>
  )
}