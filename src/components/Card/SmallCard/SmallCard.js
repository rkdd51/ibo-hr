import React from "react";
import FavoriteOutline16 from "@mds/mds-icons/icons/svg/outline-16-favorite.svg";
import {
  ThemeProvider,
  Card,
  TYPE_OUTLINE,
  HORIZONTAL_LAYOUT,
  Icon,
} from "@mds/mds-reactjs-library";

import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

function SmallCard(props) {
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

  const Icon = styled.div`
     {
      background: #027ab1;
      align-items: center;
      width: 59px;
      height: 59px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      color: white;
    }
  `;
  let navigate = useNavigate();
  return (
    <>
      <CustomCard
        title=""
        layout={HORIZONTAL_LAYOUT}
        link={{
          label: "",
          href: "",
        }}
        style={{
          width: "172px",
          height: "174px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
        }}
      >
        <CustomCardDiv onClick={() => navigate(props.navigate)}>
          <div style={{ display: "flex" }}>
            <Icon>
              <ion-icon
                // name="newspaper-outline"
                name={props.icon}
                size="large"
              ></ion-icon>
            </Icon>
            <div
              style={{
                fontWeight: "700",
                fontSize: "20px",
                lineHeight: "23px",
                marginLeft: "5%",
                marginTop: "10%",
              }}
            >
              {/* Payslip */}
              {props.name}
            </div>
          </div>

          <div style={{ paddingTop: "25%", marginLeft: "12%" }}>
            {/* <Router> */}
            <div
              style={{
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "16px",
              }}
            >
              {/* Available Payslips */}
              {props.description}
            </div>
            <div
              style={{
                fontWeight: "700",
                fontSize: "16px",
                lineHeight: "19px",
                color: "#2251FF",
              }}
            >
              &nbsp;&nbsp;&nbsp; {props.descriptionSecond}
              {/* June 2022 */}
            </div>
          </div>
        </CustomCardDiv>
      </CustomCard>
    </>
  );
}
export default SmallCard;
