import { useEffect, useState } from "react";
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
import { useUsers } from "@/hooks/useFetch";
import { Users } from "@/hooks/useFetch";
import RolePermission from "../Role&Permission/Role&Permission";

interface TableListUserProps {
  isPage?: number;
}
const TableListUser = ({ isPage }: TableListUserProps) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [users, setUsers] = useState<Users[]>();
  const [statusUser, setStatusUser] = useState<Users[]>();
  const { data, error, isLoading } = useUsers();

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data]);
  if (isLoading) return <>{"Loading..."}</>;
  if (error instanceof Error)
    return <>{"An error has occurred: " + error.message}</>;

  const TableListUsers = statusUser
    ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((user) => {
      const { id, name, image, numberPhone, status, role, team, lastActive } =
        user;
      return (
        <TableRow key={id}>
          <StyledTableCellName>
            <img
              src={`./images/${image}`}
              alt="avatar"
              width={"40px"}
              height={"40px"}
            />
            <Box>
              <StyledTableRowContent>{name}</StyledTableRowContent>
              <StyledTitleNumberPhone>{numberPhone}</StyledTitleNumberPhone>
            </Box>
          </StyledTableCellName>
          <TableCell>{role}</TableCell>
          <TableCell>{team}</TableCell>
          <TableCell sx={{ paddingLeft: "50px" }}>
            <StyledTitleStatus>{status}</StyledTitleStatus>
          </TableCell>
          <TableCell>
            <StyledTableRowContent>{lastActive.date}</StyledTableRowContent>
            <StyledTableRowContent>{lastActive.time}</StyledTableRowContent>
          </TableCell>
          <TableCell>
            <StyledButtonEdit>
              <MoreVertIcon sx={{ color: "#94999C" }} />
            </StyledButtonEdit>
          </TableCell>
        </TableRow>
      );
    });
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const onClickButtonStatus = (status: string) => {
    const listUsers = users?.filter((user) => {
      return user.status === status;
    });

    setStatusUser(listUsers);
  };

  return (
    <div>
      {isPage === 1 ? (
        <StyledTableContainer>
          <TableHeader onClickButtonStatus={onClickButtonStatus} />
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
            <StyledTableBody>{TableListUsers}</StyledTableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 20, 30]}
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
      ) : (
        <RolePermission />
      )}
    </div>
  );
};

export default TableListUser;
