import Country from "@/components/Country/Country";
import { useState } from "react";
import BankList from "@/components/BankList/BankList";
import {
  Cards,
  CardIsComing,
  CardCountry,
} from "@/components/CountryList/CountryList.style";
import { useCountry } from "@/hooks/useFetch";

interface BankData {
  id: number;
  name: string;
  isActive: boolean;
}

const CountryList = (): JSX.Element => {
  const [dataCountryBank, setDataCountryBank] = useState<
    BankData[] | undefined
  >();
  const [chooseCard, setChooseCard] = useState(0);

  const { data, error, isLoading } = useCountry();
  if (isLoading) return <>{"Loading..."}</>;
  if (error instanceof Error)
    return <>{"An error has occurred: " + error.message}</>;

  const onChooseCard = (cardId: number) => {
    const cardItem = data?.find((cardItem) => cardItem.id === cardId);
    setDataCountryBank(cardItem?.supportedBanks);
    setChooseCard(cardId);
  };

  const countryItem = data?.map((countryItem: any) => {
    const { id, isComing } = countryItem;

    return (
      <CardCountry key={id} onClick={() => onChooseCard(id)}>
        <Country
          isSelected={!isComing && chooseCard === id}
          status={isComing}
          {...countryItem}
        />
        {isComing && <CardIsComing>Comming soon...</CardIsComing>}
      </CardCountry>
    );
  });
  return (
    <>
      <Cards>{countryItem}</Cards>
      <BankList dataCountryBank={dataCountryBank} />
    </>
  );
};
export default CountryList;
