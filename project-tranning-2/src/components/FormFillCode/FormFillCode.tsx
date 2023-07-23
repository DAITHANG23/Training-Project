import React from "react";

import {
  BoxFormFillCode,
  ImgLogo,
  TitleTypo,
  ContentEmail,
  EmailStyled,
  ButtonStyled,
  LinkStyled,
  BoxLinkStyled,
  ContentStyled,
  InputContainer,
  InputStyled,
  TitleReceiveCode,
  TitleResentCode,
  ContainerTitle,
} from "@/components/FormFillCode/FormFillCode.style";
import { Link, useNavigate } from "react-router-dom";

const FormFillCode = () => {
  const navigate = useNavigate();
  const onNavigateToBack = () => {
    const to = -1;
    navigate(to);
  };

  return (
    <BoxFormFillCode>
      <ImgLogo src="../images/logo.png" alt="logo" />

      <TitleTypo variant="h4">Energy Monitoring System</TitleTypo>

      <ContentEmail>
        <ContentStyled>
          A 4 digit code has been sent to your email
        </ContentStyled>
        <EmailStyled>antony@ecoxplore.com.sg</EmailStyled>
      </ContentEmail>

      <InputContainer variant="standard">
        <InputStyled id="numberphone" type="tel" placeholder="_" />
        <InputStyled id="numberphone" type="tel" placeholder="_" />
        <InputStyled id="numberphone" type="tel" placeholder="_" />
        <InputStyled id="numberphone" type="tel" placeholder="_" />
        <InputStyled id="numberphone" type="tel" placeholder="_" />
        <InputStyled id="numberphone" type="tel" placeholder="_" />
      </InputContainer>

      <ContainerTitle>
        <TitleReceiveCode>Didn’t receive code? </TitleReceiveCode>
        <TitleResentCode> Resend</TitleResentCode>
      </ContainerTitle>

      <ButtonStyled variant="contained">VERIFY</ButtonStyled>

      <BoxLinkStyled>
        <Link to="/" style={{ textDecoration: "none" }}>
          <LinkStyled onClick={() => onNavigateToBack()}>Back</LinkStyled>
        </Link>
      </BoxLinkStyled>
    </BoxFormFillCode>
  );
};

export default FormFillCode;
