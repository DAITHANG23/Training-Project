import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
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
} from "@/components/FormLoginByNumberPhone/FormLoginByNumberPhone.style";
import { Link, useNavigate } from "react-router-dom";

export interface DataFormLog {
  tel: string | undefined;
}
interface DataFormProps {
  onSetDalaLoginNumberPhone: (dataLogin: DataFormLog, id: number) => void;
}
const FormLoginByNumberPhone = ({
  onSetDalaLoginNumberPhone,
}: DataFormProps) => {
  const [isLogin, setIsLogin] = useState(false);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      tel: "",
    },
  });

  const onFormSubmitLoginNumberPhoneHandle = handleSubmit((dataLogin) => {
    const id = 3;
    onSetDalaLoginNumberPhone(dataLogin, id);
    if (dataLogin) {
      setIsLogin(true);
    }
  });

  const navigate = useNavigate();
  const onNavigateToFillForm = () => {
    const to = "/LoginFillCode";
    if (isLogin) {
      navigate(to);
    }
  };
  return (
    <BoxFormNumberPhone onSubmit={onFormSubmitLoginNumberPhoneHandle}>
      <ImgLogo src="../images/logo.png" alt="logo" />

      <TitleTypo variant="h4">Energy Monitoring System</TitleTypo>
      <InputContainer variant="standard">
        <LabelStyled htmlFor="numberphone">Phone number *</LabelStyled>

        <Controller
          name="tel"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field, fieldState }) => (
            <InputStyled
              {...field}
              defaultCountry={"SG"}
              helperText={fieldState.invalid ? "Tel is invalid" : ""}
              error={fieldState.invalid}
            />
          )}
        />
      </InputContainer>
      <ButtonStyled
        onClick={onNavigateToFillForm}
        type="submit"
        variant="contained"
      >
        GET CODE
      </ButtonStyled>

      <BoxLinkStyled>
        <Link to="/" style={{ textDecoration: "none" }}>
          <LinkStyled>Login by Email</LinkStyled>
        </Link>
      </BoxLinkStyled>
    </BoxFormNumberPhone>
  );
};

export default FormLoginByNumberPhone;
