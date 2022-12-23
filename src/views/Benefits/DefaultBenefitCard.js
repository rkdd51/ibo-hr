import styled from "@emotion/styled";
import { Grid } from "@mds/mds-reactjs-library";
import {
  Container,
  ThemeProvider,
  // ProgressBar,
  LABEL_POSITION_TOP,
  Card,
  HORIZONTAL_LAYOUT,
  SIZE_MEDIUM,
  Button,
  SECONDARY_BUTTON,
  SIZE_SMALL,
} from "@mds/mds-reactjs-library";
import ProgressBar from "react-bootstrap/ProgressBar";
const DefaultBenefitCard = (props) => {
  const CustomCard = styled(Card)`
     {
      .mds-card-body {
        max-width: 100%;
      }

      @media (min-width: 451px) and (max-width: 768px) {
        margin: 20px;
      }

      @media (max-width: 450px) {
        margin: 20px;
      }
    }
  `;

  const CustomCardDiv = styled.div`
     {
      max-width: 100%;
      ${"" /* min-width: 100%; */}
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  `;
  // const CustomProgressBar = {
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
  //       height: "0.6rem",
  //     },
  //     sm: {
  //       height: "0.125rem",
  //     },
  //     color: {
  //       background: {
  //         default: "#f0f0f0",
  //         dark: "#f0f0f0",
  //         bar: {
  //           default: props.default,
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

  const Heading = styled.div`
     {
      font-size: 20px;
      font-weight: 700;
      margin-left: 10px;
      margin-top: 18px;
    }
  `;
  const Table = styled.table`
     {
      margin-top: 2%;
      width: 100%;
      padding: 10px;
    }
  `;
  const TH = styled.th`
     {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      padding-bottom: 10px;
    }
  `;
  const TD = styled.td`
     {
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      padding-bottom: 10px;
    }
  `;
  const ButtonStyled = styled(Button)`
    margin-top: 8%;
    margin-left: 37%;
  `;

  const Divider = styled.div`
     {
      width: 290px;
      height: 0px;
      border: 1px solid #979797;
      transform: rotate(180deg);
      margin-top: 50px;
    }
  `;

  const Icon = styled.div`
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
  return (
    <>
      <Grid
        item
        lg={3}
        md={{ span: 3 }}
        sm={{ span: 6 }}
        xs={{ span: 12 }}
        xxs={{ span: 12 }}
      >
        <CustomCard
          title=""
          layout={HORIZONTAL_LAYOUT}
          style={{
            width: "330px",
            height: "453px",
            background: "#ffffff",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
          }}
        >
          <CustomCardDiv>
            <div style={{ display: "flex" }}>
              <Icon>
                <ion-icon name={props.name} size="large"></ion-icon>
              </Icon>
              <Heading>{props.heading}</Heading>
            </div>

            {/* <ThemeProvider customTheme={CustomProgressBar}> */}
            <div style={{ width: "290px", marginTop: "50px" }}>
              {/* <ProgressBar
                  progress={props.progress}
                  label={{
                    text: props.text,
                    position: LABEL_POSITION_TOP,
                  }}
                /> */}
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <label>{props.value} €</label>
                <label>{props.percentage}%</label>
              </div>
              <ProgressBar
                variant={props.variant}
                now={props.progress}
                key={1}
                style={{
                  borderRadius: "10px",
                }}
              />
            </div>
            {/* </ThemeProvider> */}
            <Divider></Divider>
            <div>
              <Table>
                <thead>
                  <tr>
                    <TH>Date</TH>
                    <TH>Requester</TH>
                    <TH>Value</TH>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <TD> 06 Jan 2022</TD>
                    <TD>Adrien Weza</TD>
                    <TD>250</TD>
                  </tr>
                  <tr>
                    <TD> 06 Feb 2022</TD>
                    <TD>Adrien Weza</TD>
                    <TD>250</TD>
                  </tr>
                  <tr>
                    <TD>06 Mar 2022</TD>
                    <TD>Adrien Weza</TD>
                    <TD>250</TD>
                  </tr>
                  <tr>
                    <TD>06 Apr 2022</TD>
                    <TD>Adrien Weza</TD>
                    <TD>250</TD>
                  </tr>
                  <tr>
                    <TD> 06 May 2022</TD>
                    <TD>Adrien Weza</TD>
                    <TD>250</TD>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div>
              <ButtonStyled size={SIZE_SMALL} appearance={SECONDARY_BUTTON}>
                Add
              </ButtonStyled>
            </div>
          </CustomCardDiv>
        </CustomCard>
      </Grid>
    </>
  );
};

export default DefaultBenefitCard;
