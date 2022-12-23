import {
  Container,
  Grid,
  Card,
  Avatar,
  SIZE_EXTRA_LARGE,
  List,
  ListItem,
  SIZE_HUGE,
} from "@mds/mds-reactjs-library";
import styled from "@emotion/styled";
import DefaultHRCard from "./DefaultHRCard";

export const HRTeam = (props) => {
  const avatarImage = "https://picsum.photos/id/237/100/100";

  return (
    <Container maxWidth="xl">
      <Grid
        container
        item
        style={{ paddingTop: "120px", justifyContent: "space-between" }}
      >
        <Grid
          item
          lg={8}
          md={{ span: 8 }}
          xs={{ span: 12 }}
          xxs={{ span: 12 }}
          className="mds-m-2"
        >
          <div>
            <h1>Meet our Iberia HR Team</h1>
            <p>How can we help you...</p>
          </div>
        </Grid>
        <Grid item lg={4} md={{ span: 4 }} xs={{ span: 12 }} xxs={{ span: 12 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "20%",
            }}
          >
            <Avatar src={avatarImage} size={SIZE_EXTRA_LARGE} />
            <div style={{ marginLeft: "10px", marginTop: "20px" }}>
              <h4> Director of PD</h4>
              <div>Mireia Marron</div>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: "20px" }}>
        <Grid item lg={4} md={{ span: 4 }} xs={{ span: 12 }} xxs={{ span: 12 }}>
          <DefaultHRCard
            name="Marica"
            first="Offer Preparation"
            second="Compensation discussion"
            third="Lisbon payroll,taxes and social security"
            fourth="Lisbon payroll queries and advice"
            fifth="Lisbon car plan and fringe benefits"
            sixth="HR Internal Policies"
            seventh="Year end Compensation Review"
            eighth="Labour Advice"
            ninth="Iberia Severance Plan Contributions"
          />
        </Grid>

        <Grid item lg={4} md={{ span: 4 }} xs={{ span: 12 }} xxs={{ span: 12 }}>
          <DefaultHRCard
            name="Mariana"
            first="Spain Payroll, taxes and social security"
            second="pain Payroll, queries and advice"
            third="Labour Advice"
            fourth="LGB (Spain)"
            fifth="Equality Plan"
            sixth="Iberia External Worker Leader"
            seventh="Year end Compensation Review"
            eighth="Iberia Severance Plan Contributions"
            ninth="7p"
          />
        </Grid>
        <Grid item lg={4} md={{ span: 4 }} xs={{ span: 12 }} xxs={{ span: 12 }}>
          <DefaultHRCard
            name="Eugenia"
            first="Offer Preparation"
            second="Compensation discussion"
            third="Lisbon payroll,taxes and social security"
            fourth="Lisbon payroll queries and advice"
            fifth="Lisbon car plan and fringe benefits"
            sixth="HR Internal Policies"
            seventh="Year end Compensation Review"
            eighth="Labour Advice"
            ninth="Iberia Severance Plan Contributions"
          />
        </Grid>
      </Grid>
    </Container>
  );
};
