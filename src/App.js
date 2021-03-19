import React, { Component } from 'react'
import styled from 'styled-components'
import ListsWarpper from './components/ListsWarpper'
import NewTodo from './components/NewTodo/NewTodo'

const Appwrapper=styled.div`
  width:auto;
  margin:0px 20vw;
  padding:20px 0;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-evenly;
  @media(max-width:1000px){
    margin:0px 10vw; 
  }
  @media(max-width:568px){
    margin:0px 0vw;
  }
`;
class App extends Component {
    constructor(props){
        super(props)
        this.state={
            Tasks:[
            
            ],
            completedTasks:[
                
            ],
            totalTasks:0
        }
    }
    

    deleteTaskHandler=(id)=>{
       
        const oldTasks=[...this.state.Tasks]
        let newTasks=[]
        let newTotalItems=this.state.totalTasks
        oldTasks.forEach(task=>{
            if(id===task.taskID){
                newTotalItems--
                console.log('item removed is ',task)
            }
            else{
                newTasks.push(task)
            }
        })
        this.setState({Tasks:newTasks,totalTasks:newTotalItems})
        
    }

    deleteCompleteTaskHandler=(id)=>{
        const oldTasks=[...this.state.completedTasks]
        let newTasks=[]
        oldTasks.forEach(task=>{
            if(id===task.taskID){
                console.log('item removed is ',task)
            }
            else{
                newTasks.push(task)
            }
        })
        this.setState({completedTasks:newTasks})
        
    }

    addTodoHandler=(name,descripion)=>{
        if(name===''&&descripion===''){
            return
        }
        const newTodo={
            taskID:this.state.totalTasks,
            taskTitle:name,
            taskDescription:descripion
        }
        let newTotalTasks=this.state.totalTasks+1;
        const newTasks=[...this.state.Tasks]
        newTasks.push(newTodo)
        this.setState({Tasks:newTasks,totalTasks:newTotalTasks})
    }

    restoreTask=(id)=>{
        const oldTasks=[...this.state.completedTasks]
        let newTask={}
        oldTasks.forEach(task=>{
            if(id===task.taskID){
                newTask={...task}
            }
            else{}
        })
        let newTasks=[...this.state.Tasks]
        newTasks.push(newTask)
        this.setState({Tasks:newTasks})

        this.deleteCompleteTaskHandler(id)
    }

    moveTaskToCompleted=(id)=>{

        const oldTasks=[...this.state.Tasks]
        let newTask={}
        oldTasks.forEach(task=>{
            if(id===task.taskID){
                newTask={...task}
            }
            else{}
        })
        let newCompletedTasks=[...this.state.completedTasks]
        newCompletedTasks.push(newTask)
        this.setState({completedTasks:newCompletedTasks})

        this.deleteTaskHandler(id)
    }

    componentWillMount(){

        let Tasks=localStorage.getItem('Tasks')
        let completedTasks=localStorage.getItem('completedTasks')
        if(Tasks){
            Tasks=JSON.parse(Tasks)
            this.setState({Tasks:Tasks,totalTasks:Tasks.length})
        }
        if(completedTasks){
            completedTasks=JSON.parse(completedTasks)
            this.setState({completedTasks:completedTasks})
        }

    }

    componentDidMount(){
    }
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('Tasks',JSON.stringify(nextState.Tasks))
        localStorage.setItem('completedTasks',JSON.stringify(nextState.completedTasks))
        localStorage.setItem('totalTasks',JSON.stringify(nextState.totalTasks))
    }
    

  render() {
    return (
      <Appwrapper>
        <NewTodo add={this.addTodoHandler}/>
        <ListsWarpper undoComplete={this.restoreTask} Tasks={this.state.Tasks} completedTasks={this.state.completedTasks} completeTask={this.moveTaskToCompleted}deleteTaskHandler={this.deleteTaskHandler} deleteCompleteTaskHandler={this.deleteCompleteTaskHandler}/>
      </Appwrapper>
    )
  }
}

export default App

