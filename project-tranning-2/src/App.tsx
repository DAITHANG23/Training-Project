import { BoxContainer, ImageLogo, Typo } from "@/App.styled";
import FormLoginByGmail from "@/components/FormLoginByGmail/FormLoginByGmail";

import FormLoginByNumberPhone from "@/components/FormLoginByNumberPhone/FormLoginByNumberPhone";
import { Routes, Route } from "react-router-dom";
import FormFillCode from "./components/FormFillCode/FormFillCode";
function App() {
  return (
    <BoxContainer>
      <ImageLogo src="../images/background.png" />
      <Routes>
        <Route path="/" element={<FormLoginByGmail />} />
        <Route path="/LoginByNumber" element={<FormLoginByNumberPhone />} />
        <Route path="/LoginFillCode" element={<FormFillCode />} />
      </Routes>

      <Typo>@2023 Ecoxplore. All Right Reserved.</Typo>
    </BoxContainer>
  );
}

export default App;
