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

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  price: number
) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }}
        style={{ border: "1px solid #2f334a", color: "white" }}
      >
        <TableCell style={{ border: "1px solid #2f334a", color: "white" }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
            style={{ color: "white" }}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
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
      <TableRow>
        <TableCell
          style={{
            paddingBottom: 0,
            paddingTop: 0,
            border: "1px solid #2f334a",
          }}
          colSpan={6}
        >
          <Collapse
            in={open}
            timeout="auto"
            unmountOnExit
            style={{ border: "1px solid #2f334a" }}
          >
            <Box sx={{ margin: 1 }} style={{ border: "1px solid #2f334a" }}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                style={{ color: "white" }}
              >
                History
              </Typography>
              <Table
                size="small"
                aria-label="purchases"
                style={{ border: "1px solid #2f334a" }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell
                      style={{ border: "1px solid #2f334a", color: "white" }}
                    >
                      Date
                    </TableCell>
                    <TableCell
                      style={{ border: "1px solid #2f334a", color: "white" }}
                    >
                      Customer
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
                      Total price ($)
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell
                        component="th"
                        scope="row"
                        style={{ border: "1px solid #2f334a", color: "white" }}
                      >
                        {historyRow.date}
                      </TableCell>
                      <TableCell
                        style={{ border: "1px solid #2f334a", color: "white" }}
                      >
                        {historyRow.customerId}
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{ border: "1px solid #2f334a", color: "white" }}
                      >
                        {historyRow.amount}
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{ border: "1px solid #2f334a", color: "white" }}
                      >
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
  createData("Eclair", 262, 16.0, 24, 6.0, 3.79),
  createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),
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
