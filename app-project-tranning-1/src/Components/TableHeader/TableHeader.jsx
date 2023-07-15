import React from "react";
import { TableSortLabel } from "@mui/material";
import { TableCell, TableRow } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { TableHeaderStyled, TableSortLabelStyle } from "./TableHeader.style";

const TableHeader = (props) => {
  const { valueToOrderBy, oneOderDirection, handleRequestSort } = props;

  const createSortHandle = (property) => {
    handleRequestSort(property);
  };
  return (
    <TableHeaderStyled>
      <TableRow>
        <TableCell
          key={"name"}
          sx={{ border: "none", paddingLeft: "25px !important" }}
        >
          <TableSortLabelStyle
            active={valueToOrderBy === "name"}
            direction={valueToOrderBy === "name" ? oneOderDirection : "asc"}
            IconComponent={KeyboardArrowDownIcon}
            onClick={() => createSortHandle("name")}
          >
            Bank Name
          </TableSortLabelStyle>
        </TableCell>

        <TableCell key={"status"} align="center" sx={{ border: "none" }}>
          <TableSortLabel
            direction={valueToOrderBy === "status" ? oneOderDirection : "asc"}
            IconComponent={KeyboardArrowDownIcon}
            onClick={() => createSortHandle("status")}
          >
            Status
          </TableSortLabel>
        </TableCell>

        <TableCell sx={{ border: "none" }}></TableCell>
      </TableRow>
    </TableHeaderStyled>
  );
};

export default TableHeader;
