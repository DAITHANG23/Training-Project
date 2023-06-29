import { styled } from "@mui/material"
import theme from "../../theme/theme"
import DoneIcon from '@mui/icons-material/Done';


export const CardImage = styled('div')`
  width: 50%;
  margin-bottom: 10px
  
`
export const StyledImage = styled('img')`
    width: ${props => props.isComing ? '70%' : '100%'};
`

export const CountryContainer = styled('div')`
    height: 100%;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    opacity:${props => props.status ? '0.4' : '1'};
    border:${props => props.isSelected ? `${theme.palette.primary.main} 2px solid` : `${theme.palette.secondary.main} 2px solid`};
    border-radius: 8px;
`

export const CardCheck = styled('div')(({theme}) =>({
    position: 'absolute',
    top: '0px',
    left: '0px',
    borderTop: `20px solid ${theme.palette.primary.main}`,
    borderLeft: `20px solid ${theme.palette.primary.main}`,
    borderBottom: '20px solid transparent',
    borderRight: '20px solid transparent',
    borderRadius: '8px',
}))

export const DonIconStyle = styled(DoneIcon)(({theme}) =>({
    backgroundColor: `${theme.palette.primary.main}`,
     color: `${theme.palette.text.card}`, 
     width: "16px", 
     height: "16px", 
     position: "absolute", 
     top: "-16px", 
     left: "-16px" 
}))
    
