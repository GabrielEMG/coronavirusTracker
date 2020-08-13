import React from "react";
import Grid from "@material-ui/core/Grid";
import "../css/app.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <Grid
      className="AppHeader"
      align="center"
      style={{
        width: "100%",
      }}
    >
      <h1>Welcome to my App</h1>
      <h5>
        A Timelapse Chart about Coronavirus in <u> every country! </u>
      </h5>
      <h5>
        Check your country{" "}
        <FontAwesomeIcon
          icon={faHandPointDown}
          style={{ fontSize: 20, marginLeft: 20 }}
        />
      </h5>
    </Grid>
  );
};

export default Header;
