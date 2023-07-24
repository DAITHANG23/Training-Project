import { useState, useContext } from "react";
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
import { useNavigate } from "react-router-dom";
import { DataForm } from "../FormLoginByGmail/FormLoginByGmail";
import { DataFormLog } from "../FormLoginByNumberPhone/FormLoginByNumberPhone";
import { MuiOtpInput } from "mui-one-time-password-input";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { Box, FormHelperText } from "@mui/material";

interface DataFillProps {
  dataLogin: DataForm | undefined;
  dataLoginNumberPhone: DataFormLog | undefined;
  onSetOtp: (value: IHandleSubmit) => void;
}

export interface IHandleSubmit {
  otp: string;
}

const FormFillCode = ({
  dataLogin,
  dataLoginNumberPhone,
  onSetOtp,
}: DataFillProps) => {
  const [isComplete, setIsComplete] = useState(false);
  const [otp, setOtp] = useState<IHandleSubmit>();

  const navigate = useNavigate();
  const onNavigateToBack = () => {
    const to = -1;
    navigate(to);
  };

  const { control, handleSubmit } = useForm({
    defaultValues: {
      otp: "98",
    },
  });

  const handleChange: SubmitHandler<IHandleSubmit> = (newValue) => {
    setOtp(newValue);
    onSetOtp(newValue);
  };

  console.log("otp", otp);
  const onChangeValueOtp = (value: string) => {
    if (value.length !== 6) {
      return setIsComplete(false);
    } else {
      return setIsComplete(true);
    }
  };
  return (
    <BoxFormFillCode onSubmit={handleSubmit(handleChange)}>
      <ImgLogo src="../images/logo.png" alt="logo" />

      <TitleTypo variant="h4">Energy Monitoring System</TitleTypo>

      {dataLogin ? (
        <ContentEmail>
          <ContentStyled>
            A 4 digit code has been sent to your email
          </ContentStyled>
          <EmailStyled>{dataLogin?.email}</EmailStyled>
        </ContentEmail>
      ) : (
        <ContentEmail>
          <ContentStyled>
            A 4 digit code has been sent to phone number
          </ContentStyled>
          <EmailStyled>{dataLoginNumberPhone?.tel}</EmailStyled>
        </ContentEmail>
      )}

      <InputContainer variant="standard">
        <Controller
          name="otp"
          control={control}
          rules={{
            validate: (value) => value.length === 6,
          }}
          render={({ field, fieldState }) => (
            <Box>
              <InputStyled
                {...field}
                length={6}
                gap={"12px"}
                TextFieldsProps={{
                  disabled: false,
                  size: "small",
                  placeholder: "_",
                }}
                onComplete={onChangeValueOtp}
              />
              {fieldState.invalid ? (
                <FormHelperText error>OTP invalid</FormHelperText>
              ) : null}
            </Box>
          )}
        />
      </InputContainer>

      <ContainerTitle>
        <TitleReceiveCode>Didn’t receive code? </TitleReceiveCode>
        <TitleResentCode> Resend</TitleResentCode>
      </ContainerTitle>

      <ButtonStyled styleactive={isComplete} type="submit" variant="contained">
        VERIFY
      </ButtonStyled>

      <BoxLinkStyled>
        <LinkStyled onClick={() => onNavigateToBack()}>Back</LinkStyled>
      </BoxLinkStyled>
    </BoxFormFillCode>
  );
};

export default FormFillCode;
