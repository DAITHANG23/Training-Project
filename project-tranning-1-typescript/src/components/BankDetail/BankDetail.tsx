
import { useBankDetail } from '../../hooks/useFetch';
import { Typography } from '@mui/material';
import { LinkStyled } from './BankDetail.style'
import { ImageContainer } from './BankDetail.style';
import { ContainerContact } from './BankDetail.style';
import { StyledImageBank } from './BankDetail.style';
import { FiPhone } from "react-icons/fi";
import theme from '../../theme/theme';

interface IbankDetail{
    idBank: number
}


const BankDetail  = (props : IbankDetail) => {
    const { idBank } = props;
     
    const {data, error} = useBankDetail(idBank)
    if (error instanceof Error) return <>{'An error has occurred: ' + error.message}</> 

    return (
        <div key={data?.data.id}>
            <Typography variant='h5' sx={{ marginBottom: "30px", fontWeight: "700" }}>{data?.data.name}</Typography>
            <ImageContainer>
                <StyledImageBank  src={data?.data.logoUrl} alt={data?.data.name} />
            </ImageContainer>
            <ContainerContact  >
               {
                data?.data.hotline && <FiPhone color= {theme.palette.primary.main} fontSize={'18px'} /> 
               } 
                <LinkStyled href={data?.data.hotline}>{data?.data.hotline}</LinkStyled>
            </ContainerContact>

        </div>

    )
}

export default BankDetail