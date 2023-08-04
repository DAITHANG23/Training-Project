import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
interface RoleUpdateProps {
  roleUpdated: string;
}
const RoleUpdate = ({ roleUpdated }: RoleUpdateProps) => {
  const [cardIDOpen, setCardIDOpen] = useState<string>();
  const [open, setOpen] = useState(false);
  const elements = [
    "Dashboard",
    "Reports",
    "Alarm & Events",
    "Sensors",
    "Site configuration",
    "Device configuration",
    "Usermanagement",
  ];
  const onClick = (id: string) => {
    setCardIDOpen(id);
    setOpen(!open);
  };
  const TableBodyContent = elements.map((el) => {
    return (
      <>
        <TableRow onClick={() => onClick(el)} aria-label="expand row">
          <TableCell>{el}</TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell>
            <IconButton>
              {cardIDOpen === el && open ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </IconButton>
          </TableCell>
        </TableRow>
        <TableRow></TableRow>
      </>
    );
  });

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex" }}>
          <Typography
            sx={{
              backgroundColor: "#F3F5F6",
              color: "#94999C",
              border: "none",
              borderRadius: "1000px",
              padding: "2px 9px",
              height: "28px",
            }}
          >
            User management
          </Typography>
          <span style={{ color: "#94999C", fontSize: "16px" }}>/</span>
          <Typography
            sx={{
              backgroundColor: "#F3F5F6",
              color: "#94999C",
              border: "none",
              borderRadius: "1000px",
              padding: "2px 9px",
              fontSize: "14px",
              height: "28px",
            }}
          >
            Roles & Permission
          </Typography>
          <span style={{ color: "#94999C", fontSize: "16px" }}>/</span>
          <Typography
            sx={{
              backgroundColor: "#F3F5F6",
              color: "",
              border: "none",
              borderRadius: "1000px",
              padding: "2px 9px",
              height: "28px",
            }}
          >
            {roleUpdated} role
          </Typography>
        </Box>

        <Button
          sx={{
            backgroundColor: "#530F66",
            padding: "12px 20px",
            color: "#FFF",
            border: "none",
            borderRadius: "1000px",
            width: "70px",
            height: "40px",
          }}
        >
          SAVE
        </Button>
      </Box>

      <TableContainer
        sx={{
          backgroundColor: "#FFF",
          marginTop: "38px",
          borderRadius: "16px",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: "624px" }}>
                {roleUpdated.toUpperCase()} ROLE
              </TableCell>
              <TableCell sx={{ width: "200px" }}>Yes</TableCell>
              <TableCell sx={{ width: "200px" }}>No</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{TableBodyContent}</TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default RoleUpdate;
