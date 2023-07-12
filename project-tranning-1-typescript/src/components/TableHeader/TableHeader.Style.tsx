import { styled } from "@mui/material/styles";
import { TableCell, TableHead, TableSortLabel } from "@mui/material";

export const TableHeaderStyled = styled(TableHead)(() => ({
  marginBottom: "50px",
}));

export const TableSortLabelStyle = styled(TableSortLabel)(({ theme }) => ({
  "&.MuiTableSortLabel-root.Mui-active": {
    color: `${theme.palette.primary.contrastText} `,
    fontSize: "14px !important",
    fontWeight: "600 !important",
  },
  "& .MuiTableSortLabel-icon": {
    color: `${theme.palette.primary.contrastText} !important`,
    fontSize: "23px !important",
    fontWeight: "600 !important",
  },
}));

export const TableCellBankNameStyled = styled(TableCell)`
  border: none;
  padding-left: 25px !important;
`;

export const TableCellLabelStyled = styled(TableCell)`
  border: none;
`;
