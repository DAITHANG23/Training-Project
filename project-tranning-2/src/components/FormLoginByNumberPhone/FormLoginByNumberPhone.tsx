import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import {
  BoxFormNumberPhone,
  ImgLogo,
  TitleTypo,
  InputContainer,
  LabelStyled,
  InputStyled,
  ButtonStyled,
  LinkStyled,
  BoxLinkStyled,
  ContentError,
} from "@/components/FormLoginByNumberPhone/FormLoginByNumberPhone.style";
import { Link } from "react-router-dom";

interface DataForm {
  numberPhone: string;
}

const FormLoginByNumberPhone = () => {
  const { register, handleSubmit, formState } = useForm<DataForm>();
  const { errors } = formState;
  const [dataLogin, setDataLogin] = useState<DataForm>();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    window.localStorage.setItem("successLogin", JSON.stringify(dataLogin));
  }, [dataLogin]);

  const onFormSubmitLoginNumberPhoneHandle = handleSubmit((dataLogin) => {
    setDataLogin(dataLogin);
    if (dataLogin) {
      setIsLogin(true);
    }
  });

  console.log("datalogin", dataLogin);
  return (
    <BoxFormNumberPhone onSubmit={onFormSubmitLoginNumberPhoneHandle}>
      <ImgLogo src="../images/logo.png" alt="logo" />

      <TitleTypo variant="h4">Energy Monitoring System</TitleTypo>
      <InputContainer variant="standard">
        <LabelStyled htmlFor="numberphone">Phone number *</LabelStyled>
        <InputStyled
          id="numberphone"
          type="tel"
          {...register("numberPhone", {
            required: {
              value: true,
              message: "Vui lòng nhập số điện thoại",
            },
            // pattern: {
            //   value: /^\+\d{2}\ \d{4} \d{4}$/,
            //   message: "lỗi",
            // },
          })}
        />
        <ContentError>{errors.numberPhone?.message}</ContentError>
      </InputContainer>
      {/* <Link to="/LoginFillCode"> */}
      <ButtonStyled type="submit" variant="contained">
        GET CODE
      </ButtonStyled>
      {/* </Link> */}

      <BoxLinkStyled>
        <Link to="/" style={{ textDecoration: "none" }}>
          <LinkStyled>Login by Email</LinkStyled>
        </Link>
      </BoxLinkStyled>
    </BoxFormNumberPhone>
  );
};

export default FormLoginByNumberPhone;
