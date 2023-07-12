import {
  styled,
  TableCell,
  TableRow,
  Box,
  TableContainer,
} from "@mui/material";

interface ActiveCardProps {
  theme?: any;
  styleActive: boolean | undefined;
}

interface InactiveCardProps {
  theme?: any;
  styleActive: boolean | undefined;
}

interface TableCellNameProps {
  theme?: any;
  styleactive: string;
}

interface TableCellIconProps {
  theme?: any;
  styleactive?: string;
}

export const ActiveCard = styled("div")(
  ({ theme, styleActive }: ActiveCardProps) => ({
    width: "125px",
    textAlign: "center",
    border: "none",
    borderRadius: "8px",
    padding: "12px 35px",
    backgroundColor: "rgb(7, 206, 7)",
    color: theme.palette.text.secondary,
    opacity: styleActive ? "1" : "0.7",
  })
);

export const Inactive = styled("div")(
  ({ theme, styleActive }: InactiveCardProps) => ({
    width: "125px",
    textAlign: "center",
    border: "none",
    borderRadius: "8px",
    padding: "12px 35px",
    backgroundColor: "rgb(235, 154, 4)",
    color: theme.palette.text.secondary,
    opacity: styleActive ? "1" : "0.7",
  })
);

export const TableCellNameStyle = styled(TableCell)(
  ({ theme, styleactive }: TableCellNameProps) => ({
    borderTopLeftRadius: "16px",
    borderBottomLeftRadius: styleactive === "open" ? "0px" : "16px",
    borderBottom: `3px solid ${theme.palette.background.default}`,
    fontSize: "16px",
    paddingLeft: "25px !important",
  })
);

export const TableCellIconStyle = styled(TableCell)(
  ({ theme, styleactive }: TableCellIconProps) => ({
    borderTopRightRadius: "16px",
    borderBottomRightRadius: styleactive === "open" ? "0px" : "16px",
    borderBottom: `3px solid ${theme.palette.background.default}`,
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

export const TableRowContentStyled = styled(TableRow)(({ theme }) => ({
  backgroundColor: "#FFF",
}));

export const BoxStyled = styled(Box)(({ theme }) => ({
  marginTop: "30px",
}));

export const TableContainerStyled = styled(TableContainer)`
  margin-bottom: 50px;
`;
