import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import {
  BoxFormGmail,
  ImgLogo,
  TitleTypo,
  InputContainer,
  StyledLabel,
  StyledInput,
  StyledButton,
  StyledLink,
  StyledBoxLink,
  ContentError,
  StyleInputNumberPhone,
} from "./FormLogin.style";

export interface DataForm {
  email?: string;
  tel?: string;
}

interface DataFormProps {
  onSetDalaLogin: (dataLogin: DataForm, isLoginBySMS: boolean) => void;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

const FormLogin = ({ onSetDalaLogin, setIsLogin }: DataFormProps) => {
  const { register, handleSubmit, formState, control } = useForm<DataForm>({
    defaultValues: {
      tel: "",
      email: "",
    },
  });
  const { errors } = formState;

  const [isLoginBySMS, setIsLoginBySMS] = useState(false);

  const onFormSubmitLoginEmailHandle = handleSubmit((dataLogin) => {
    if (dataLogin) {
      setIsLogin(true);
    }

    onSetDalaLogin(dataLogin, isLoginBySMS);

    console.log(dataLogin);
  });

  const onSetLoginBySMS = () => {
    setIsLoginBySMS(true);
  };

  const onSetLoginByEmail = () => {
    setIsLoginBySMS(false);
  };

  return (
    <BoxFormGmail onSubmit={onFormSubmitLoginEmailHandle}>
      <ImgLogo src="../images/logo.png" alt="logo" />

      <TitleTypo variant="h4">Energy Monitoring System</TitleTypo>
      <InputContainer variant="standard">
        {isLoginBySMS ? (
          <>
            <StyledLabel htmlFor="numberphone">Phone number *</StyledLabel>
            <Controller
              name="tel"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field, fieldState }) => (
                <StyleInputNumberPhone
                  {...field}
                  defaultCountry={"SG"}
                  helperText={fieldState.invalid ? "Tel is invalid" : ""}
                  error={fieldState.invalid}
                />
              )}
            />
          </>
        ) : (
          <>
            <StyledLabel htmlFor="email">Email *</StyledLabel>
            <StyledInput
              id="email"
              type="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Please enter a valid email address.",
                },
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Invalid email address. ",
                },
              })}
            />
            <ContentError>{errors.email?.message}</ContentError>
          </>
        )}
      </InputContainer>

      <StyledButton type="submit" variant="contained">
        GET CODE
      </StyledButton>

      <StyledBoxLink>
        {isLoginBySMS ? (
          <StyledLink onClick={onSetLoginByEmail}>Login by Email</StyledLink>
        ) : (
          <StyledLink onClick={onSetLoginBySMS}>Login by SMS</StyledLink>
        )}
      </StyledBoxLink>
    </BoxFormGmail>
  );
};

export default FormLogin;
