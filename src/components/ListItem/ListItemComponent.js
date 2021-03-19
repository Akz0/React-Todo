import styled from 'styled-components'

export const ListWrapper=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border:1px solid rgba(0,0,0,.3);
    border-radius:10px;
    width:300px;
    padding:10px;
    margin:5px 0;
`;
export const TodoHead=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
`
export const TodoOperations=styled.div`
    padding:5px;
    width:40%;
    display:flex;
    justify-content:space-evenly;
`
export const TodoTitle=styled.input`
    padding:0 10px;
    width:60%;
    height:35px;
    border-radius:12px;
    border:1px solid rgba(0,0,0,.5);
    padding:0 10px;
    font-size:20px;
    color:black;

    &:disabled{
        border:none;
        background-color:#ffffff;
    }
    &:focus{
        outline:none;
    }
`
export const TodoOperationsButton=styled.button`
    display:${(props)=>props.displayButton?'block':'none'};
    font-size:20px;
    color:grey;
    border:none;
    background-color:#fff;
    &:hover{
        color:black;
        cursor:pointer;
    }
    &:focus{
        outline:none;
    }
    &:active{
        transform:scale(1.15);
        outline:none;
    }
`
export const TodoName=styled.input`
    width:100%;
    margin:10px;
    height:35px;
    border-radius:12px;
    border:1px solid rgba(0,0,0,.5);
    padding:0 10px;
    font-size:14px;
    color:black;

    &:disabled{
        border:none;
        background-color:lightgrey;
    }
    &:focus{
        outline:none;
    }
`