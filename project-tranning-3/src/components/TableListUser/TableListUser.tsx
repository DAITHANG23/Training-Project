import { useState } from "react";
import {
  Table,
  TableRow,
  TableCell,
  Box,
  TablePagination,
} from "@mui/material";
import TableHeader from "@/components/TableHeader/TableHeader";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  StyledTitleRow,
  StyledTableCellName,
  StyledTableRowContent,
  StyledTitleNumberPhone,
  StyledTitleStatus,
  StyledButtonEdit,
  StyledTableBody,
  StyledTableHead,
  StyledTableContainer,
} from "@/components/TableListUser/TableListUser.styled";
const TableListUser = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div>
      <StyledTableContainer>
        <TableHeader />
        <Table>
          <StyledTableHead>
            <TableRow>
              <StyledTitleRow sx={{ width: "300px" }}>Name</StyledTitleRow>
              <StyledTitleRow>Role</StyledTitleRow>
              <StyledTitleRow>Team</StyledTitleRow>
              <StyledTitleRow sx={{ textAlign: "center" }}>
                Status
              </StyledTitleRow>
              <StyledTitleRow>Last active</StyledTitleRow>
              <StyledTitleRow sx={{ width: "32px" }}></StyledTitleRow>
            </TableRow>
          </StyledTableHead>
          <StyledTableBody>
            <TableRow>
              <StyledTableCellName>
                <img
                  src="./images/avatars.png"
                  alt="avatar"
                  width={"40px"}
                  height={"40px"}
                />
                <Box>
                  <StyledTableRowContent>Jane Cooper</StyledTableRowContent>
                  <StyledTitleNumberPhone>(65)1234 5678</StyledTitleNumberPhone>
                </Box>
              </StyledTableCellName>
              <TableCell>Admin</TableCell>
              <TableCell>Service</TableCell>
              <TableCell sx={{ paddingLeft: "50px" }}>
                <StyledTitleStatus>Suspended</StyledTitleStatus>
              </TableCell>
              <TableCell>
                <StyledTableRowContent>21 Jan 23</StyledTableRowContent>
                <StyledTableRowContent>13:30</StyledTableRowContent>
              </TableCell>
              <TableCell>
                <StyledButtonEdit>
                  <MoreVertIcon sx={{ color: "#94999C" }} />
                </StyledButtonEdit>
              </TableCell>
            </TableRow>
          </StyledTableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 20, 30]}
          component="div"
          count={20}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Show"
          labelDisplayedRows={({ from, to, count }) =>
            `From ${from}-${to} of  ${count} items`
          }
          sx={{
            backgroundColor: "#FFF",
            display: "flex",
            justifyContent: "space-between",
            "& .css-levciy-MuiTablePagination-displayedRows": {
              paddingLeft: "630px",
            },
          }}
        />
      </StyledTableContainer>
    </div>
  );
};

export default TableListUser;
