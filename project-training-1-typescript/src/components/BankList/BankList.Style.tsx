import {
  styled,
  TableCell,
  TableRow,
  Box,
  TableContainer,
} from "@mui/material";

interface ActiveCardProps {
  styleActive?: boolean;
}

interface TableCellNameProps {
  styleactive: boolean;
}

export const ActiveCard = styled("div")<ActiveCardProps>(
  ({ theme, styleActive }) => ({
    width: "125px",
    textAlign: "center",
    border: "none",
    borderRadius: "8px",
    padding: "12px 35px",
    backgroundColor: "rgb(7, 206, 7)",
    color: theme?.palette.text.secondary,
    opacity: styleActive ? "1" : "0.7",
  })
);

export const Inactive = styled("div")<ActiveCardProps>(
  ({ theme, styleActive }) => ({
    width: "125px",
    textAlign: "center",
    border: "none",
    borderRadius: "8px",
    padding: "12px 35px",
    backgroundColor: "rgb(235, 154, 4)",
    color: theme?.palette.text.secondary,
    opacity: styleActive ? "1" : "0.7",
  })
);

export const TableCellNameStyle = styled(TableCell)<TableCellNameProps>(
  ({ theme, styleactive }) => ({
    borderTopLeftRadius: "16px",
    borderBottomLeftRadius: styleactive ? "0px" : "16px",
    borderBottom: `3px solid ${theme?.palette.background.default}`,
    fontSize: "16px",
    paddingLeft: "25px !important",
  })
);

export const TableCellIconStyle = styled(TableCell)<TableCellNameProps>(
  ({ theme, styleactive }) => ({
    borderTopRightRadius: "16px",
    borderBottomRightRadius: styleactive ? "0px" : "16px",
    borderBottom: `3px solid ${theme?.palette.background.default}`,
  })
);

export const TableCellBankDetail = styled(TableCell)(({ theme }) => ({
  paddingBottom: 0,
  paddingTop: 0,
  borderBottom: `3px solid ${theme.palette.background.default}`,
  borderBottomLeftRadius: "16px",
  borderBottomRightRadius: "16px",
}));

export const TableRowTitleStyled = styled(TableRow)(({ theme }) => ({
  cursor: "pointer",
  backgroundColor: `${theme.palette.background.paper}`,
}));

export const TableCellActiveStyled = styled(TableCell)(({ theme }) => ({
  borderBottom: `3px solid ${theme.palette.background.default}`,
}));

export const TableRowContentStyled = styled(TableRow)(() => ({
  backgroundColor: "#FFF",
}));

export const BoxStyled = styled(Box)(() => ({
  marginTop: "30px",
}));

export const TableContainerStyled = styled(TableContainer)`
  margin-bottom: 50px;
`;
