import { styled, Box, Typography } from "@mui/material";
import theme from "@/themes/theme";

interface ContainerProps {
  theme: typeof theme;
}
export const BoxContainer = styled(Box)(() => ({
  display: "flex",
  position: "relative",
  height: "960px",
}));
export const ImageLogo = styled("img")(() => ({
  width: "25.6%",
  height: "100%",
}));

export const Typo = styled(Typography)(({ theme }: ContainerProps) => ({
  position: "absolute",
  top: "904px",
  left: "715px",
  color: theme.palette.text.secondary,
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "24px",
  width: "400px",
  textAlign: "center",
}));
