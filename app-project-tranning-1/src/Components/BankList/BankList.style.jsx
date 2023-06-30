import { styled, TableCell } from "@mui/material"
       
    
export const ActiveCard = styled('div')(props =>({
  width: '125px',
  textAlign: 'center',
  border: 'none',
  borderRadius: '8px',
  padding: '12px 35px',
  backgroundColor: `${props.theme.palette.background.active}`,
  color: `${props.theme.palette.text.card}`,
  opacity: `${props.styleActive ? '1' : '0.7'}`,
}))
    

export const Inactive = styled('div')( props =>({
  width: '125px',
  textAlign: 'center',
  border: 'none',
  borderRadius: '8px',
  padding: '12px 35px',
  backgroundColor: `${props.theme.palette.background.inactive}`,
  color: `${props.theme.palette.text.card}`,
  opacity: `${props.styleActive ? '1' : '0.7'}`,

}))
   

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


