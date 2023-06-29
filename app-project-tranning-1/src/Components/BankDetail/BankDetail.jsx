import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import { useBankDetail } from '../../hooks/useFetch';
import { Typography } from '@mui/material';
import { LinkStyled } from './BankDetail.styled';
import { ImageContainer } from './BankDetail.styled';
import { ContainerContact } from './BankDetail.styled';
import { StyledImageBank } from './BankDetail.styled';

const BankDetail = (props) => {
    const { idBank } = props;
     
    const {data, error} = useBankDetail(idBank)
    if (error) return 'An error has occurred: ' + error.message;

    return (
        <div key={data?.data.id}>
            <Typography variant='h5' sx={{ marginBottom: "30px", fontWeight: "700" }}>{data?.data.name}</Typography>
            <ImageContainer >
                <StyledImageBank  src={data?.data.logoUrl} alt={data?.data.name} />
            </ImageContainer>
            <ContainerContact  >
               {
                data?.data.hotline && <PhoneIcon sx={{ color: "#5954E9"}} /> 
               } 
                <LinkStyled href={data?.data.hotline}>{data?.data.hotline}</LinkStyled>
            </ContainerContact>

        </div>

    )
}

export default BankDetail