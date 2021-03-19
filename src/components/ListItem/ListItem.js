import React from 'react'
import { ListWrapper, TodoHead, TodoName, TodoOperations, TodoOperationsButton, TodoTitle } from './ListItemComponent'
import {MdUndo,MdDone,MdDelete} from 'react-icons/md'
function ListItem(props) {
    return (
        <ListWrapper>
            <TodoHead>
                <TodoTitle value={props.title} disabled={true}/>
                <TodoOperations>
                    <TodoOperationsButton onClick={props.undoComplete} displayButton={!props.doing}><MdUndo/></TodoOperationsButton>
                    <TodoOperationsButton onClick={props.complete} displayButton={props.doing}><MdDone/></TodoOperationsButton>
                    <TodoOperationsButton onClick={props.delete}  displayButton={true}><MdDelete/></TodoOperationsButton>
                </TodoOperations>
            </TodoHead>
            <TodoName value={props.text} disabled={true}/>
        </ListWrapper>
    )
}

export default ListItem
