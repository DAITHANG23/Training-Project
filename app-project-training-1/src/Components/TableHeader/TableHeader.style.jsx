import { styled } from "@mui/material/styles";
import { TableHead, TableSortLabel } from "@mui/material";

export const TableHeaderStyled = styled(TableHead)(() => ({
  marginBottom: "50px",
}));

export const TableSortLabelStyle = styled(TableSortLabel)(({ theme }) => ({
  "&.MuiTableSortLabel-root.Mui-active": {
    color: `${theme.palette.text.main} !important`,
    fontSize: "14px !important",
    fontWeight: "600 !important",
  },
  "& .MuiTableSortLabel-icon": {
    color: `${theme.palette.text.main} !important`,
    fontSize: "23px !important",
    fontWeight: "600 !important",
  },
}));
