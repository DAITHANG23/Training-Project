import { TableSortLabel, TableRow } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  TableHeaderStyled,
  TableSortLabelStyle,
  TableCellBankNameStyled,
  TableCellLabelStyled,
} from "@/components/TableHeader/TableHeader.Style";
interface BankData {
  id: number;
  name: string;
  isActive: boolean;
}
interface TableHeaderProps {
  valueToOrderBy: keyof BankData;
  oneOderDirection: "asc" | "desc";
  handleRequestSort: (property: keyof BankData) => void;
}

const TableHeader = (props: TableHeaderProps) => {
  const { valueToOrderBy, oneOderDirection, handleRequestSort } = props;

  const createSortHandle = (property: keyof BankData) => {
    handleRequestSort(property);
  };
  return (
    <TableHeaderStyled>
      <TableRow>
        <TableCellBankNameStyled key={"name"}>
          <TableSortLabelStyle
            active={valueToOrderBy === "name"}
            direction={valueToOrderBy === "name" ? oneOderDirection : "asc"}
            IconComponent={KeyboardArrowDownIcon}
            onClick={() => createSortHandle("name")}
          >
            Bank Name
          </TableSortLabelStyle>
        </TableCellBankNameStyled>

        <TableCellLabelStyled key={"isActive"} align="center">
          <TableSortLabel
            direction={valueToOrderBy === "isActive" ? oneOderDirection : "asc"}
            IconComponent={KeyboardArrowDownIcon}
            onClick={() => createSortHandle("isActive")}
          >
            Status
          </TableSortLabel>
        </TableCellLabelStyled>

        <TableCellLabelStyled></TableCellLabelStyled>
      </TableRow>
    </TableHeaderStyled>
  );
};

export default TableHeader;
