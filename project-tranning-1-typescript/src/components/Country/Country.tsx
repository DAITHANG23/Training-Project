
import { Typography } from '@mui/material';
import { CardImage } from './Country.style';
import { CountryContainer } from './Country.style';
import { StyledImage } from './Country.style';
import { CardCheck } from './Country.style';
import { DonIconStyle } from './Country.style';

interface CountryProps {
  id: number
  name: string
  thumbnailUrl:string
  isComing: boolean
  status: boolean
  isSelected: boolean
  theme: any
}
const Country = ({ id, name, thumbnailUrl, isComing, status, isSelected }:CountryProps) => {

  return (
    <CountryContainer key={id} status={status} isSelected={isSelected}   >
      <CardImage>
        <StyledImage isComing={isComing} src={thumbnailUrl} alt={name} />
      </CardImage>
      <Typography fontSize={'20px'} sx={{ fontWeight: "600" }} >{name}</Typography>
      {isSelected && <CardCheck>
        <DonIconStyle />
      </CardCheck>}
    </ CountryContainer>

  )
}

export default Country