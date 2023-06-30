import { styled } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';


export const CardImage = styled('div')`
  width: 50%;
  margin-bottom: 10px
  
`
export const StyledImage = styled('img')`
    width: ${props => props.isComing ? '70%' : '100%'};
`

export const CountryContainer = styled('div')(props =>({
    height: '100%',
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    opacity:`${props.status ? '0.4' : '1'}`,
    border:`${props.isSelected ? `${props.theme.palette.primary.main} 2px solid` : `${props.theme.palette.secondary.main} 2px solid`}`,
    borderRadius: '8px',
}))
    


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
    
