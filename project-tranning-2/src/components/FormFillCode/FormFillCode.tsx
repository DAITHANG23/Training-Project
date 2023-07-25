import { useState, useEffect } from "react";

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
  MinuteResentCode,
  ContainerTitle,
  FormHelperTextStyled,
  ButtonResendCode,
  TitleResendProps,
  SecondResentCode,
} from "@/components/FormFillCode/FormFillCode.style";
import { useNavigate } from "react-router-dom";
import { DataForm } from "../FormLoginByGmail/FormLoginByGmail";
import { DataFormLog } from "../FormLoginByNumberPhone/FormLoginByNumberPhone";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { Box } from "@mui/material";

interface DataFillProps {
  dataLogin: DataForm | undefined;
  dataLoginNumberPhone: DataFormLog | undefined;
  onSetOtp: (value: IHandleSubmit) => void;
  isIdLoginByEmail: number | undefined;
}

export interface IHandleSubmit {
  otp: string;
}

const FormFillCode = ({
  dataLogin,
  dataLoginNumberPhone,
  onSetOtp,
  isIdLoginByEmail,
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

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  const resendOTP = () => {
    setMinutes(1);
    setSeconds(59);
  };
  return (
    <BoxFormFillCode onSubmit={handleSubmit(handleChange)}>
      <ImgLogo src="../images/logo.png" alt="logo" />

      <TitleTypo variant="h4">Energy Monitoring System</TitleTypo>

      {isIdLoginByEmail === 2 ? (
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
            required: true,
            validate: (value) => value === "989999",
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
                styleError={fieldState.invalid}
              />

              {fieldState.invalid ? (
                <FormHelperTextStyled error>
                  Wrong verify code. Please try again
                </FormHelperTextStyled>
              ) : null}
            </Box>
          )}
        />
      </InputContainer>

      <ContainerTitle>
        <TitleReceiveCode>Didn’t receive code? </TitleReceiveCode>

        <Box>
          {seconds > 0 || minutes > 0 ? (
            <></>
          ) : (
            <ButtonResendCode onClick={resendOTP}>Resend</ButtonResendCode>
          )}
          {seconds > 0 || minutes > 0 ? (
            <TitleResendProps>
              Resend after
              <MinuteResentCode>
                {minutes < 10 ? `0${minutes}` : minutes}:
              </MinuteResentCode>
              <SecondResentCode>
                {seconds < 10 ? `0${seconds}` : seconds}
              </SecondResentCode>
            </TitleResendProps>
          ) : (
            <></>
          )}
        </Box>
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
