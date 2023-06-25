
import { Typography } from '@mui/material';
import { CardImage } from './Country.style';
import { CountryContainer } from './Country.style';
import { StyledImage } from './Country.style';
import { CardCheck } from './Country.style';
import DoneIcon from '@mui/icons-material/Done';


const Country = ({ id, name, thumbnailUrl, status, isSelected }) => {

  const onSelected = (isSelected) => {
    if (isSelected) return 'active'
  }
  return (
    <CountryContainer key={id} status={status} isSelected={onSelected(isSelected)}   >
      <CardImage>
        <StyledImage src={thumbnailUrl} alt={name} />
      </CardImage>
      <Typography fontSize={'18px'} >{name}</Typography>
      {isSelected && <CardCheck>
        <DoneIcon sx={{ backgroundColor: "#5954E9", color: "white", width: "16px", height: "16px", position: "absolute", top: "-16px", left: "-16px" }} />
      </CardCheck>}
    </ CountryContainer>

  )
}

export default Country