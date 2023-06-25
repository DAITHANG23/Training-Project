import styled from "@emotion/styled"


export const CardCountry = styled('div')`
width: 30%;
height: 200px;
border-radius: 8px;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #ffff;
gap: 20px;
cursor: pointer;
position: relative;
transition: all 0.3s;
":hover": {
  transform: scale(1.1);
}
`

export const CardIsComing = styled('div')`
    border: none;
    background-color: rgb(48, 47, 47);
    color: #ffff;
    border-radius: 30px;
    padding: 10px 20px;
    z-index: 1;
    position: absolute;
    top: 70px;
    left: 90px;
    opacity: 1 !important;
`

export const Cards = styled('div')`
display: flex;
flex-wrap: wrap;
gap: 30px;
margin: 30px 0px;
`

