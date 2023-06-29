
import { Typography } from '@mui/material';
import { CardImage } from './Country.style';
import { CountryContainer } from './Country.style';
import { StyledImage } from './Country.style';
import { CardCheck } from './Country.style';
import { DonIconStyle } from './Country.style';


const Country = ({ id, name, thumbnailUrl, isComing, status, isSelected }) => {

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