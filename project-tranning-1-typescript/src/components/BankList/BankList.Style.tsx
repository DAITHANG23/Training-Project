import { styled, TableCell } from "@mui/material"

interface ActiveCardProps {
  theme?: any
  styleActive: boolean | undefined

}

interface InactiveCardProps {
  theme?: any
  styleActive: boolean | undefined

}

interface TableCellNameProps {
  theme?: any
  styleactive: string
}

interface TableCellIconProps {
  theme?: any
  styleactive?: string
}



export const ActiveCard = styled('div')(({ theme, styleActive }: ActiveCardProps) => ({
  width: '125px',
  textAlign: 'center',
  border: 'none',
  borderRadius: '8px',
  padding: '12px 35px',
  backgroundColor: theme.backGroundColor.active,
  color: theme.textColor.card,
  opacity: styleActive ? '1' : '0.7',
}))


export const Inactive = styled('div')(({ theme, styleActive }: InactiveCardProps) => ({
  width: '125px',
  textAlign: 'center',
  border: 'none',
  borderRadius: '8px',
  padding: '12px 35px',
  backgroundColor: theme.backGroundColor.inactive,
  color: theme.backGroundColor.card,
  opacity: styleActive ? '1' : '0.7',

}))


export const TableCellNameStyle = styled(TableCell)(({ theme, styleactive }: TableCellNameProps) => ({
  borderTopLeftRadius: '16px',
  borderBottomLeftRadius: styleactive === 'open' ? '0px' : '16px',
  borderBottom: `3px solid ${theme.backGroundColor.main}`,
  fontSize: '16px',
  paddingLeft: '25px !important',

}))


export const TableCellIconStyle = styled(TableCell)(({ theme, styleactive }: TableCellIconProps) => ({
  borderTopRightRadius: '16px',
  borderBottomRightRadius: styleactive === 'open' ? '0px' : '16px',
  borderBottom: `3px solid ${theme.backGroundColor.main}`,
}))



export const TableCellBankDetail = styled(TableCell)(({ theme }) => ({
  paddingBottom: 0,
  paddingTop: 0,
  borderBottom: `3px solid ${theme.backGroundColor.main}`,
  borderBottomLeftRadius: '16px',
  borderBottomRightRadius: '16px'
}))


