import {
  styled,
  TableCell,
  Typography,
  TableBody,
  TableHead,
  TableContainer,
  TablePagination,
} from "@mui/material";

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  width: "93%",
  margin: "32px 40px",
  border: "none",
  borderRadius: "16px",
}));
export const StyledTableBody = styled(TableBody)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export const StyledTableHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  border: "none",
  "& .css-1smula1-MuiTableCell-root": {
    border: "none",
  },
}));
export const StyledTitleRow = styled(TableCell)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 400,
  color: theme.palette.text.primary,
  border: "none",
  width: "181px",
}));

export const StyledTableRowContent = styled(Typography)(() => ({
  fontSize: "14px",
}));

export const StyledTitleNumberPhone = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.light,
  fontSize: "14px",
}));

export const StyledTableCellName = styled(TableCell)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
}));

export const StyledTitleStatus = styled(Typography)(({ theme }) => ({
  border: "none",
  color: theme.palette.background.paper,
  backgroundColor: theme.palette.text.primary,
  textAlign: "center",
  padding: "4px 12px",
  borderRadius: "100px",
  width: "92px",
  fontSize: "14px",
  fontWeight: 400,
}));

export const StyledButtonEdit = styled("button")(({ theme }) => ({
  border: "none",
  cursor: "pointer",
  backgroundColor: theme.palette.background.paper,
}));

export const StyledTablePagination = styled(TablePagination)(
  ({ theme }) => ({})
);
