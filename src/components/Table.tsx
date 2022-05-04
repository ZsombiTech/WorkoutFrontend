import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function createData(name: string, calories: number, fat: number) {
  return {
    name,
    calories,
    fat,
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow style={{ border: "1px solid #2f334a", color: "white" }}>
        <TableCell
          style={{ border: "1px solid #2f334a", color: "white" }}
        ></TableCell>
        <TableCell
          component="th"
          scope="row"
          style={{ border: "1px solid #2f334a", color: "white" }}
        >
          {row.name}
        </TableCell>
        <TableCell
          align="right"
          style={{ border: "1px solid #2f334a", color: "white" }}
        >
          {row.calories}
        </TableCell>
        <TableCell
          align="right"
          style={{ border: "1px solid #2f334a", color: "white" }}
        >
          {row.fat}
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0),
  createData("Ice cream sandwich", 237, 9.0),
  createData("Eclair", 262, 16.0),
  createData("Cupcake", 305, 3.7),
  createData("Gingerbread", 356, 16.0),
];

export default function CollapsibleTable() {
  return (
    <TableContainer
      component={Paper}
      style={{ backgroundColor: "#2f334a", border: "1px solid #2f334a" }}
    >
      <Table
        aria-label="collapsible table"
        style={{ backgroundColor: "#2f334a", border: "1px solid #2f334a" }}
      >
        <TableHead
          style={{
            backgroundColor: "#2f334a",
            border: "1px solid #2f334a",
          }}
        >
          <TableRow
            style={{
              backgroundColor: "#2f334a",
              border: "1px solid #2f334a",
            }}
          >
            <TableCell
              style={{ border: "1px solid #2f334a", color: "white" }}
            />
            <TableCell style={{ border: "1px solid #2f334a", color: "white" }}>
              Food
            </TableCell>
            <TableCell
              align="right"
              style={{ border: "1px solid #2f334a", color: "white" }}
            >
              Calories
            </TableCell>
            <TableCell
              align="right"
              style={{ border: "1px solid #2f334a", color: "white" }}
            >
              Amount
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{ backgroundColor: "#2f334a" }}>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
