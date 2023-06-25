import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import { useBankDetail } from '../../Hooks/useFetch';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import { ImageContainer } from './BankDetial.styled';
import { ContainerContact } from './BankDetial.styled';
import { StyledImageBank } from './BankDetial.styled';

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
                <PhoneIcon sx={{ color: "#5954E9" }} />
                <Link sx={{ color: "#5954E9", marginBottom: "25px", fontStyle: "italic", fontWeight: "600" }} href={data?.data.hotline}>{data?.data.hotline}</Link>
            </ContainerContact>

        </div>

    )
}

export default BankDetail