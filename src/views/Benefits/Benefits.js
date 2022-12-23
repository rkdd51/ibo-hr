import { Grid } from "@mds/mds-reactjs-library";
import React from "react";
import styled from "@emotion/styled";
import ProgressBar from "react-bootstrap/ProgressBar";
import {
  Container,
  ThemeProvider,
  // ProgressBar,
  LABEL_POSITION_TOP,
  Card,
  Link,
  TYPE_OUTLINE,
  HORIZONTAL_LAYOUT,
  SIZE_MEDIUM,
  Icon,
  LINK_APPEARANCE_ARROW,
  Button,
  SECONDARY_BUTTON,
  SIZE_SMALL,
} from "@mds/mds-reactjs-library";
import DefaultBenefitCard from "./DefaultBenefitCard";
export const Benefits = () => {
  const FirstParenTDiv = styled.div`
     {
      display: flex;
      flex-direction: column;
    }
    @media (min-width: 390px) and (max-width: 768px) {
      margin: 20px;
    }

    @media (max-width: 450px) {
      margin: 20px;
    }
  `;
  const BenefitsDiv = styled.div`
     {
      display: flex;
    }
  `;
  const FirstProgressBarDiv = styled.div`
     {
      width: 680px;
      margin: 12px;
      border-radius: 10px;
    }

    ${
      "" /* .mds-progress {
      min-width: 100%;
      max-width: 100%;
    } */
    }
    @media (min-width: 451px) and (max-width: 768px) {
      width: 450px;
    }

    @media (max-width: 450px) {
      width: 350px;
    }
  `;
  const IconOne = styled.div`
     {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 59px;
      height: 59px;
      border-radius: 10px;
      background: #027ab1;
      color: white;
    }
  `;
  const IconTwo = styled.div`
     {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 59px;
      height: 59px;
      border-radius: 10px;
      background: #051c2c;
      color: white;
    }
  `;

  const Benefits = styled.span`
     {
      margin-left: 10px;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 23px;
    }
  `;

  const Heading = styled.div`
     {
      font-size: 20px;
      font-weight: 700;
      margin-left: 10px;
      margin-top: 18px;
    }
  `;

  // const customProgressBar = {
  //   progressBar: {
  //     "font-family":
  //       '"McKinsey Sans Regular", "Helvetica Neue", Calibri, Corbel, Helvetica, Roboto, Droid, sans-serif',
  //     "font-size": "0.875rem",
  //     "line-height": "1.429",

  //     label: {
  //       "margin-bottom": "0.5rem",
  //       "margin-left": "1rem",
  //     },
  //     default: {
  //       height: "1.25rem",
  //     },
  //     sm: {
  //       height: "0.125rem",
  //     },
  //     color: {
  //       background: {
  //         default: "#f0f0f0",
  //         dark: "#f0f0f0",
  //         bar: {
  //           default: " #E5546C",
  //           dark: "#00a9f4",
  //         },
  //       },
  //       text: {
  //         default: "#757575",
  //         dark: "#ffffff",
  //       },
  //     },
  //   },
  // };

  const FirstCustomCard = styled(Card)`
     {
      .mds-card-body {
        min-width: 100%;
        max-width: 100%;
      }

      @media (min-width: 390px) and (max-width: 768px) {
        margin-left: 25px;
        max-width: 330px;
        overflow: scroll;
      }
    }
  `;

  const FirstCustomCardDiv = styled.div`
    ${
      "" /* {
      max-width: 100%;
      min-width: 100%;
    } */
    }
  `;

  return (
    <Grid container maxwidth="xxl">
      {/* First Row */}

      <Grid container item style={{ paddingTop: "120px" }}>
        <Grid
          item
          lg={{ span: 6 }}
          md={{ span: 6 }}
          sm={{ span: 12 }}
          xs={{ span: 12 }}
          xxs={{ span: 12 }}
        >
          <FirstParenTDiv>
            <BenefitsDiv>
              <IconOne>
                <ion-icon name="heart-outline" size="large"></ion-icon>
              </IconOne>
              <Benefits>
                Benefits
                <br />
                <span
                  style={{
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "16px",
                  }}
                >
                  Plafond total: 10 000 €
                </span>
              </Benefits>
            </BenefitsDiv>

            <FirstProgressBarDiv>
              {/* <ThemeProvider customTheme={customProgressBar}>
                <ProgressBar
                  progress={65}
                  label={{
                    text: "6500 €",
                    position: LABEL_POSITION_TOP,
                    borderRadius: "10px",
                  }}
                />
              </ThemeProvider> */}
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <label>6500 €</label>
                <label>65%</label>
              </div>
              <ProgressBar style={{ borderRadius: "10px", height: "20px" }}>
                <ProgressBar
                  variant="danger"
                  now={25}
                  key={1}
                  style={{
                    borderRadius: "0px 10px 10px 0px",
                    // position: "relative",
                    zIndex: "5",
                  }}
                />
                <ProgressBar
                  variant="warning"
                  now={15}
                  key={2}
                  style={{
                    borderRadius: "0px 10px 10px 0px",
                    marginLeft: "-5px",
                    // position: "relative",
                    zIndex: "4",
                  }}
                />
                <ProgressBar
                  variant="info"
                  now={30}
                  key={3}
                  style={{
                    borderRadius: "0px 10px 10px 0px",
                    // position: "relative",
                    zIndex: "3",
                    marginLeft: "-5px",
                  }}
                />
                <ProgressBar
                  variant="success"
                  now={10}
                  key={4}
                  style={{
                    borderRadius: "0px 10px 10px 0px",
                    // position: "relative",
                    zIndex: "2",
                    marginLeft: "-5px",
                  }}
                />
              </ProgressBar>
            </FirstProgressBarDiv>
          </FirstParenTDiv>
        </Grid>
        <Grid
          item
          lg={6}
          md={{ span: 6 }}
          xs={{ span: 12 }}
          xxs={{ span: 12 }}
          // style={{ marginLeft: "35px" }}
        >
          <FirstCustomCard
            title=""
            layout={HORIZONTAL_LAYOUT}
            style={{
              width: "680px",
              height: "174px",
              background: "#ffffff",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
            }}
          >
            <FirstCustomCardDiv>
              <div style={{ display: "flex" }}>
                <IconTwo>
                  <ion-icon
                    name="notifications-outline"
                    size="large"
                  ></ion-icon>
                </IconTwo>
                <Heading>News</Heading>
              </div>

              <div
                style={{
                  fontWeight: "400",
                  fontSize: "14px",
                  paddingTop: "10px",
                }}
              >
                Dear colleagues,We would like to present to you your support
                package to Children and Education in partnerships with Edenred.
                Discover
                <span>
                  <Link
                    style={{ marginLeft: "80%", marginTop: "-10px" }}
                    appearance={LINK_APPEARANCE_ARROW}
                    size={SIZE_MEDIUM}
                  ></Link>
                </span>
              </div>
            </FirstCustomCardDiv>
          </FirstCustomCard>
        </Grid>
      </Grid>

      {/* Second Row */}

      <Grid container item style={{ marginTop: "20px" }}>
        {/* First Card */}
        <DefaultBenefitCard
          heading="Cheque Creche"
          value="4500"
          percentage="36"
          progress="36"
          name="wallet-outline"
          text="1500 €"
          variant="danger"
        />
        {/* Second Card */}
        <DefaultBenefitCard
          heading="Student Check"
          value="5200"
          percentage="66"
          progress="66"
          name="school-outline"
          text="2500 €"
          variant="warning"
        />
        {/* Third Card */}
        <DefaultBenefitCard
          heading="Car Plan"
          value="2250"
          percentage="36"
          progress="42"
          name="car-outline"
          text="3000 €"
          variant="info"
        />

        {/* Fourth Card */}
        <DefaultBenefitCard
          heading="Pension Fund"
          value="6050"
          percentage="78"
          progress="78"
          name="accessibility-outline"
          text="1800 €"
          variant="success"
        />
      </Grid>
    </Grid>
  );
};
