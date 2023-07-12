import {
  CountryContainer,
  DonIconStyle,
  CardCheck,
  StyledImage,
  CardImage,
  TypographyNameStyled,
} from "@/components/Country/Country.style";

interface CountryProps {
  id: number;
  name: string;
  thumbnailUrl: string;
  isComing: boolean;
  status: boolean;
  isSelected: boolean;
  theme: any;
}
const Country = ({
  id,
  name,
  thumbnailUrl,
  isComing,
  status,
  isSelected,
}: CountryProps) => {
  return (
    <CountryContainer key={id} status={status} isSelected={isSelected}>
      <CardImage>
        <StyledImage isComing={isComing} src={thumbnailUrl} alt={name} />
      </CardImage>
      <TypographyNameStyled fontSize={"20px"}>{name}</TypographyNameStyled>
      {isSelected && (
        <CardCheck>
          <DonIconStyle />
        </CardCheck>
      )}
    </CountryContainer>
  );
};

export default Country;
