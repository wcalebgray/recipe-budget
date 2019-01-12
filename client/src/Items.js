import React, { Component } from 'react';
import ReactTable from "react-table";

class InsertRowTable extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [{
        id: 1,
        name: 'Tanner Linsley',
        quantity: 26,
        metric: 'cups',
        price: 3
      }]
    };
    this.renderEditable = this.renderEditable.bind(this);
    this.addBlankRow = this.addBlankRow.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
  }

  addBlankRow() {
    console.log("This: ", this);
    this.setState({data: [...this.state.data, {}]});
  }

  deleteRow(index) {
    let newData = [...this.state.data];
    newData.splice(index, 1);
    this.setState({data: newData});
    console.log("Row to Delete: ", index);
  }

  renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.data];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  }

  render() {
    const { data } = this.state;
    const columns = [{
        Header: 'ID',
        accessor: 'id'
      },{
        Header: 'Name',
        accessor: 'name',
        Cell: this.renderEditable
      }, {
        Header: 'Quantity',
        accessor: 'quantity',
        Cell: this.renderEditable
      }, {
        Header: 'Metric',
        accessor: 'metric',
        Cell: this.renderEditable
      }, {
        Header: 'Price',
        accessor: 'price',
        Cell: this.renderEditable
      }, {
        id: 'delete',
        Cell: row => (<button onClick={()=>{this.deleteRow(row.index)}}>Delete</button>)
      },]

    return(
      <div className='tableWrapper'>
        <ReactTable 
          data={data}
          columns={columns}
          showPagination={false}
          minRows={0}
        />
        <button onClick={ this.addBlankRow }>Add</button>
      </div>
    );
  }
}

class Items extends Component {
  render() {
    return (
      <div className="Items">
        <h2>Items</h2>
        <InsertRowTable></InsertRowTable>
      </div>
    );
  }
}

export default Items;
