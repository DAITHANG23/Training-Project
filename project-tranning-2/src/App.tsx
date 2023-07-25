import { useState } from "react";
import {
  BoxContainer,
  ImageLogo,
  Typo,
  BoxAlertStyled,
  AlertStyled,
} from "@/App.styled";
import FormLoginByGmail from "@/components/FormLoginByGmail/FormLoginByGmail";
import FormLoginByNumberPhone from "@/components/FormLoginByNumberPhone/FormLoginByNumberPhone";
import { Routes, Route } from "react-router-dom";
import FormFillCode from "./components/FormFillCode/FormFillCode";
import { DataForm } from "@/components/FormLoginByGmail/FormLoginByGmail";
import { DataFormLog } from "@/components/FormLoginByNumberPhone/FormLoginByNumberPhone";
import { IHandleSubmit } from "@/components/FormFillCode/FormFillCode";

function App() {
  const [dataLogin, setDataLogin] = useState<DataForm>();
  const [otp, setOtp] = useState<IHandleSubmit>();
  const [dataLoginNumberPhone, setDataLoginNumberPhone] =
    useState<DataFormLog>();
  const [open, setOpent] = useState(true);
  const [isIdLoginByEmail, setIdLoginByEmail] = useState<number>();

  const OTP_PASS = "989999";
  const onSetDalaLogin = (dataLogin: DataForm, id: number) => {
    setDataLogin(dataLogin);
    setIdLoginByEmail(id);
  };

  const onSetDalaLoginNumberPhone = (dataLogin: DataFormLog, id: number) => {
    setDataLoginNumberPhone(dataLogin);
    setIdLoginByEmail(id);
  };

  const onSetOtp = (value: IHandleSubmit) => {
    setOtp(value);
  };

  return (
    <BoxContainer>
      <ImageLogo src="../images/background.png" />
      {open && (
        <BoxAlertStyled>
          {otp?.otp === OTP_PASS ? (
            <AlertStyled
              icon={false}
              onClose={() => {
                setOpent(false);
              }}
            >
              Code has been sent successfully
            </AlertStyled>
          ) : (
            <></>
          )}
        </BoxAlertStyled>
      )}

      <Routes>
        <Route
          path="/"
          element={<FormLoginByGmail onSetDalaLogin={onSetDalaLogin} />}
        />
        <Route
          path="/LoginByNumber"
          element={
            <FormLoginByNumberPhone
              onSetDalaLoginNumberPhone={onSetDalaLoginNumberPhone}
            />
          }
        />
        <Route
          path="/LoginFillCode"
          element={
            <FormFillCode
              dataLogin={dataLogin}
              dataLoginNumberPhone={dataLoginNumberPhone}
              onSetOtp={onSetOtp}
              isIdLoginByEmail={isIdLoginByEmail}
            />
          }
        />
      </Routes>

      <Typo>@2023 Ecoxplore. All Right Reserved.</Typo>
    </BoxContainer>
  );
}

export default App;
