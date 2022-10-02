import cardList from  "../data.json";
import React, { Component } from 'react'

export default class CardList extends Component {
  constructor(){
    super();
    this.state = {
        isShow : true
    }
  }

  handleDelete = () => {
    this.setState({
      isShow:false
    })
  }

  handleShow = () => {
    this.setState({
        isShow:true
    })
  }

  handleSearch = (e) => {
    let searched = e.target.value;
  this.setState({
    isShown:cardList.filter((card) => {
      card.value.includes(searched)
    })
  })
  }

  

  render() {
    console.log(this.state.isShow)
    return (
      <div>
        <input onChange={(e) => this.handleSearch(e)} type='number'/>
        {cardList.map(card => 
        this.state.isShow ?
      <span>
        {card.value}
        <button onClick={this.handleDelete}>X</button>
      </span>:<button onClick={this.handleShow}>Show</button>
      )}</div>
    )
  }
}

