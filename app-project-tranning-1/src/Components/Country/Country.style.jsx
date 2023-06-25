import styled from "@emotion/styled"

export const CardImage = styled('div')`
  width: 45%;
  margin-bottom: 10px
  
`

export const StyledImage = styled('img')`
    width: 100%;
`

export const CountryContainer = styled('div')`
    height: 100%;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    opacity:${props => props.status === 'isComing' ? '0.4' : '1'};
    border:${props => props.isSelected === 'active' ? '#5954E9 2px solid' : '#CED0D6 2px solid'};
    border-radius: 8px;
`

export const CardCheck = styled('div')`
    position: absolute;
    top: 0px;
    left: 0px;
    border-top: 20px solid #5954E9;
    border-left: 20px solid #5954E9;
    border-bottom: 20px solid transparent;
    border-right: 20px solid transparent;
    border-radius: 8px;
`