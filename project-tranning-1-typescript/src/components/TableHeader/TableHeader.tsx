import { TableSortLabel, TableRow } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  TableHeaderStyled,
  TableSortLabelStyle,
  TableCellBankNameStyled,
  TableCellLabelStyled,
} from "@/components/TableHeader/TableHeader.Style";

interface TableHeaderProps {
  valueToOrderBy: string;
  oneOderDirection: "asc" | "desc";
  handleRequestSort: (property: string) => void;
}

const TableHeader = (props: TableHeaderProps) => {
  const { valueToOrderBy, oneOderDirection, handleRequestSort } = props;

  const createSortHandle = (property: string) => {
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

        <TableCellLabelStyled key={"status"} align="center">
          <TableSortLabel
            direction={valueToOrderBy === "status" ? oneOderDirection : "asc"}
            IconComponent={KeyboardArrowDownIcon}
            onClick={() => createSortHandle("status")}
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
