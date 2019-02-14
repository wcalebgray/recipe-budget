import React, { Component } from 'react';
import ReactTable from "react-table";

class InsertRowTable extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [{
        id: 1,
        name: 'Sweet Potatoes',
        quantity: 1,
        metric: 'lb',
        price: 0.99
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
        Header: 'Total Price',
        accessor: 'price',
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

class EditRecipe extends Component {
  render() {
    return (
      <div class="edit-recipe">
        <h2>Recipe: {this.props.recipe.name}</h2>
        <div>Type: {this.props.recipe.type}</div>
        <div>TOTAL PRICE: {this.props.recipe.price}</div>
        < InsertRowTable/>
      </div>
    );
  }
}

export default EditRecipe;
