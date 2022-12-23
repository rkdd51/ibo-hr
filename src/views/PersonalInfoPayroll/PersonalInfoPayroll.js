import {
  Container,
  Grid,
  ThemeProvider,
  Input,
  Checkbox,
  SIZE_SMALL,
  Button,
  PRIMARY_BUTTON,
  Link,
  Typography,
  BODY_DEFAULT,
  LINK_APPEARANCE_INLINE,
  Card,
} from "@mds/mds-reactjs-library";
import styled from "@emotion/styled";

const PersonalInfoPayroll = () => {
  const ParentDiv = styled.div`
     {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 10px;
    }
  `;

  const LargeInput = {
    forms: {
      common: {
        textColor: "#333333",
        placeholderColor: "#B3B3B3",
        borderColor: "#B3B3B3",
        focusedBorderColor: "#2251FF",
        background: "#F5F5F5",
        errorColor: "#E12E40",
        successColor: "#3AA537",
        disabled: {
          textColor: "#B3B3B3",
          borderColor: "#D0D0D0",
          background: "#F0F0F0",
        },
      },
    },
  };

  const FirstCard = styled(Card)`
     {
      width: 100%;
      background-color: #fbfaf2;
    }
  `;

  const SecondCard = styled(Card)`
     {
      width: 100%;
      background-color: #fbfaf2;
      margin-top: 20px;
    }
  `;
  return (
    <Container maxWidth="xl">
      <Grid style={{ marginTop: "120px" }}>
        <div style={{ fontSize: "1.6rem", fontWeight: "700" }}>
          Personal Info Payroll
        </div>
        <FirstCard>
          <Grid container style={{ padding: "10px" }}>
            <ParentDiv>
              <div>
                <label>Name</label>
                <br />
                <ThemeProvider customTheme={LargeInput}>
                  <Input
                    style={{ width: "100%" }}
                    placeholder="Please Enter your name"
                  />
                </ThemeProvider>
              </div>
              <br />
              <div>
                <label>Address</label>
                <br />
                <ThemeProvider customTheme={LargeInput}>
                  <Input
                    style={{ width: "100%" }}
                    placeholder="Please Enter your Address"
                  />
                </ThemeProvider>
              </div>
              <br />
              <Grid
                container
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Grid
                  lg={4}
                  md={{ span: 4 }}
                  xs={{ span: 12 }}
                  xxs={{ span: 12 }}
                >
                  <label>Marital Status</label>
                  <br />
                  <ThemeProvider customTheme={LargeInput}>
                    <Input
                      style={{ width: "100%" }}
                      placeholder="Please Enter your Marital Status"
                    />
                  </ThemeProvider>
                </Grid>
                <Grid
                  lg={4}
                  md={{ span: 4 }}
                  xs={{ span: 12 }}
                  xxs={{ span: 12 }}
                >
                  <label>Dependents</label>
                  <br />
                  <ThemeProvider customTheme={LargeInput}>
                    <Input
                      style={{ width: "100%" }}
                      placeholder="Please Enter your Dependents"
                    />
                  </ThemeProvider>
                </Grid>
                <Grid
                  lg={4}
                  md={{ span: 4 }}
                  xs={{ span: 12 }}
                  xxs={{ span: 12 }}
                >
                  <label>Tax-payers</label>
                  <br />
                  <ThemeProvider customTheme={LargeInput}>
                    <Input
                      style={{ width: "100%" }}
                      placeholder="Please Enter your Tax-payers"
                    />
                  </ThemeProvider>
                </Grid>
              </Grid>
              <br />
              <div>
                <label>Habilitation</label>
                <br />
                <ThemeProvider customTheme={LargeInput}>
                  <Input
                    style={{ width: "100%" }}
                    placeholder="Please Enter your Habilitation"
                  />
                </ThemeProvider>
              </div>
            </ParentDiv>
          </Grid>
        </FirstCard>
        {/* SecondParentGrid */}
        <SecondCard>
          <div style={{ fontSize: "1.6rem", fontWeight: "700" }}>
            Bank Account Payroll
          </div>

          <Grid
            item
            style={{
              height: "auto",
            }}
          >
            <br />

            <Grid
              container
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Grid
                lg={4}
                md={{ span: 4 }}
                xs={{ span: 12 }}
                xxs={{ span: 12 }}
              >
                <label>Account Number</label>
                <br />
                <ThemeProvider customTheme={LargeInput}>
                  <Input style={{ width: "100%" }} placeholder="C.G.D" />
                </ThemeProvider>
              </Grid>
              <Grid
                lg={4}
                md={{ span: 4 }}
                xs={{ span: 12 }}
                xxs={{ span: 12 }}
              >
                <label>IBAN</label>
                <br />
                <ThemeProvider customTheme={LargeInput}>
                  <Input
                    style={{ width: "100%" }}
                    placeholder="PT50003500010003265843059"
                  />
                </ThemeProvider>
              </Grid>
              <Grid
                lg={4}
                md={{ span: 4 }}
                xs={{ span: 12 }}
                xxs={{ span: 12 }}
              >
                <label>Swift</label>
                <br />
                <ThemeProvider customTheme={LargeInput}>
                  <Input style={{ width: "100%" }} placeholder="CGDIPTPL" />
                </ThemeProvider>
              </Grid>
            </Grid>
          </Grid>
        </SecondCard>

        <div style={{ padding: "20px" }}>
          <Checkbox
            size={SIZE_SMALL}
            value="small"
            label="Use same account for expense reimbursement"
          />
        </div>

        <div>
          <Button appearance={PRIMARY_BUTTON} size={SIZE_SMALL}>
            Edit
          </Button>
        </div>
        <div>
          <Typography type={BODY_DEFAULT}>
            <b>Note :</b>{" "}
            <i>If you have any changes that will impact with your &nbsp;</i>
            <Link
              appearance={LINK_APPEARANCE_INLINE}
              href="http://www.google.com"
            >
              tax calculation
            </Link>
            <i>
              &nbsp; please fill this&nbsp;
              <span style={{ color: "blue" }}>form</span> and send to IBO HR
              Team to be validated.
            </i>
          </Typography>
        </div>
        {/* <Grid container>12 Monthly Installment Request</Grid> */}
      </Grid>
    </Container>
  );
};

export default PersonalInfoPayroll;
