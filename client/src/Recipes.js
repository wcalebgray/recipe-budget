import React, { Component } from 'react';
import Modal from 'react-modal';
import ReactTable from "react-table";
import EditRecipe from "./EditRecipe";

Modal.setAppElement('#root')

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};


class InsertRowTable extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      data: [{
        id: 10,
        name: 'Roasted Sweet Potatoes',
        type: 'side',
        price: 3.69
      }]
    };
    this.renderEditable = this.renderEditable.bind(this);
    this.addBlankRow = this.addBlankRow.bind(this);
    this.deleteRow = this.deleteRow.bind(this);

    this.onAfterCloseModal = this.onAfterCloseModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  onAfterCloseModal() {
    this.setState({recipeToEdit: null});
  }

  editRecipe(index) {
    let recipes = [...this.state.data];
    let editingRecipe = recipes[index];
    this.setState({recipeToEdit: editingRecipe});
    this.openModal();
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
        Header: 'Type',
        accessor: 'type',
        Cell: this.renderEditable
      }, {
        Header: 'Price',
        accessor: 'price',
      }, {
        id: 'delete',
        Cell: row => (<button onClick={()=>{this.deleteRow(row.index)}}>Delete</button>)
      },{
        id: 'edit',
        Cell: row => (<button onClick={()=>{this.editRecipe(row.index)}}>Edit Ingredients</button>)
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
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          onAfterClose={this.onAfterCloseModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <EditRecipe
            recipe={this.state.recipeToEdit}
          />
          <button onClick={this.closeModal}>close</button>
        </Modal>
      </div>
    );
  }
}

class Recipes extends Component {
  render() {
    return (
      <div className="Recipes">
        <h2>Recipes</h2>
        <InsertRowTable></InsertRowTable>
      </div>
    );
  }
}

export default Recipes;
