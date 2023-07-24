import { useForm } from "react-hook-form";
import { useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";

export interface DataForm {
  email: string | undefined;
}

interface DataFormProps {
  onSetDalaLogin: (dataLogin: DataForm) => void;
}

const FormLoginByGmail = ({ onSetDalaLogin }: DataFormProps) => {
  const { register, handleSubmit, formState } = useForm<DataForm>();
  const { errors } = formState;
  const [isLogin, setIsLogin] = useState(false);

  const onFormSubmitLoginEmailHandle = handleSubmit((dataLogin) => {
    if (dataLogin) {
      setIsLogin(true);
    }
    onSetDalaLogin(dataLogin);
  });

  const navigate = useNavigate();
  const onNavigateToFillForm = () => {
    const to = "/LoginFillCode";

    if (isLogin) {
      navigate(to);
    }
  };

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

      <ButtonStyled
        onClick={onNavigateToFillForm}
        type="submit"
        variant="contained"
      >
        GET CODE
      </ButtonStyled>

      <BoxLinkStyled>
        <Link to="/LoginByNumber" style={{ textDecoration: "none" }}>
          <LinkStyled>Login by SMS</LinkStyled>
        </Link>
      </BoxLinkStyled>
    </BoxFormGmail>
  );
};

export default FormLoginByGmail;
