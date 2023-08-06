import { useState, useEffect, useRef } from "react";
import {
  BoxFormFillCode,
  ImgLogo,
  TitleTypo,
  ContentEmail,
  StyledEmail,
  StyledButton,
  StyledLink,
  BoxLinkStyled,
  StyledContent,
  InputContainer,
  StyledInput,
  TitleReceiveCode,
  MinuteResentCode,
  ContainerTitle,
  StyledFormHelperText,
  ButtonResendCode,
  TitleResendProps,
  SecondResentCode,
} from "@/components/FormFillCode/FormFillCode.style";

import { DataForm } from "@/components/FormLogin/FormLogin";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { Box } from "@mui/material";

interface DataFillProps {
  dataLogin?: DataForm;
  onVerify: (value: boolean) => void;
  onBack: () => void;
  isLoginBySMS?: boolean;
}

export interface IHandleSubmit {
  otp?: string;
}

const FormFillCode = ({
  dataLogin,
  onVerify,
  onBack,
  isLoginBySMS,
}: DataFillProps) => {
  const [isComplete, setIsComplete] = useState(false);

  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(59);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      otp: "98",
    },
  });

  const OTP_PASS = "989999";
  let interval: NodeJS.Timer;
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    onTimeHandler();
    return () => {
      clearInterval(interval);
    };
  });

  useEffect(() => {
    if (isComplete) {
      ref.current?.click();
    }
  }, [isComplete]);

  const handleChange: SubmitHandler<IHandleSubmit> = (newValue) => {
    if (newValue.otp === OTP_PASS) {
      return onVerify(true);
    }
  };

  const onChangeValueOtp = (value: string) => {
    if (value.length !== 6) {
      return setIsComplete(false);
    } else {
      return setIsComplete(true);
    }
  };

  const onTimeHandler = () => {
    interval = setInterval(() => {
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
  };

  const resendOTP = () => {
    setMinutes(minutes ? minutes : 1);
    setSeconds(seconds ? seconds : 59);
  };

  function matchIsNumeric(text: string) {
    const isNumber = typeof text === "number";
    return (isNumber || text !== "Spacebar") && !isNaN(Number(text));
  }

  const validateChar = (value: string, index: number) => {
    return matchIsNumeric(value);
  };

  return (
    <BoxFormFillCode onSubmit={handleSubmit(handleChange)}>
      <ImgLogo src="../images/logo.png" alt="logo" />

      <TitleTypo variant="h4">Energy Monitoring System</TitleTypo>
      {isLoginBySMS ? (
        <ContentEmail>
          <StyledContent>
            A 4 digit code has been sent to phone number
          </StyledContent>
          <StyledEmail>{dataLogin?.tel}</StyledEmail>
        </ContentEmail>
      ) : (
        <ContentEmail>
          <StyledContent>
            A 4 digit code has been sent to your email
          </StyledContent>
          <StyledEmail>{dataLogin?.email}</StyledEmail>
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
              <StyledInput
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
                validateChar={validateChar}
              />

              {fieldState.invalid ? (
                <StyledFormHelperText error>
                  Wrong verify code. Please try again
                </StyledFormHelperText>
              ) : null}
            </Box>
          )}
        />
      </InputContainer>

      <ContainerTitle>
        <TitleReceiveCode>Didn’t receive code? </TitleReceiveCode>

        <Box>
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
            <ButtonResendCode onClick={resendOTP}>Resend</ButtonResendCode>
          )}
        </Box>
      </ContainerTitle>

      <StyledButton
        ref={ref}
        styleactive={isComplete}
        type="submit"
        variant="contained"
      >
        VERIFY
      </StyledButton>

      <BoxLinkStyled>
        <StyledLink onClick={onBack}>Back</StyledLink>
      </BoxLinkStyled>
    </BoxFormFillCode>
  );
};

export default FormFillCode;
