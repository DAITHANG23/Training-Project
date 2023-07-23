import theme from "@/themes/theme";
import { Typography, styled, Button, Box, FormControl } from "@mui/material";

interface ContainerImgLogoProps {
  theme: typeof theme;
}

export const BoxFormFillCode = styled("form")(
  ({ theme }: ContainerImgLogoProps) => ({
    width: "510px",
    textAlign: "center",
    border: "none",
    padding: theme.spacing(5),
    boxShadow: "0px -4px 16px 0px #0000000D",
    margin: " 170px 300px 170px 260px",
  })
);

export const ImgLogo = styled("img")(({ theme }: ContainerImgLogoProps) => ({
  width: "43%",
}));

export const TitleTypo = styled(Typography)(
  ({ theme }: ContainerImgLogoProps) => ({
    fontSize: "24px",
    fontWeight: "400",
    paddingTop: theme.spacing(2),
  })
);

export const ContentEmail = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(4),
  textAlign: "center",
}));

export const ContentStyled = styled(Typography)(() => ({
  fontSize: "16px",
  fontWeight: 400,
}));
export const EmailStyled = styled(Typography)(() => ({
  fontWeight: 700,
  fontSize: "16px",
}));

export const InputStyled = styled("input")(
  ({ theme }: ContainerImgLogoProps) => ({
    width: "56px",
    height: "56px",
    borderRadius: "1000px",
    border: `1px solid ${theme.palette.text.primary}`,
    padding: theme.spacing(1),
    textAlign: "center",
    fontSize: "24px",
    fontWeight: 400,
  })
);

export const ButtonStyled = styled(Button)(
  ({ theme }: ContainerImgLogoProps) => ({
    width: "100%",
    color: theme.palette.background.paper,
    border: "none",
    borderRadius: "1000px",
    marginTop: theme.spacing(3),
  })
);
export const BoxLinkStyled = styled(Box)(
  ({ theme }: ContainerImgLogoProps) => ({
    paddingTop: theme.spacing(3),
  })
);
export const LinkStyled = styled("p")(({ theme }: ContainerImgLogoProps) => ({
  textDecoration: "none",
  cursor: "pointer",
}));

export const InputContainer = styled(FormControl)(
  ({ theme }: ContainerImgLogoProps) => ({
    paddingTop: theme.spacing(3),
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: "12px",
  })
);
export const ContainerTitle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(5),
}));
export const TitleReceiveCode = styled("span")(({ theme }) => ({
  fontWeight: 400,
  fontSize: "16px",
  color: theme.palette.primary.contrastText,
}));

export const TitleResentCode = styled("button")(({ theme }) => ({
  fontWeight: 400,
  fontSize: "16px",
  color: theme.palette.primary.main,
  border: "none",
  backgroundColor: theme.palette.background.paper,
  cursor: "pointer",
}));
