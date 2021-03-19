import React, { Component } from 'react'
import { Input, Label, NewWarpper,TodoInput  ,AddButton} from './NewTodoComponent'

const initialState={
    name:'',
    descripion:''
}
export class NewTodo extends Component {
    constructor(props){
        super(props)
        this.state={
            ...initialState
        }
    }
    updateNamehandler=(event)=>{
        this.setState({name:event.target.value})
    }
    updateDeschandler=(event)=>{
        this.setState({descripion:event.target.value})
    }
    reset(){
        this.setState({...initialState})
    }
    handleKeyEvent=(event)=>{
        if(event.key==='Enter'){
            this.props.add(this.state.name,this.state.descripion);this.reset()
        }
    }
    
    
    render() {
        return (
            <NewWarpper>
                <TodoInput>
                    <Label>Name</Label>
                    <Input  onInput={(e)=>this.updateNamehandler(e)} value={this.state.name} onKeyPress={this.handleKeyEvent}/>
                </TodoInput>
                <TodoInput>
                    <Label>Description</Label>
                    <Input onInput={(e)=>this.updateDeschandler(e)} value={this.state.descripion}  onKeyPress={this.handleKeyEvent}/>
                </TodoInput>
                <AddButton onClick={()=>{this.props.add(this.state.name,this.state.descripion);this.reset()}} >Add</AddButton>
            </NewWarpper>
        )
    }
}

export default NewTodo
