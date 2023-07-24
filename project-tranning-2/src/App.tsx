import { useState } from "react";
import { BoxContainer, ImageLogo, Typo } from "@/App.styled";
import FormLoginByGmail from "@/components/FormLoginByGmail/FormLoginByGmail";
import FormLoginByNumberPhone from "@/components/FormLoginByNumberPhone/FormLoginByNumberPhone";
import { Routes, Route } from "react-router-dom";
import FormFillCode from "./components/FormFillCode/FormFillCode";
import { DataForm } from "@/components/FormLoginByGmail/FormLoginByGmail";
import { DataFormLog } from "@/components/FormLoginByNumberPhone/FormLoginByNumberPhone";
import { IHandleSubmit } from "@/components/FormFillCode/FormFillCode";
import { Alert, Box } from "@mui/material";
function App() {
  const [dataLogin, setDataLogin] = useState<DataForm>();
  const [otp, setOtp] = useState<IHandleSubmit>();
  const [dataLoginNumberPhone, setDataLoginNumberPhone] =
    useState<DataFormLog>();

  const [open, setOpent] = useState(true);
  const OTP_PASS = "989999";
  const onSetDalaLogin = (dataLogin: DataForm) => {
    setDataLogin(dataLogin);
  };

  const onSetDalaLoginNumberPhone = (dataLogin: DataFormLog) => {
    setDataLoginNumberPhone(dataLogin);
  };

  const onSetOtp = (value: IHandleSubmit) => {
    setOtp(value);
  };
  console.log("otpApp", otp);
  return (
    <BoxContainer>
      <ImageLogo src="../images/background.png" />
      {open && (
        <Box sx={{ position: "absolute", top: "32px", left: "680px" }}>
          {otp?.otp === OTP_PASS ? (
            <Alert
              icon={false}
              sx={{
                width: "411px",
                backgroundColor: "#268278",
                color: "#FFFF",
                fontSize: "14px",
                padding: "8px, 16px, 8px, 16px",
                borderRadius: "1000px",
              }}
              onClose={() => {
                setOpent(false);
              }}
            >
              Code has been sent successfully
            </Alert>
          ) : (
            <></>
          )}
        </Box>
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
            />
          }
        />
      </Routes>

      <Typo>@2023 Ecoxplore. All Right Reserved.</Typo>
    </BoxContainer>
  );
}

export default App;
