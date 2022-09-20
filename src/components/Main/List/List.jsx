import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import './List.css'

import Item from "./Item";
import data from "./items.json"

//Exportamos la clase
export class List extends Component {
  //Metodo constructor
  constructor(props) {
    super(props)

    this.title = React.createRef();
    this.description = React.createRef();
    this.date = React.createRef();

    this.state = {
      items: data
    }
  }

  //Metodos
  paintItems = () => this.state.items.map((item, i) =>
    <Item data={item} key={uuidv4()} delete={() => this.deleteItem(i)} />);

  deleteItems = () => this.setState({ items: [] });

  resetItems = () => this.setState({ items: data });

  deleteItem = (i) => {
    const remainingItems = this.state.items.filter((item, j) => i !== j);
    this.setState({ items: remainingItems });
  }

  addItem = (event) => {
    event.preventDefault();
    console.log("Estas en addItem");
    let title = this.title.current.value;
    let description = this.description.current.value;
    let date = this.date.current.value;

    let newItem = { title, description, date };


    this.setState({ items: [newItem, ...this.state.items] });

    title = this.title.current.value = "";
    description = this.description.current.value = "";
    date = this.date.current.value = "";
  };



  //Renderizado
  render() {
    return <section>
      <h1 className="main_title">Add Task</h1>
      <form onSubmit={this.addItem} className="form_box">
        <input type="text" id="title" name="title" placeholder="Título" className="input_title" ref={this.title} />
        <input type="text" id="description" name="description" placeholder="Description" className="input_description" ref={this.description} />
        <input type="text" id="date" name="date" placeholder="Fecha" className="input_date" ref={this.date} />
        <input type="submit" value="Crear" className="button_form" />
      </form>
      {this.paintItems()}
      {this.state.items.length ? <button onClick={this.deleteItems}>Delete tasks</button> : ""}
      <button onClick={this.resetItems}>Reload Tasks</button>
    </section>;
  }
}

export default List;
