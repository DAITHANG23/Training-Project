import { styled, TableCell } from "@mui/material";

export const ActiveCard = styled("div")(({ theme, styleActive }) => ({
  width: "125px",
  textAlign: "center",
  border: "none",
  borderRadius: "8px",
  padding: "12px 35px",
  backgroundColor: theme.palette.background.active,
  color: theme.palette.text.card,
  opacity: styleActive ? "1" : "0.7",
}));

export const Inactive = styled("div")(({ theme, styleActive }) => ({
  width: "125px",
  textAlign: "center",
  border: "none",
  borderRadius: "8px",
  padding: "12px 35px",
  backgroundColor: theme.palette.background.inactive,
  color: theme.palette.text.card,
  opacity: styleActive ? "1" : "0.7",
}));

export const TableCellNameStyle = styled(TableCell)(
  ({ theme, styleactive }) => ({
    borderTopLeftRadius: "16px",
    borderBottomLeftRadius: styleactive === "open" ? "0px" : "16px",
    borderBottom: `3px solid ${theme.palette.background.main}`,
    fontSize: "16px",
    paddingLeft: "25px !important",
  })
);

export const TableCellIconStyle = styled(TableCell)(
  ({ theme, styleactive }) => ({
    borderTopRightRadius: "16px",
    borderBottomRightRadius: styleactive === "open" ? "0px" : "16px",
    borderBottom: `3px solid ${theme.palette.background.main}`,
  })
);

export const TableCellBankDetail = styled(TableCell)(({ theme }) => ({
  paddingBottom: 0,
  paddingTop: 0,
  borderBottom: `3px solid ${theme.palette.background.main}`,
  borderBottomLeftRadius: "16px",
  borderBottomRightRadius: "16px",
}));
