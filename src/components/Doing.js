import React from 'react'
import ListItem from './ListItem/ListItem'
import { ListWarpper,ListTitle,ListContainer } from './ListComponents'

function Doing(props) {
    const Tasks=props.tasks.map(task=><ListItem complete ={()=>props.completeTask(task.taskID)} doing={true} delete={()=>props.deleteHandler(task.taskID)} title={task.taskTitle} text={task.taskDescription} key={task.taskID}/>)

    return (
        <ListWarpper>
            <ListTitle>Doing</ListTitle>
            <ListContainer>
                {Tasks}
            </ListContainer>
        </ListWarpper> 
    )
}

export default Doing