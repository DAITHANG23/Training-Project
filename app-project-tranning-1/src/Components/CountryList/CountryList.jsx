
import Country from '../Country/Country';
import { useState } from 'react';
import BankList from '../BankList/BankList';
import { Cards } from './CountryList.style';
import { CardCountry } from './CountryList.style';
import { useCountry } from '../../hooks/useFetch';
import { CardIsComing } from './CountryList.style';

const CountryList = () => {
  const [dataCountryBank, setDataCountryBank] = useState([]);
  const [chooseCard, setChooseCard] = useState([])

  // Using the hook

  const { data, error, isLoading } = useCountry();
  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;


  const onChooseCard = (cardId) => {
    const cardItem = data.find((cardItem) => cardItem.id === cardId)
    setDataCountryBank(cardItem.supportedBanks);
    setChooseCard(cardId)
  }

  const countryItem = data?.map((countryItem) => {
    const { id, isComing } = countryItem;
    
    return (
      <CardCountry sx={{
          "&:hover": { 
          transform: "scale(1.1)",
        }
      }} key={id} onClick={() => onChooseCard(id)} >
        <Country isSelected={!isComing && chooseCard === id} status={isComing}  {...countryItem} />
        {isComing && <CardIsComing>
          Comming soon...
        </CardIsComing>}
      </CardCountry>
    )
  }
  )
  return (
    <>
      <Cards>
        {countryItem}
      </Cards>
      <BankList dataCountryBank={dataCountryBank} />
    </>
  )
}
export default CountryList