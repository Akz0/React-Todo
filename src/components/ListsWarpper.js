import React  from 'react'
import styled from 'styled-components'
import Doing from './Doing'
import Done from './Done'

const ListContainer=styled.div`
    margin:0 auto;
    padding:20px 0;
    display:flex;
    width:100%;
    flex-wrap:wrap;
    justify-content:space-evenly;
    align-items:flex-start;
`;
const ListsWarpper=(props)=> {    
   
        return (
            <ListContainer>
                <Doing completeTask={props.completeTask} tasks={props.Tasks} deleteHandler={props.deleteTaskHandler}/>
                <Done undoComplete={props.undoComplete} tasks={props.completedTasks} deleteHandler={props.deleteCompleteTaskHandler}/>
            </ListContainer>
        )
    
}
export default ListsWarpper
