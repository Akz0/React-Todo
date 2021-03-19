import styled from "styled-components"


export const ListWarpper=styled.div`
    display:flex;
    flex-direction:column;
    border-radius:20px;
    align-items:center;
    box-shadow:0 2px 5px 0px rgba(0,0,0,0.2);
    width:350px;
    margin-bottom:20px;
    @media(max-width:768px){
        font-size:16px;
        width:100vw;
    }
`

export const ListContainer=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:start;
    padding:20px 10px;
    width:100%;
    height:auto;
    @media(max-width:768px){
        font-size:16px;
        height:auto;
    }
`
export const ListTitle=styled.h2`
    font-size:25px;
    font-weight:bold;
    padding-top:20px;
    @media(max-width:768px){
        font-size:20px;
    }
`