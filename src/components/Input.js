import React from 'react'
import {Table} from './Table'
import {InputPresentation} from './InputPresentation'

export class Input extends React.Component{
    constructor(props){
        super(props)
        this.readInput=this.readInput.bind(this);
        this.state={
            input:null
        }
    }

    readInput(action){
        this.setState({
            input:action.target.value
        })
    }


    render(){
        return(
            <div>
                <InputPresentation value={this.state.input} onChange={this.readInput}/>
                <br/>
                <Table inputData={this.state.input}/>
            </div>
        )
    }
}