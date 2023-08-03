import { Box } from "@mui/material";
import React, { useState } from "react";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import {
  StyleTableHeaderContainer,
  StyledButtonHeader,
  StyledBoxButton,
  StyledInputSearch,
} from "@/components/TableHeader/TableHeader.style";
const TableHeader = () => {
  const [status, setStatus] = useState<string>();
  const onClickChooseStatus = (status: string) => {
    setStatus(status);
  };
  return (
    <StyleTableHeaderContainer>
      <StyledBoxButton>
        <StyledButtonHeader
          status={status === "active"}
          onClick={() => onClickChooseStatus("active")}
        >
          Active
        </StyledButtonHeader>
        <StyledButtonHeader
          status={status === "suspended"}
          onClick={() => onClickChooseStatus("suspended")}
        >
          Suspended
        </StyledButtonHeader>
      </StyledBoxButton>
      <Box sx={{ position: "relative" }}>
        <PiMagnifyingGlassBold
          style={{
            position: "absolute",
            top: "6px",
            left: "16px",
            color: "#C5CACD",
            width: "20px",
            height: "20px",
          }}
        />
        <StyledInputSearch type="text" placeholder="Search" />
      </Box>
    </StyleTableHeaderContainer>
  );
};

export default TableHeader;
