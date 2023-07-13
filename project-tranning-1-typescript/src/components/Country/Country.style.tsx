import { styled, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import theme from "@/theme/theme";

interface StyledImageProps {
  isComing: boolean;
}

interface CountryProps {
  status: boolean;
  isSelected: boolean;
  theme?: typeof theme;
}

export const CardImage = styled("div")`
  width: 50%;
  margin-bottom: 10px;
`;
export const StyledImage = styled("img")(({ isComing }: StyledImageProps) => ({
  width: isComing ? "70%" : "100%",
}));

export const CountryContainer = styled("div")(
  ({ status, isSelected, theme }: CountryProps) => ({
    height: "100%",
    width: "100%",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    opacity: status ? "0.4" : "1",
    border: isSelected
      ? `${theme?.palette.primary.main} 2px solid`
      : `${theme?.palette.secondary.main} 2px solid`,
    borderRadius: "8px",
  })
);

export const CardCheck = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "0px",
  left: "0px",
  borderTop: `20px solid ${theme.palette.primary.main}`,
  borderLeft: `20px solid ${theme.palette.primary.main}`,
  borderBottom: "20px solid transparent",
  borderRight: "20px solid transparent",
  borderRadius: "8px",
}));

export const DonIconStyle = styled(DoneIcon)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.text.secondary,
  width: "16px",
  height: "16px",
  position: "absolute",
  top: "-16px",
  left: "-16px",
}));

export const TypographyNameStyled = styled(Typography)`
  fontweight: 600;
`;
