import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Modal,
  Box,
  Button,
  Typography,
  FormControl,
} from "@mui/material";
import {
  StyledBoxContainer,
  StyledButton,
  StyledTitle,
  StyleBoxHeader,
  StyledTableCell,
  StyleEditIcon,
  StyledTableContainer,
  StyledTableCellDes,
} from "@/components/Role&Permission/Role&Permission.style";
import { v4 as uuidv4 } from "uuid";
import RoleUpdate from "../RoleUpdate/RoleUpdate";
interface IRoles {
  role?: string;
  describe?: string;
  id?: string;
}
const RolePermission = () => {
  const [roles, setRoles] = useState([
    { role: "Administrator", describe: "Des...", id: "1" },
    {
      role: "Management",
      describe: "Des...",
      id: "2",
    },
    {
      role: "User",
      describe: "Des...",
      id: "3",
    },
  ]);

  const [roleUpdated, setRoleUpdate] = useState<string>();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onEditRoleHandler = (id: string) => {
    const existingRole = roles.find((roleItem) => roleItem.id === id);
    setRoleUpdate(existingRole?.role);
  };

  const listRolePermission = roles.map((roleItem) => {
    const { role, describe, id } = roleItem;
    return (
      <TableRow
        key={id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <StyledTableCell>{role}</StyledTableCell>
        <StyledTableCellDes align="left">{describe}</StyledTableCellDes>
        <TableCell align="right">
          <StyleEditIcon onClick={() => onEditRoleHandler(id)} />
        </TableCell>
      </TableRow>
    );
  });

  const { register, handleSubmit, formState } = useForm<IRoles>({
    defaultValues: {
      role: "",
      describe: "",
    },
  });
  const { errors } = formState;

  const onFormSubmitRoleHandle = handleSubmit((roleItem) => {
    const newRole = {
      ...roleItem,
      id: uuidv4(),
    };
    const newRoleList = [...roles, newRole];

    // setRoles(newRoleList);
  });

  return (
    <StyledBoxContainer>
      {roleUpdated ? (
        <RoleUpdate roleUpdated={roleUpdated} />
      ) : (
        <>
          <StyleBoxHeader>
            <StyledTitle>Roles</StyledTitle>
            <StyledButton onClick={handleOpen}>Create role</StyledButton>
          </StyleBoxHeader>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
            sx={{
              position: "absolute",
              top: "150px",
              left: "410px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#FFF",
                borderRadius: "16px",
                width: "620px",
                height: "410px",
                border: "none",
                padding: "26px 24px",
                position: "relative",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  sx={{ fontSize: "20px", fontWeight: "700", color: "#530F66" }}
                >
                  Create role
                </Typography>
                <button
                  style={{
                    borderRadius: "1000px",
                    width: "32px",
                    height: "32px",
                    cursor: "pointer",
                    border: "none",
                    color: "#55585B",
                    fontSize: "16px",
                  }}
                  onClick={handleClose}
                >
                  x
                </button>
              </Box>
              <form
                style={{ width: "100%", paddingTop: "48px" }}
                onSubmit={onFormSubmitRoleHandle}
              >
                <FormControl>
                  <label htmlFor="role">Name</label>
                  <input
                    style={{
                      width: "572px",
                      padding: "8px 16px",
                      borderRadius: "1000px",
                      marginTop: "3px",
                    }}
                    type="text"
                    id="role"
                    placeholder="Super Administrator"
                    {...register("role", {
                      required: {
                        value: true,
                        message: "Please enter a role.",
                      },
                    })}
                  />
                  <Box sx={{ marginTop: "24px" }}>
                    <input
                      type="text"
                      id="role"
                      style={{
                        width: "572px",
                        height: "122px",
                        borderRadius: "16px",
                        padding: "12px",
                      }}
                      placeholder="Des of role"
                      {...register("describe", {
                        required: {
                          value: true,
                          message: "Please enter a describe.",
                        },
                      })}
                    />
                    <Typography>{errors.role?.message}</Typography>
                    <Typography>{errors.describe?.message}</Typography>
                  </Box>

                  <Box
                    sx={{
                      position: "absolute",
                      top: "230px",
                      right: "0px",
                      display: "flex",
                      gap: "16px",
                    }}
                  >
                    <Button
                      sx={{
                        width: "87px",
                        height: "40",
                        border: "1px solid #530F66",
                        fontSize: "12px",
                        fontWeight: "700",
                        padding: "12px 20px",
                        textAlign: "center",
                        borderRadius: "1000px",
                      }}
                      onClick={handleClose}
                    >
                      CANCEL
                    </Button>
                    <Button
                      sx={{
                        width: "87px",
                        height: "40",
                        border: "none",
                        fontSize: "12px",
                        fontWeight: "700",
                        padding: "12px 20px",
                        textAlign: "center",
                        borderRadius: "1000px",
                        backgroundColor: "#530F66",
                        color: "#FFF",
                      }}
                      type="submit"
                    >
                      CREATE
                    </Button>
                  </Box>
                </FormControl>
              </form>
            </Box>
          </Modal>
          <StyledTableContainer>
            <Table>
              <TableBody>{listRolePermission}</TableBody>
            </Table>
          </StyledTableContainer>
        </>
      )}
    </StyledBoxContainer>
  );
};

export default RolePermission;
