import { styled } from "@mui/material"
import Link from '@mui/material/Link';
export const ImageContainer = styled('div')`
         width: 30%;
         margin-bottom: 10px;
    `
export const StyledImageBank = styled('img')`
        width: "100%"
    `
export const ContainerContact = styled('div')`
        display: flex; 
        gap: 10px;
        height: 30px
    `

export const LinkStyled = styled(Link)(({theme})=>({
    color: `${theme.palette.primary.main}`, 
    marginBottom: "25px", 
    fontStyle: "italic", 
    fontWeight: "500",
    fontSize:'17px'
}))    