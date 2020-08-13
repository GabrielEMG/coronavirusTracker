import React from "react";
import SummaryData from "./components/summary";
import Grid from "@material-ui/core/Grid";
import { CountryProvider } from "./context/countryContext";
import CountrySearcher from "./components/countrySearcher";
import ChartContainer from "./components/chartContainer";
import Header from "./components/header";
import "./css/app.css";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const App = () => {
  return (
    <div className="App">
      <Header />

      <CountryProvider>
        <Grid container justify="center">
          <FontAwesomeIcon
            icon={faMapMarkedAlt}
            style={{ fontSize: 32, marginRight: 10, paddingTop: 2 }}
          />
          <Grid style={{ marginBottom: 40 }}>
            <CountrySearcher />
          </Grid>
        </Grid>
        <Grid container spacing={5} justify="center" alignItems="center">
          <Grid item lg={4} md={5} sm={11} align="center">
            <SummaryData />
          </Grid>
          <Grid align="center" item lg={6} md={5} sm={11}>
            <ChartContainer />
          </Grid>
        </Grid>
      </CountryProvider>
    </div>
  );
};

export default App;
