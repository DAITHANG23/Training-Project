import { styled } from "@mui/material"


export const CardCountry = styled('div')(({theme}) =>({
  width: '30%',
  height: '250px',
  borderRadius: '8px',
  textAlign: 'center',
  backgroundColor: theme.backGroundColor.card,
  cursor: 'pointer',
  position: 'relative',
  transition: 'all 0.3s',
  "&:hover": { 
    transform: "scale(1.1)",
  }
}))
 

export const CardIsComing = styled('div')(({theme}) =>({
  border: 'none',
  backgroundColor: theme.backGroundColor.iscoming,
  color: theme.textColor.card,
  borderRadius: '30px',
  padding: '10px 20px',
  zIndex: '1',
  position: 'absolute',
  top: '100px',
  left: '90px',
  opacity: '1 !important',
}))
    

export const Cards = styled('div')(({theme}) =>({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '50px',
  margin: '30px 0px',
}))
  


