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
import { useNavigate } from "react-router-dom";

function BenefitsCard(props) {
  const CustomCard = styled(Card)`
     {
      .mds-card-body {
        max-width: 100%;
        min-width: 100%;
      }
      :hover {
        cursor: pointer;
      }
    }
  `;

  const CustomCardDiv = styled.div`
     {
      max-width: 100%;
      min-width: 100%;
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
            default: "#E5546C",
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

  const Icon = styled.div`
     {
      align-items: center;
      width: 59px;
      height: 59px;
      background: rgb(229, 84, 108);
      border-radius: 10px;
      display: flex;
      justify-content: center;
      color: white;
    }
  `;
  let navigate = useNavigate();
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
        <CustomCardDiv onClick={() => navigate("/benefits")}>
          <div style={{ display: "flex" }}>
            <Icon>
              <ion-icon
                name="heart-outline"
                size="large"
                color="white"
              ></ion-icon>
            </Icon>
            <div
              style={{
                fontWeight: "700",
                fontSize: "20px",
                lineHeight: "23px",
                marginLeft: "2%",
                width: "200px",
              }}
            >
              Benefits <br />
              <span
                style={{
                  fontWeight: "400",
                  fontSize: "14px",
                  marginLeft: "2%",
                }}
              >
                Plafond total: 10000 €
              </span>
            </div>
          </div>

          <div>
            <ProgressBar
              progress={60}
              progressbackground="#FAA082"
              label={{
                text: "6500 €",
                position: LABEL_POSITION_TOP,
              }}
            />
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <div>
                <span
                  style={{
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "16px",
                    textAlign: "center",
                    color: "#E5546C",
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1500€
                </span>
                <br />
                <span
                  style={{
                    fontWeight: "400",
                    fontSize: "10px",
                    lineHeight: "12px",
                    textAlign: "center",
                  }}
                >
                  Euroticket food Card
                </span>
              </div>

              {/* //Second */}

              <div>
                <span
                  style={{
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "16px",
                    textAlign: "center",
                    color: "#E5546C",
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2000€
                </span>
                <br />
                <span
                  style={{
                    fontWeight: "400",
                    fontSize: "10px",
                    lineHeight: "12px",
                    textAlign: "center",
                  }}
                >
                  Child Care & Education
                </span>
              </div>

              {/* //Third */}
              <div>
                <span
                  style={{
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "16px",
                    textAlign: "center",
                    color: "#E5546C",
                  }}
                >
                  3000€
                </span>
                <br />
                <span
                  style={{
                    fontWeight: "400",
                    fontSize: "10px",
                    lineHeight: "12px",
                    textAlign: "center",
                  }}
                >
                  Car Plan
                </span>
              </div>
            </div>
          </div>
        </CustomCardDiv>
      </CustomCard>
    </ThemeProvider>
  );
}
export default BenefitsCard;
