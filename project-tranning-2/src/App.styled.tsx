import { styled, Box, Typography, Alert } from "@mui/material";
import theme from "@/themes/theme";

interface ContainerProps {
  theme: typeof theme;
}
export const BoxContainer = styled(Box)(() => ({
  display: "flex",
  position: "relative",
  height: "960px",
  maxWidth: "1440px",
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

export const StyledBoxAlert = styled(Box)(() => ({
  position: "absolute",
  top: "32px",
  left: "680px",
}));

export const StyledAlert = styled(Alert)(({ theme }) => ({
  width: "411px",
  backgroundColor: "#268278",
  color: "#FFFF",
  fontSize: "14px",
  padding: theme.spacing(0, 2),
  borderRadius: "1000px",
}));
