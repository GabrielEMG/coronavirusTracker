import React from "react";
import { useFetchData } from "../hooks/useFetchData";
import { Line } from "react-chartjs-2";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";

const ChartContainer = () => {
  const { country, countryData, isLoading } = useFetchData();

  const cleanUndefinedData = countryData.filter((day) => day[0]);
  const data = cleanUndefinedData.map((day) => day[0]);

  const daysLabel = data.map((data) => data.day);

  const actives = {
    label: "actives",
    data: data.map((data) => data.cases.active),
    borderColor: "rgba(0,165,165,0.6)",
    backgroundColor: "rgba(0,165,165,0.2)",
  };
  const criticals = {
    label: "criticals",
    data: data.map((data) => data.cases.critical),
    borderColor: "rgba(165,0,165,0.6)",
    backgroundColor: "rgba(165,0,165,0.2)",
  };
  const recovered = {
    label: "recovered",
    data: data.map((data) => data.cases.recovered),
    borderColor: "rgba(0,255,0,0.6)",
    backgroundColor: "rgba(0,255,0,0.2)",
    hidden: true,
  };
  const deaths = {
    label: "deaths",
    data: data.map((data) => data.deaths.total),
    borderColor: "rgba(255,0,0,0.6)",
    backgroundColor: "rgba(255,0,0,0.2)",
  };
  const tests = {
    label: "tests",
    data: data.map((data) => data.tests.total),
    borderColor: "rgba(255,255,0,0.6)",
    backgroundColor: "rgba(255,255,0,0.2)",
    hidden: true,
  };

  const chartData = {
    labels: daysLabel,
    datasets: [actives, criticals, deaths, recovered, tests],
  };

  return (
    <Grid
      container
      border={0.1}
      justify="center"
      alignItems="center"
      style={{
        height: 400,
        borderColor: "black",
        borderRadius: 10,
        backgroundColor: "#fafafa",
        padding: 10,
        marginBottom: 20,
      }}
    >
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Line
          data={chartData}
          options={{
            title: {
              display: true,
              text: country,
            },
            maintainAspectRatio: false,
            elements: {
              point: {
                radius: 2,
              },
            },
          }}
        />
      )}
    </Grid>
  );
};

export default ChartContainer;
