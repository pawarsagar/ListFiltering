import React from 'react'
import {InputPresentation} from './InputPresentation'
import {Table} from './Table'
export class Input extends React.Component{
  constructor(props){
    super(props);
    this.readText = this.readText.bind(this);
    this.state = {
      input : null,
    }
  }

  readText(event){
    this.setState({
      input : event.target.value
    })
  }


  render(){
    return(
      <div>
      <InputPresentation value={this.state.input} onChange={this.readText}/>
      <br/>
      <Table inputData={this.state.input}/>
      </div>
    )
  }
}