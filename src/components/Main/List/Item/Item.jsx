import React, { Component } from "react";
import './Item.css';

export class Item extends Component {
  //Constructor
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.data.title || "Título",
      description: this.props.data.description || "Descripción",
      date: this.props.data.date || "Fecha y hora"
    }
  }

  //Renderizado
  render() {
    const { title, description, date } = this.props.data;

    return <article className='box_item'>
      <section className="content">
        <p className="title_item">{title}</p>
        <p className="description_item">{description}</p>
        <p className="date_item">{date}</p>
        <button className="button_item" onClick={this.props.delete}>Delete</button>
      </section>
    </article>;
  }
}

export default Item;
