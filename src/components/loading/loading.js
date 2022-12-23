import React from "react";
import { Grid, CircularProgress, Typography } from "@mds/mds-reactjs-library";
import styled from "@emotion/styled";

 const Loading = ({ className, label, fullHeight }) => {
  const Loader = styled(CircularProgress)`
    margin: auto;
  `;

  return (
    <Grid container style={{ display: "flex", textAlign: "center" }}>
      <Grid item span={12}>
        <Loader indeterminate />
      </Grid>
      {label && (
        <Grid item span={12}>
          <Typography>{label}</Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default Loading;