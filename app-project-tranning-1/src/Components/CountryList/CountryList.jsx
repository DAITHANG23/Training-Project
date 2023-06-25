
import Country from '../Country/Country';
import { useState } from 'react';
import BankList from '../BankList/BankList';
import { Cards } from './CountryList.style';
import { CardCountry } from './CountryList.style';
import { useCountry } from '../../Hooks/useFetch';
import { CardIsComing } from './CountryList.style';

const CountryList = () => {
  const [dataCountryBank, setDataCountryBank] = useState([]);
  const [isChoose, setIsChoose] = useState([])
 
  // Using the hook

  const { data, error, isLoading } = useCountry();
  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;


  const onChooseCard = (cardId) => {
    const cardItem = data.find((cardItem) => cardItem.id === cardId)
    setDataCountryBank(cardItem.supportedBanks);
    setIsChoose(cardId)
  }

  const countryItem = data?.map((countryItem) => {
    const { id, isComing } = countryItem;
    const onCountryStatus = (isComing) => {
      if (isComing)
        return 'isComing';
    }

    return (
      <CardCountry  key={id} onClick={() => onChooseCard(id)} >
        <Country isSelected={isChoose===id} status={onCountryStatus(isComing)}  {...countryItem} />
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