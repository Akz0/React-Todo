import styled from "styled-components";

export const NewWarpper=styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    padding:10px 10px;
    align-items:center;
    @media(max-width:768px){
        padding:10px 0px;
        padding-bottom:30px;
        border-bottom:1px solid rgba(0,0,0,0.2)
    }
`
export const AddButton=styled.button`
    width:20%;
    margin: 20px 0 0 0;
    padding: 10px 0;
    font-size:20px;
    border:none;
    background-color:rgba(0,0,0,0.2);
    border-radius:20px;
    &:hover{
        background-color:rgba(0,0,0,0.7);
        color:white;
        cursor: pointer; 
    }
    &:focus{
        outline:none;
    }
    &:active{
        outline:none;
    }
    @media(max-width:768px){
        width:40%;
        font-size:16px;
    }
`
export const TodoInput=styled.div`
    margin:10px 0;
    width:80%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    @media(max-width:768px){
        width:90%;
    }
    
`
export const Label=styled.p`
    font-size:20px;
    text-align:right;
    width:40%;

    @media(max-width:768px){
        font-size:16px;
        width:20%;
    }
`
export const Input=styled.input`
    padding:5px 10px;
    font-size:20px;
    width:70%;
    margin:0 0px 0 20px ;
    border:1px solid rgba(0,0,0,.3);
    border-radius:12px;
    &:focus{
        outline:none;
        border:1px solid rgba(0,0,0,.6);
    }

    @media(max-width:768px){
        font-size:16px;
        width:80%;
    }
`