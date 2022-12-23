import React from "react";
import FavoriteOutline16 from "@mds/mds-icons/icons/svg/outline-16-favorite.svg";
import {
  ThemeProvider,
  Card,
  TYPE_OUTLINE,
  Link,
  LINK_APPEARANCE_ARROW,
  SIZE_MEDIUM,
  HORIZONTAL_LAYOUT,
  Icon,
} from "@mds/mds-reactjs-library";
import styled from "@emotion/styled";

function NewsCard(props) {
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
      background: #051c2c;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      color: white;
    }
  `;
  return (
    <>
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
              <ion-icon
                name="notifications-outline"
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
              News <br />
              <span
                style={{
                  fontWeight: "400",
                  fontSize: "14px",
                  marginLeft: "2%",
                }}
              >
                Vatations Period 2022
              </span>
            </div>
          </div>

          <div style={{ fontWeight: "400", fontSize: "14px" }}>
            2021 days taken in the tool reflect the information in your
            timesheet. Please bear in mind that they reflect the number of days
            taken each month. Link
            <span>
              <Link
                style={{ marginLeft: "80%", marginTop: "-10px" }}
                appearance={LINK_APPEARANCE_ARROW}
                size={SIZE_MEDIUM}
              ></Link>
            </span>
          </div>
        </CustomCardDiv>
      </CustomCard>
    </>
  );
}
export default NewsCard;
