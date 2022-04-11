import * as React from "react";
import { useState, Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import DeleteIcon from "@mui/icons-material/Delete";
import { red } from "@mui/material/colors";

const headers = ["Ocupación", "LugarEempresa", "Fecha Incio", "Fecha Fin"];

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;
  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default function CustomPaginationActionsTable(props) {
  function createData(experiencia, descripcion) {
    const object = { experiencia, descripcion };

    return object;
  }

  const rows = [];
  const [index, setIndex] = useState(0);
  const [openEliminarH, setOpenEliminarH] = useState(false);
  const [filasH, setfilasH] = useState(rows);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filasH.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 50 }}>
        <TableHead style={{ backgroundColor: "black" }}>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell key={index} align="left" style={{ color: "white" }}>
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={index}>
            <TableCell style={{ width: "15px" }} align="left">
              Jefe de TI
            </TableCell>
            <TableCell style={{ width: "15px" }} align="left">
              Empresa laboral 1
            </TableCell>
            <TableCell style={{ width: "15px" }} align="left">
              10/12/2022
            </TableCell>
            <TableCell style={{ width: "15px" }} align="left">
              10/03/2022
            </TableCell>
          </TableRow>
          <TableRow key={index}>
            <TableCell style={{ width: "15px" }} align="left">
              Asistente de ti
            </TableCell>
            <TableCell style={{ width: "15px" }} align="left">
              Empresa laboral 2
            </TableCell>
            <TableCell style={{ width: "15px" }} align="left">
              20/03/2021
            </TableCell>
            <TableCell style={{ width: "15px" }} align="left">
              10/09/2021
            </TableCell>
          </TableRow>
          <TableRow key={index}>
            <TableCell style={{ width: "15px" }} align="left">
              Analista Jr
            </TableCell>
            <TableCell style={{ width: "15px" }} align="left">
              Empresa laboral 3
            </TableCell>
            <TableCell style={{ width: "15px" }} align="left">
              07/04/2021
            </TableCell>
            <TableCell style={{ width: "15px" }} align="left">
              10/12/2021
            </TableCell>
          </TableRow>
          <TableRow key={index}>
            <TableCell style={{ width: "15px" }} align="left">
              FrontEnd developer Jr
            </TableCell>
            <TableCell style={{ width: "15px" }} align="left">
              Empresa laboral 4
            </TableCell>
            <TableCell style={{ width: "15px" }} align="left">
              11/05/2020
            </TableCell>
            <TableCell style={{ width: "15px" }} align="left">
              10/12/2020
            </TableCell>
          </TableRow>
          <TableRow key={index}>
            <TableCell style={{ width: "15px" }} align="left">
              Desarrollador web
            </TableCell>
            <TableCell style={{ width: "15px" }} align="left">
              Empresa laboral 5
            </TableCell>
            <TableCell style={{ width: "15px" }} align="left">
              07/07/2018
            </TableCell>
            <TableCell style={{ width: "15px" }} align="left">
              15/06/2019
            </TableCell>
          </TableRow>

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={filasH.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
