import theme from "@/themes/theme";
import { Typography, styled, FormControl, Button, Box } from "@mui/material";

interface ContainerProps {
  theme: typeof theme;
}

export const BoxFormGmail = styled("form")(({ theme }: ContainerProps) => ({
  width: "510px",
  textAlign: "center",
  border: "none",
  padding: theme.spacing(5),
  boxShadow: "0px -4px 16px 0px #0000000D",
  margin: " 242px 300px 242px 260px",
}));

export const ImgLogo = styled("img")(({ theme }: ContainerProps) => ({
  width: "43%",
}));

export const TitleTypo = styled(Typography)(({ theme }: ContainerProps) => ({
  fontSize: "24px",
  fontWeight: "400",
  paddingTop: theme.spacing(2),
}));

export const InputContainer = styled(FormControl)(
  ({ theme }: ContainerProps) => ({
    paddingTop: theme.spacing(5),
    width: "100%",
  })
);

export const LabelStyled = styled("label")(({ theme }: ContainerProps) => ({
  textAlign: "left",
  fontSize: "14px",
  fontWeight: 400,
  color: theme.palette.text.secondary,
}));

export const InputStyled = styled("input")(({ theme }: ContainerProps) => ({
  padding: theme.spacing(1, 1, 1, 2),
  borderRadius: "1000px",
  border: `1px solid ${theme.palette.text.primary}`,
  marginTop: "5px",
}));

export const ButtonStyled = styled(Button)(({ theme }: ContainerProps) => ({
  width: "100%",
  color: theme.palette.background.paper,
  border: "none",
  borderRadius: "1000px",
  marginTop: theme.spacing(3),
}));
export const BoxLinkStyled = styled(Box)(({ theme }: ContainerProps) => ({
  paddingTop: theme.spacing(3),
  textDecoration: "none",
}));
export const LinkStyled = styled("p")(({ theme }: ContainerProps) => ({
  textDecoration: "none",
  cursor: "pointer",
}));

export const ContentError = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
}));
