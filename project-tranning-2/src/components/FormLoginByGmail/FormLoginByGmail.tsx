import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import {
  BoxFormGmail,
  ImgLogo,
  TitleTypo,
  InputContainer,
  LabelStyled,
  InputStyled,
  ButtonStyled,
  LinkStyled,
  BoxLinkStyled,
  ContentError,
} from "./FormLoginByGmail.style";
import { Link } from "react-router-dom";

interface DataForm {
  email: string;
}

const FormLoginByGmail = () => {
  const { register, handleSubmit, formState } = useForm<DataForm>();
  const { errors } = formState;
  const [dataLogin, setDataLogin] = useState<DataForm>();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    window.localStorage.setItem("successLogin", JSON.stringify(dataLogin));
  }, [dataLogin]);

  const onFormSubmitLoginEmailHandle = handleSubmit((dataLogin) => {
    setDataLogin(dataLogin);
    if (dataLogin) {
      setIsLogin(true);
    }
  });

  return (
    <BoxFormGmail onSubmit={onFormSubmitLoginEmailHandle}>
      <ImgLogo src="../images/logo.png" alt="logo" />

      <TitleTypo variant="h4">Energy Monitoring System</TitleTypo>
      <InputContainer variant="standard">
        <LabelStyled htmlFor="email">Email *</LabelStyled>
        <InputStyled
          id="email"
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "Vui lòng nhập email",
            },
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Nhập e-mail không đúng",
            },
          })}
        />
        <ContentError>{errors.email?.message}</ContentError>
      </InputContainer>

      {/* <Link to="/LoginFillCode"> */}
      <ButtonStyled type="submit" variant="contained">
        GET CODE
      </ButtonStyled>
      {/* </Link> */}

      <BoxLinkStyled>
        <Link to="/LoginByNumber" style={{ textDecoration: "none" }}>
          <LinkStyled>Login by SMS</LinkStyled>
        </Link>
      </BoxLinkStyled>
    </BoxFormGmail>
  );
};

export default FormLoginByGmail;
