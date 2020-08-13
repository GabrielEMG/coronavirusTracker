import React from "react";
import { useFetchSummary } from "../hooks/useFetchSumary";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";

const SummaryData = () => {
  const { data, country, isLoading } = useFetchSummary();

  console.log(data);

  let rows;
  if (!isLoading) {
    rows = [
      createData(
        "Population",
        data[0].population.toLocaleString(),
        Math.round(data[0].population / 1000000).toLocaleString()
      ),
      createData(
        "Actives",
        data[0].cases.active.toLocaleString(),
        Math.round(
          (data[0].cases.active * 100000) / data[0].population
        ).toLocaleString()
      ),
      createData(
        "Critical",
        data[0].cases.critical.toLocaleString(),
        Math.round(
          (data[0].cases.critical * 100000) / data[0].population
        ).toLocaleString()
      ),
      createData(
        "Recovered",
        data[0].cases.recovered.toLocaleString(),
        Math.round(
          (data[0].cases.recovered * 100000) / data[0].population
        ).toLocaleString()
      ),
      createData(
        "Tests",
        data[0].tests.total.toLocaleString(),
        Math.round(
          (data[0].tests.total * 100000) / data[0].population
        ).toLocaleString()
      ),
    ];

    function createData(name, quantity, perMillion) {
      return { name, quantity, perMillion };
    }
  }

  return (
    <div>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>{data[0].country}</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Per Million</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.quantity}</TableCell>
                  <TableCell align="right">{row.perMillion}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}{" "}
    </div>
  );
};

export default SummaryData;
