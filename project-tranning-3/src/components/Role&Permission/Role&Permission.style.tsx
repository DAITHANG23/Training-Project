import {
  styled,
  Typography,
  Box,
  TableCell,
  TableContainer,
} from "@mui/material";
import { BiEditAlt } from "react-icons/bi";

export const StyledBoxContainer = styled("div")(() => ({
  margin: "40px",
}));

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  marginTop: theme.spacing(5),
  borderRadius: "16px",
}));
export const StyleBoxHeader = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const StyledButton = styled("button")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.background.paper,
  border: "none",
  borderRadius: "1000px",
  padding: theme.spacing(1, 3),
  textTransform: "uppercase",
  cursor: "pointer",
  transition: "all 0.5s",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: 700,
  color: theme.palette.text.primary,
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  width: "256px",
  color: theme.palette.primary.dark,
  fontSize: "14px",
  fontWeight: 400,
}));

export const StyledTableCellDes = styled(TableCell)(({ theme }) => ({
  color: theme.palette.primary.dark,
  fontSize: "14px",
  fontWeight: 400,
}));

export const StyleEditIcon = styled(BiEditAlt)(({ theme }) => ({
  cursor: "pointer",
  width: "32px",
  height: "32px",
  transition: "all 0.5s",
  color: theme.palette.primary.light,

  "&:hover": {
    transform: "scale(1.1)",
  },
}));
