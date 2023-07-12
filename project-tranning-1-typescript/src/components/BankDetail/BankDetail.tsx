import { useBankDetail } from "@/hooks/useFetch";
import {
  ImageContainer,
  ContainerContact,
  StyledImageBank,
  LinkStyled,
  TypographyStyled,
} from "@/components/BankDetail/BankDetail.style";
import { FiPhone } from "react-icons/fi";
import theme from "@/theme/theme";

interface BankDetailProps {
  idBank: number;
}

const BankDetail = (props: BankDetailProps) => {
  const { idBank } = props;

  const { data, error } = useBankDetail(idBank);
  if (error instanceof Error)
    return <>{"An error has occurred: " + error.message}</>;

  return (
    <div key={data?.data.id}>
      <TypographyStyled variant="h5">{data?.data.name}</TypographyStyled>
      <ImageContainer>
        <StyledImageBank src={data?.data.logoUrl} alt={data?.data.name} />
      </ImageContainer>
      <ContainerContact>
        {data?.data.hotline && (
          <FiPhone color={theme.palette.primary.main} fontSize={"18px"} />
        )}
        <LinkStyled href={data?.data.hotline}>{data?.data.hotline}</LinkStyled>
      </ContainerContact>
    </div>
  );
};

export default BankDetail;
