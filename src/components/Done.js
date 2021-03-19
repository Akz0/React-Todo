import React from 'react'
import ListItem from './ListItem/ListItem'
import { ListWarpper,ListTitle,ListContainer } from './ListComponents'

function Done(props) {
    const Tasks=props.tasks.map(task=><ListItem undoComplete={()=>props.undoComplete(task.taskID)} doing={false} delete={()=>props.deleteHandler(task.taskID)} title={task.taskTitle} text={task.taskDescription} key={task.taskID}/>)

    return (
        <ListWarpper>
            <ListTitle>Done</ListTitle>
            <ListContainer>
                {Tasks}
            </ListContainer>
        </ListWarpper>
    )
}

export default Done