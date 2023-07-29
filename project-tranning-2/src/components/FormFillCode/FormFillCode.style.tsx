import {
  Typography,
  styled,
  Button,
  Box,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { MuiOtpInput } from "mui-one-time-password-input";

export const BoxFormFillCode = styled("form")(({ theme }) => ({
  width: "510px",
  textAlign: "center",
  border: "none",
  padding: theme.spacing(5),
  boxShadow: "0px -4px 16px 0px #0000000D",
  margin: " 170px 300px 170px 260px",
}));

export const ImgLogo = styled("img")(() => ({
  width: "43%",
}));

export const TitleTypo = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  fontWeight: "400",
  paddingTop: theme.spacing(2),
}));

export const ContentEmail = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(4),
  textAlign: "center",
}));

export const StyledContent = styled(Typography)(() => ({
  fontSize: "16px",
  fontWeight: 400,
}));

export const StyledEmail = styled(Typography)(() => ({
  fontWeight: 700,
  fontSize: "16px",
}));

export const StyledInput = styled(MuiOtpInput)<{ styleError: boolean }>(
  ({ theme, styleError }) => ({
    "& .MuiInputBase-root": {
      borderRadius: "1000px",
      width: "56px",
      height: "56px",
      border: `1px solid ${theme?.palette.primary.contrastText}`,
      textAlign: "center",
      fontSize: "24px",
      fontWeight: 400,
    },
    " & .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: theme?.palette.primary.contrastText,
      },
    },
    "& .MuiInputBase-root ": {
      color: `${styleError ? "red" : ""}`,
      borderColor: `${styleError ? "red" : ""} `,
    },
    "& .MuiInputBase-root fieldset": {
      color: `${styleError ? "red" : ""}`,
      borderColor: `${styleError ? "red" : ""} `,
    },
  })
);

export const StyledButton = styled(Button)<{ styleactive: boolean }>(
  ({ theme, styleactive }) => ({
    width: "100%",
    color: styleactive ? theme?.palette.background.paper : "#94999C",
    border: "none",
    borderRadius: "1000px",
    marginTop: theme?.spacing(3),
    backgroundColor: styleactive ? theme?.palette.primary.main : "#F3F5F6",
  })
);

export const BoxLinkStyled = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(3),
}));

export const StyledLink = styled("p")(({ theme }) => ({
  textDecoration: "none",
  cursor: "pointer",
  color: theme.palette.primary.main,
  fontSize: "16px",
}));

export const InputContainer = styled(FormControl)(({ theme }) => ({
  paddingTop: theme.spacing(3),
  width: "100%",
  display: "flex",
  flexDirection: "row",
  gap: "12px",
}));

export const ContainerTitle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(4),
  display: "flex",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
  gap: "5px",
}));

export const TitleReceiveCode = styled("span")(({ theme }) => ({
  fontWeight: 400,
  fontSize: "16px",
  color: theme.palette.text.primary,
}));

export const ButtonResendCode = styled("button")(({ theme }) => ({
  color: theme?.palette.primary.main,
  border: "none",
  background: theme?.palette.background.paper,
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: 400,
  paddingTop: "3px",
}));

export const MinuteResentCode = styled("span")(({ theme }) => ({
  color: theme.palette.error.main,
  paddingLeft: "5px",
}));
export const SecondResentCode = styled("span")(({ theme }) => ({
  color: theme.palette.error.main,
}));

export const TitleResendProps = styled("p")(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export const StyledFormHelperText = styled(FormHelperText)(({ theme }) => ({
  paddingTop: theme.spacing(3),
  textAlign: "center",
  fontSize: "16px",
}));
