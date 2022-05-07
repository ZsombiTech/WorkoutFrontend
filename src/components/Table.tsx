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

function createData(
  foodname: string,
  calories: number,
  amount: number,
  date: string
) {
  return {
    foodname,
    calories,
    amount,
    date,
  };
}

function Row(props: { food: ReturnType<typeof createData> }) {
  const { food } = props;
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
          {food.foodname}
        </TableCell>
        <TableCell
          align="right"
          style={{ border: "1px solid #2f334a", color: "white" }}
        >
          {food.calories}
        </TableCell>
        <TableCell
          align="right"
          style={{ border: "1px solid #2f334a", color: "white" }}
        >
          {food.amount}
        </TableCell>
        <TableCell
          align="right"
          style={{ border: "1px solid #2f334a", color: "white" }}
        >
          {food.date}
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

interface foodface {
  amount: number;
  calories: number;
  foodname: string;
  date: string;
}

export default function CollapsibleTable(done: any) {
  const [foodlist, setFoodList] = useState<Array<foodface>>();

  useEffect(() => {
    const username = localStorage.getItem("displayName");
    axios
      .get(`http://localhost:8000/gettable/:${username}`)
      .then((response) => {
        setFoodList(response.data[0].food);
      });
  }, []);

  return (
    <TableContainer
      component={Paper}
      style={{
        backgroundColor: "#2f334a",
        border: "1px solid #2f334a",
        textAlign: "center",
      }}
    >
      <Table
        aria-label="collapsible table"
        style={
          foodlist
            ? { backgroundColor: "#2f334a", border: "1px solid #2f334a" }
            : {
                backgroundColor: "#2f334a",
                border: "1px solid #2f334a",
                justifyContent: "center",
                textAlign: "center",
              }
        }
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
        <TableBody style={{ backgroundColor: "#2f334a", textAlign: "center" }}>
          {foodlist &&
            foodlist.map((food, key) => <Row key={key} food={food} />)}
          {!foodlist && (
            <div className="flex flex-column justify-center text-center">
              <h2
                className="text-center text-white "
                style={{ textAlign: "center" }}
              >
                No data to show
              </h2>
            </div>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
