// import Collapse from "@mui/material/Collapse";
// import CardHeader from "@mui/material/CardHeader";
// import KeyboardArrowDownIcon from
//     "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpIcon from
//     "@mui/icons-material/KeyboardArrowUp";
// import IconButton from "@mui/material/IconButton";
//import { CollapseContainer } from './BankList.style';

import BankDetail from "../BankDetail/BankDetail";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableRow,
  Collapse,
  Box,
} from "@mui/material";
import TableHeader from "../TableHeader/TableHeader";
import { ActiveCard } from "./BankList.style";
import { Inactive } from "./BankList.style";
import { TableCell } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  TableCellNameStyle,
  TableCellIconStyle,
  TableCellBankDetail,
} from "./BankList.style";
import theme from "../../theme/theme";

const BankList = ({ dataCountryBank }) => {
  const [idBank, setIdBank] = useState(0);
  const [open, setOpen] = useState(false);
  const [cardIDOpen, setCardIDOpen] = useState([]);
  const [oneOderDirection, setOneOderDirection] = useState("asc");
  const [valueToOrderBy, setvalueToOrderBy] = useState("name");

  const descendingComparator = (a, b, orderBy) => {
    if (a[orderBy] < b[orderBy]) {
      return -1;
    }
    if (a[orderBy] > b[orderBy]) {
      return 1;
    }
    return 0;
  };

  const getComparator = (order, orderBy) => {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  };

  const sortedTableRow = (rowArray, comparator) => {
    const stabilizedRowArray = rowArray?.map((el, index) => [el, index]);
    stabilizedRowArray?.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });

    return stabilizedRowArray?.map((el) => el[0]);
  };
  const onClickBank = (bankId) => {
    setIdBank(bankId);
    setCardIDOpen(bankId);
    setOpen(!open);
  };

  const handleRequestSort = (property) => {
    const isAscending =
      valueToOrderBy === property && oneOderDirection === "asc";
    setvalueToOrderBy(property);
    setOneOderDirection(isAscending ? "desc" : "asc");
  };

  const bankItem = sortedTableRow(
    dataCountryBank,
    getComparator(oneOderDirection, valueToOrderBy)
  )?.map((bank) => {
    const { id, name, isActive } = bank;

    return (
      <>
        <TableRow
          key={id}
          onClick={() => onClickBank(id)}
          aria-label="expand row"
          size="small"
          sx={{
            cursor: "pointer",
            backgroundColor: `${theme.palette.background.card}`,
          }}
        >
          <TableCellNameStyle styleactive={cardIDOpen === id ? "open" : ""}>
            {name}
          </TableCellNameStyle>
          <TableCell
            width={"100px"}
            align="right"
            sx={{ borderBottom: `3px solid ${theme.palette.background.main}` }}
          >
            {isActive ? (
              <ActiveCard styleActive={cardIDOpen === id ? open : ""}>
                Active
              </ActiveCard>
            ) : (
              <Inactive styleActive={cardIDOpen === id ? open : ""}>
                Inactive
              </Inactive>
            )}
          </TableCell>
          <TableCellIconStyle width={"50px"} align="right">
            <IconButton>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCellIconStyle>
        </TableRow>
        <TableRow aria-label="purchases" sx={{ backgroundColor: "#FFF" }}>
          <TableCellBankDetail component="th" colSpan={6}>
            <Collapse
              key={id}
              in={cardIDOpen === id ? open : ""}
              timeout="auto"
              unmountOnExit
            >
              <Box sx={{ marginTop: "30px" }}>
                <BankDetail idBank={idBank} />
              </Box>
            </Collapse>
          </TableCellBankDetail>
        </TableRow>
      </>
    );
  });
  return (
    <>
      {dataCountryBank && (
        <TableContainer sx={{ marginBottom: "50px" }}>
          <Table aria-label="collapsible table">
            <TableHeader
              valueToOrderBy={valueToOrderBy}
              oneOderDirection={oneOderDirection}
              handleRequestSort={handleRequestSort}
            />
            <TableBody>{bankItem}</TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default BankList;

/* <CardHeader
               sx={{ width: "200px", fontSize: '10px', color: '#007bff' }}
               title="Bank name"
               action={
                   <IconButton
                       onClick={() => setOpen(!open)}
                       aria-label="expand"
                       size="small"
                   >
                       {open ? <KeyboardArrowUpIcon />
                           : <KeyboardArrowDownIcon />}
                   </IconButton>
               }
           > </CardHeader>
           <CollapseContainer >
               <Collapse in={open} timeout="auto"
                   unmountOnExit>
                   <BankItem dataCountryBank={dataCountryBank} />
               </Collapse>
           </CollapseContainer> */
