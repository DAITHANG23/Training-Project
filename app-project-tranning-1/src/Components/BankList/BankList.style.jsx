import { styled, TableCell } from "@mui/material"
import theme from "../../theme/theme"        
    
export const ActiveCard = styled('div')`
    width: 125px;
    text-align: center;
    border: none;
    border-radius: 8px;
    padding: 12px 35px;
    background-color: ${theme.palette.background.active};
    color: ${theme.palette.text.card};
    opacity: ${props => props.styleActive ? '1' : '0.7'};
`
  

export const Inactive = styled('div')`
    width: 125px;
    text-align: center;
    border:none;
    border-radius: 8px;
    padding: 12px 35px;
    background-color: ${theme.palette.background.inactive};
    color: ${theme.palette.text.card};
    opacity: ${props => props.styleActive ? '1' : '0.7'};
`
  
    
  
export const TableCellNameStyle = styled(TableCell)(({ theme }) => ({
  borderTopLeftRadius: '16px',
  borderBottomLeftRadius: '16px',
  borderBottom: `3px solid ${theme.palette.background.main}`,
  fontSize: '16px',
  paddingLeft: '25px !important'
}))


export const TableCellIconStyle = styled(TableCell)(({ theme }) => ({
  borderTopRightRadius: '16px',
  borderBottomRightRadius: '16px',
  borderBottom: `3px solid ${theme.palette.background.main}`,
}))



export const TableCellBankDetail = styled(TableCell)(({ theme }) => ({
  paddingBottom: 0,
  paddingTop: 0,
  borderBottom: `3px solid ${theme.palette.background.main}`,
  borderBottomLeftRadius: '16px',
  borderBottomRightRadius: '16px'
}))


