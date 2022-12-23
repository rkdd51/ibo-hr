import React from "react";
import { Container, Grid, Card } from "@mds/mds-reactjs-library";

import styled from "@emotion/styled";
export const MySeverancePlan = () => {
  const DIV = styled.div`
     {
      display: flex;
      justify-content: space-between;
    }
  `;
  return (
    <>
      <Grid container maxWidth="xl">
        <Grid
          item
          lg={12}
          md={{ span: 12 }}
          xs={{ span: 12 }}
          xxs={{ span: 12 }}
          style={{
            marginTop: "120px",
          }}
        >
          <h3>LISBON SEVERANCE PLAN 2022 NON PARTNER</h3>
        </Grid>
        <Grid
          item
          lg={12}
          md={{ span: 12 }}
          xs={{ span: 12 }}
          xxs={{ span: 12 }}
          style={{
            marginTop: "50px",
          }}
        >
          <div>Name :</div>
          <div>FMNO :</div>
        </Grid>
        {/* ///////////////////Second ////////////////////////// */}
        <Grid container>
          <Grid
            item
            lg={6}
            md={{ span: 6 }}
            xs={{ span: 12 }}
            xxs={{ span: 12 }}
          >
            <Card style={{ padding: "10px", width: "100%" }}>
              <div>
                <b>Portugal Severance Plan Investment 2022</b>
              </div>
              <br />
              <DIV>
                <span>Balance as of January 1st,2022</span>
                <span>Backend Value</span>
              </DIV>
              <DIV>
                <span>Returns 2022</span>
                <span>Backend Value</span>
              </DIV>
              <DIV>
                <span>
                  <b>Balance as of December 31,2022</b>
                </span>
                <span>Backend Value</span>
              </DIV>
              <DIV>
                <span>Contribution 2021</span>
                <span>Backend Value</span>
              </DIV>
              <DIV>
                <span>
                  <b>Balance as of January 1,2023</b>
                </span>
                <span>Backend Value</span>
              </DIV>
              <br />
              <br />
              <div>Information : Performance as of December 31,2022 18.8%.</div>
              <br />
              <div>
                Entitlement to effectively receive any amount from the Plan is
                subject to the "Severance Investment Plan for employees of
                McKinsey International INC "
              </div>
            </Card>
          </Grid>
          <Grid
            item
            lg={6}
            md={{ span: 6 }}
            xs={{ span: 12 }}
            xxs={{ span: 12 }}
          >
            <div
              style={{
                background: "pink",
                margin: "0px 20px",
                height: "100%",
              }}
            >
              Image from Backend
              {/* <img src="https://picsum.photos/550/380" alt="backendImage" /> */}
            </div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
