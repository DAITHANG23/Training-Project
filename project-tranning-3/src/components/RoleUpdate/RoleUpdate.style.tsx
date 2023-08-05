import {
  styled,
  TableCell,
  Collapse,
  Typography,
  Button,
  TableContainer,
  Box,
} from "@mui/material";

export const Styled = styled("div");

export const StyledTableCell = styled(TableCell)<{ styleActive: boolean }>(
  ({ theme, styleActive }) => ({
    fontSize: "14px",
    fontWeight: 700,
    color: styleActive ? theme.palette.error.main : theme.palette.text.primary,
    "& .css-78trlr-MuiButtonBase-root-MuiIconButton-root": {
      color: styleActive
        ? theme.palette.error.main
        : theme.palette.text.primary,
    },
  })
);

export const StyledBoxHeader = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));
export const StyledBoxTitle = styled(Box)(() => ({
  display: "flex",
}));
export const StyledTableCellTitle = styled(TableCell)(() => ({
  width: "624px",
  fontSize: "16px",
  fontWeight: 700,
}));
export const StyledCollapse = styled(Collapse)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.primary.light,
  border: "none",
  borderRadius: "1000px",
  padding: "2px 9px",
  height: "28px",
}));

export const StyledTitleActive = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  border: "none",
  borderRadius: "1000px",
  padding: "2px 9px",
  height: "28px",
}));

export const StyledSpan = styled("span")(({ theme }) => ({
  color: theme.palette.primary.light,
  fontSize: "16px",
  padding: "0 5px",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1, 3),
  color: theme.palette.background.paper,
  border: "none",
  borderRadius: "1000px",
  width: "70px",
  height: "40px",
}));

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  marginTop: "38px",
  borderRadius: "16px",
  border: "none",
}));
