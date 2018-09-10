import React from 'react'
import { TablePresentation } from './TablePresentation';
import { shop } from './shop.json'

export class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputData: props.inputData,
      myShop: shop,
    }
    this.sortAlpha = this.sortAlpha.bind(this);
    this.sortRevAlpha = this.sortRevAlpha.bind(this);
    this.sortPrice = this.sortPrice.bind(this);
    this.sortRevPrice = this.sortRevPrice.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({
      inputData: props.inputData,
    })
  }

  sortPrice(){
    let tempShop = this.state.myShop;
    function compare(elem1,elem2){
      let cmp = 0;
      let temp1 = elem1.price;
      let temp2 = elem2.price;
      temp1 = Number(temp1.slice(4,8));
      temp2 = Number(temp2.slice(4,8));
      console.log(typeof(elem1.price))
      if(temp1 > temp2){
        cmp = 1;
      }
      else {
        cmp = -1;
      }
      return cmp;
    }
    tempShop.sort(compare);
    this.setState({
      myShop : tempShop,
    })    
  }

  sortRevPrice(){
    let tempShop = this.state.myShop;
    function compare(elem1,elem2){
      let cmp = 0;
      let temp1 = elem1.price;
      let temp2 = elem2.price;
      temp1 = Number(temp1.slice(4,8));
      temp2 = Number(temp2.slice(4,8));
      console.log(typeof(elem1.price))
      if(temp1 > temp2){
        cmp = -1;
      }
      else {
        cmp = 1;
      }
      return cmp;
    }
    tempShop.sort(compare);
    this.setState({
      myShop : tempShop,
    })    
  }
  
  sortAlpha() {
    function compare(elem1, elem2) {
      let cmp = 0;
      if (elem1.name > elem2.name) {
        cmp = 1;
      }
      else {
        cmp = -1;
      }
      return cmp;
    }
    let tempShop = this.state.myShop;
    tempShop.sort(compare);
    this.setState({
      myShop: tempShop,
    })
  }

  sortRevAlpha() {
    function compare(elem1, elem2) {
      let cmp = 0;
      if (elem1.name > elem2.name) {
        cmp = -1;
      }
      else {
        cmp = 1;
      }
      return cmp;
    }
    let tempShop = this.state.myShop;
    tempShop.sort(compare);
    this.setState({
      myShop: tempShop,
    })
  }
  render() {
    return (
      <TablePresentation inputData={this.state.inputData} myShop={this.state.myShop} sortAlpha={this.sortAlpha} sortRevAlpha={this.sortRevAlpha} sortPrice={this.sortPrice} sortRevPrice={this.sortRevPrice}/>
    )
  }
}