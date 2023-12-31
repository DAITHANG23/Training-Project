import { Typography, styled, FormControl, Button, Box } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";

export const BoxFormGmail = styled("form")(({ theme }) => ({
  width: "510px",
  textAlign: "center",
  border: "none",
  padding: theme.spacing(5),
  boxShadow: "0px -4px 16px 0px #0000000D",
  margin: " 242px 300px 242px 260px",
}));

export const ImgLogo = styled("img")(() => ({
  width: "43%",
}));

export const TitleTypo = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  fontWeight: "400",
  paddingTop: theme.spacing(2),
}));

export const InputContainer = styled(FormControl)(({ theme }) => ({
  paddingTop: theme.spacing(5),
  width: "100%",
}));

export const StyledLabel = styled("label")(({ theme }) => ({
  textAlign: "left",
  fontSize: "14px",
  fontWeight: 400,
  color: theme.palette.text.secondary,
}));

export const StyledInput = styled("input")(({ theme }) => ({
  padding: theme.spacing(1, 1, 1, 2),
  borderRadius: "1000px",
  border: `1px solid ${theme.palette.text.primary}`,
  marginTop: "5px",
}));

export const StyleInputNumberPhone = styled(MuiTelInput)(({ theme }) => ({
  "& .MuiInputBase-root": {
    borderRadius: "1000px",
    marginTop: "5px",
    border: `1px solid ${theme.palette.primary.contrastText}`,
  },

  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 2),
    fontSize: "14px",
  },

  "& .MuiFormHelperText-root.Mui-error": {
    fontSize: "16px",
    textAlign: "center",
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  width: "100%",
  color: theme.palette.background.paper,
  border: "none",
  borderRadius: "1000px",
  marginTop: theme.spacing(3),
}));
export const StyledBoxLink = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(3),
  textDecoration: "none",
}));
export const StyledLink = styled("p")(({ theme }) => ({
  textDecoration: "none",
  cursor: "pointer",
  color: theme.palette.primary.main,
}));

export const ContentError = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
  paddingTop: "5px",
}));
