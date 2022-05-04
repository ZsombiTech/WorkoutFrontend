import React, { useEffect, useState } from "react";
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
import axios from "axios";

function createData(name: string, calories: number, fat: number, date: string) {
  return {
    name,
    calories,
    fat,
    date,
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
        <TableCell
          align="right"
          style={{ border: "1px solid #2f334a", color: "white" }}
        >
          {row.date}
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, "2022-08-16"),
  createData("Ice cream sandwich", 237, 9.0, "2022-08-18"),
];

export default function CollapsibleTable() {
  useEffect(() => {
    const username = localStorage.getItem("displayName");
    axios
      .get(`http://localhost:8000/gettable/:${username}`)
      .then((response) => {
        console.log(response);
      });
  }, []);

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
            <TableCell
              align="right"
              style={{ border: "1px solid #2f334a", color: "white" }}
            >
              Date
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
