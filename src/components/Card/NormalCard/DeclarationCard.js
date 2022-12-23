import React from "react";
import FavoriteOutline16 from "@mds/mds-icons/icons/svg/outline-16-favorite.svg";
import {
  ThemeProvider,
  Card,
  TYPE_OUTLINE,
  HORIZONTAL_LAYOUT,
  Icon,
  ProgressBar,
  LABEL_POSITION_TOP,
  Divider,
  MEDIUM_DIVIDER,
} from "@mds/mds-reactjs-library";
import styled from "@emotion/styled";
function DeclarationCard(props) {
  const CustomCard = styled(Card)`
     {
      .mds-card-body {
        max-width: 100%;
        min-width: 100%;
      }
    }
  `;

  const CustomCardDiv = styled.div`
     {
      max-width: 100%;
      min-width: 100%;
    }
  `;

  const Icon = styled.div`
     {
      align-items: center;
      width: 59px;
      height: 59px;
      background: #faa082;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      color: white;
    }
  `;
  const theme = {
    progressBar: {
      "font-family":
        '"McKinsey Sans Regular", "Helvetica Neue", Calibri, Corbel, Helvetica, Roboto, Droid, sans-serif',
      "font-size": "0.875rem",
      "line-height": "1.429",
      label: {
        "margin-bottom": "0.5rem",
        "margin-left": "1rem",
      },
      default: {
        height: "0.5rem",
      },
      sm: {
        height: "0.125rem",
      },
      color: {
        background: {
          default: "#f0f0f0",
          dark: "#f0f0f0",
          bar: {
            default: "#FAA082",
            dark: "#00a9f4",
          },
        },
        text: {
          default: "#757575",
          dark: "#ffffff",
        },
      },
    },
  };

  return (
    <ThemeProvider customTheme={theme}>
      <CustomCard
        title=""
        layout={HORIZONTAL_LAYOUT}
        style={{
          width: "378px",
          height: "174px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
        }}
      >
        <CustomCardDiv>
          <div style={{ display: "flex" }}>
            <Icon>
              {" "}
              <ion-icon name="reader-outline" size="large"></ion-icon>
            </Icon>
            <div
              style={{
                fontWeight: "700",
                fontSize: "20px",
                lineHeight: "23px",
                marginLeft: "2%",
                marginTop: "3%",
              }}
            >
              Declaration Request
            </div>
          </div>

          <div>
            <ProgressBar
              progress={60}
              progressbackground="#E5546C"
              label={{
                text: "",
                position: LABEL_POSITION_TOP,
              }}
              style={theme}
            />
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span
                  style={{
                    fontWeight: "700",
                    fontSize: "16px",
                    lineHeight: "19px",
                    color: "#FAA082",
                  }}
                >
                  3
                </span>
                <br />
                <span
                  style={{
                    fontWeight: "400",
                    fontSize: "10px",
                    lineHeight: "12px",
                  }}
                >
                  Requester
                </span>
              </div>

              {/* <Divider type={MEDIUM_DIVIDER} /> */}

              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span
                  style={{
                    fontWeight: "700",
                    fontSize: "16px",
                    lineHeight: "19px",
                    color: "#FAA082",
                  }}
                >
                  2
                </span>
                <br />
                <span
                  style={{
                    fontWeight: "400",
                    fontSize: "10px",
                    lineHeight: "12px",
                  }}
                >
                  Finished
                </span>
              </div>
            </div>
          </div>
        </CustomCardDiv>
      </CustomCard>
    </ThemeProvider>
  );
}
export default DeclarationCard;
