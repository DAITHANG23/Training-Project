import { Box } from "@mui/material";
import { useState } from "react";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import {
  StyleTableHeaderContainer,
  StyledButtonHeader,
  StyledBoxButton,
  StyledInputSearch,
} from "@/components/TableHeader/TableHeader.style";

interface TableHeaderProps {
  onClickButtonStatus: (status: string) => void;
  onSearch: (item: string) => void;
}

const TableHeader = ({ onClickButtonStatus, onSearch }: TableHeaderProps) => {
  const [status, setStatus] = useState<string>("Active");
  const [search, setSearch] = useState("");
  const onClickChooseStatus = (status: string) => {
    setStatus(status);
    onClickButtonStatus(status);
  };

  const onSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <StyleTableHeaderContainer>
      <StyledBoxButton>
        <StyledButtonHeader
          status={status === "Active"}
          onClick={() => onClickChooseStatus("Active")}
        >
          Active
        </StyledButtonHeader>
        <StyledButtonHeader
          status={status === "Suspended"}
          onClick={() => onClickChooseStatus("Suspended")}
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
        <StyledInputSearch
          type="text"
          placeholder="Search"
          value={search}
          onChange={onSearchHandler}
        />
      </Box>
    </StyleTableHeaderContainer>
  );
};

export default TableHeader;
