import { useState } from "react";
import {
  BoxContainer,
  ImageLogo,
  Typo,
  StyledBoxAlert,
  StyledAlert,
} from "@/App.styled";

import FormFillCode from "./components/FormFillCode/FormFillCode";
import FormLogin, { DataForm } from "@/components/FormLoginByGmail/FormLogin";
import { ThemeProvider } from "@mui/material/styles";
import customTheme from "@/themes/theme";

function App() {
  const [dataLogin, setDataLogin] = useState<DataForm>();
  const [isVerify, setIsVerify] = useState<boolean>();
  const [open, setOpent] = useState(true);
  const [isLogin, setIsLogin] = useState<boolean>();
  const [isLoginBySMS, setIsLoginBySMS] = useState<boolean>();

  const onSetDalaLogin = (dataLogin: DataForm, isLoginBySMS: boolean) => {
    setDataLogin(dataLogin);
    setIsLoginBySMS(isLoginBySMS);
  };

  const onVerify = (value: boolean) => {
    setIsVerify(value);
  };

  console.log(isVerify);
  const onBack = () => {
    setIsLogin(false);
  };
  return (
    <ThemeProvider theme={customTheme}>
      <BoxContainer>
        <ImageLogo src="../images/background.png" />
        {open && (
          <StyledBoxAlert>
            {isVerify ? (
              <StyledAlert
                icon={false}
                onClose={() => {
                  setOpent(false);
                }}
              >
                Code has been sent successfully
              </StyledAlert>
            ) : (
              <></>
            )}
          </StyledBoxAlert>
        )}

        {isLogin ? (
          <FormFillCode
            dataLogin={dataLogin}
            onVerify={onVerify}
            onBack={onBack}
            isLoginBySMS={isLoginBySMS}
          />
        ) : (
          <FormLogin onSetDalaLogin={onSetDalaLogin} setIsLogin={setIsLogin} />
        )}

        <Typo>@2023 Ecoxplore. All Right Reserved.</Typo>
      </BoxContainer>
    </ThemeProvider>
  );
}

export default App;
