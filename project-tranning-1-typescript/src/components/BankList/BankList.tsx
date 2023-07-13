import BankDetail from "@/components/BankDetail/BankDetail";
import { useState } from "react";
import { Table, TableBody, Collapse } from "@mui/material";
import TableHeader from "@/components/TableHeader/TableHeader";
import {
  ActiveCard,
  Inactive,
  TableCellNameStyle,
  TableCellIconStyle,
  TableCellBankDetail,
  TableRowTitleStyled,
  TableRowContentStyled,
  BoxStyled,
  TableContainerStyled,
  TableCellActiveStyled,
} from "./BankList.Style";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

type Order = "asc" | "desc";
interface BankDataProps {
  id: number;
  name: string;
  isActive: boolean;
}

const BankList = ({
  dataCountryBank,
}: {
  dataCountryBank: BankDataProps[] | undefined;
}) => {
  const [idBank, setIdBank] = useState(0);
  const [open, setOpen] = useState(false);
  const [cardIDOpen, setCardIDOpen] = useState(0);
  const [oneOderDirection, setOneOderDirection] = useState<Order>("asc");
  const [valueToOrderBy, setvalueToOrderBy] = useState("name");

  function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (a[orderBy] < b[orderBy]) {
      return -1;
    }
    if (a[orderBy] > b[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key
  ): (a: { [key in Key]: number }, b: { [key in Key]: number }) => number {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function sortedTableRow<T>(
    array: BankDataProps[] | undefined,
    comparator: (a: T, b: T) => number
  ) {
    const stabilizedThis = array?.map(
      (el, index) => [el, index] as [T, number]
    );

    console.log(stabilizedThis);
    stabilizedThis?.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis?.map((el) => el[0]);
  }

  const onClickBank = (bankId: number) => {
    setIdBank(bankId);
    setCardIDOpen(bankId);
    setOpen(!open);
  };

  const handleRequestSort = (property: string) => {
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
        <TableRowTitleStyled
          key={id}
          onClick={() => onClickBank(id)}
          aria-label="expand row"
        >
          <TableCellNameStyle styleactive={cardIDOpen === id ? "open" : ""}>
            {name}
          </TableCellNameStyle>
          <TableCellActiveStyled width={"100px"} align="right">
            {isActive ? (
              <ActiveCard styleActive={cardIDOpen === id ? open : undefined}>
                Active
              </ActiveCard>
            ) : (
              <Inactive styleActive={cardIDOpen === id ? open : undefined}>
                Inactive
              </Inactive>
            )}
          </TableCellActiveStyled>
          <TableCellIconStyle width={"50px"} align="right">
            <IconButton>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCellIconStyle>
        </TableRowTitleStyled>
        <TableRowContentStyled aria-label="purchases">
          <TableCellBankDetail component="th" colSpan={6}>
            <Collapse
              key={id}
              in={cardIDOpen === id ? open : undefined}
              timeout="auto"
              unmountOnExit
            >
              <BoxStyled>
                <BankDetail idBank={idBank} />
              </BoxStyled>
            </Collapse>
          </TableCellBankDetail>
        </TableRowContentStyled>
      </>
    );
  });
  return (
    <>
      {dataCountryBank && (
        <TableContainerStyled>
          <Table aria-label="collapsible table">
            <TableHeader
              valueToOrderBy={valueToOrderBy}
              oneOderDirection={oneOderDirection}
              handleRequestSort={handleRequestSort}
            />
            <TableBody>{bankItem}</TableBody>
          </Table>
        </TableContainerStyled>
      )}
    </>
  );
};

export default BankList;
