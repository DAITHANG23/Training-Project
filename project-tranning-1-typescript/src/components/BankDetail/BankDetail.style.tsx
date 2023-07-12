import { styled } from "@mui/material";
import Link from "@mui/material/Link";
import { Typography } from "@mui/material";
export const ImageContainer = styled("div")(() => ({
  width: "30%",
  marginBottom: "20px",
}));

export const StyledImageBank = styled("img")`
  width: 100%;
`;
export const ContainerContact = styled("div")(() => ({
  display: "flex",
  gap: "10px",
  height: "30px",
}));

export const TypographyStyled = styled(Typography)(() => ({
  marginBottom: "30px",
  fontWeight: "700",
}));

export const LinkStyled = styled(Link)(({ theme }) => ({
  color: `${theme.palette.primary.main}`,
  marginBottom: "25px",
  fontStyle: "italic",
  fontWeight: "500",
  fontSize: "17px",
}));
