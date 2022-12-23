import React from "react";
import styled from "@emotion/styled";
import {
  ThemeProvider,
  ThemeContext,
  Container,
  Grid,
  Avatar,
  SIZE_EXTRA_LARGE,
  Typography,
  Link,
  LINK_APPEARANCE_ARROW,
  SIZE_MEDIUM,
  Divider,
  MEDIUM_DIVIDER,
} from "@mds/mds-reactjs-library";
import NewsCard from "../../components/Card/NormalCard/NewsCard";
import BenefitsCard from "../../components/Card/NormalCard/BenefitsCard";
import DeclarationCard from "../../components/Card/NormalCard/DeclarationCard";
import SmallCard from "../../components/Card/SmallCard/SmallCard";
// import MyHRCard from "../../components/Card/SmallCard/MyHRCard";
import LargeCard from "../../components/Card/LargeCard/LargeCard";

export const Home = () => {
  //Grid
  const ContentItem = styled.div`
    display: flex;
    overflow: hidden;
  `;

  const FirstGridWrapper = styled.div`
    @media (max-width: 767px) {
      margin: 20px;
    }

    @media (min-width: 451px) and (max-width: 766px) {
      margin: 20px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      margin: 20px;
    }
  `;

  const SecondGridWrapper = styled.div`
    @media (max-width: 767px) {
      margin: 20px;
    }

    @media (min-width: 451px) and (max-width: 766px) {
      margin: 20px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      margin: 20px;
    }
  `;

  const ThirdGridWrapper = styled.div`
    @media (max-width: 767px) {
      margin: 20px;
    }
    @media (min-width: 451px) and (max-width: 766px) {
      margin: 20px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      margin: 20px;
    }
  `;

  //Avatar
  const AvatarStyled = styled(Avatar)`
    margin: 0 5px;
  `;
  const avatarImage = "https://picsum.photos/id/237/100/100";

  //spacing
  const theme = React.useContext(ThemeContext);
  return (
    <>
      <ThemeProvider>
        <Container maxWidth="xl">
          <Grid container style={{ paddingTop: "120px" }}>
            <Grid
              item
              lg={{ span: 6 }}
              md={{ span: 6 }}
              sm={{ span: 12 }}
              xs={{ span: 12 }}
              xxs={{ span: 12 }}
            >
              <ContentItem>
                <div>
                  <AvatarStyled src={avatarImage} size={SIZE_EXTRA_LARGE} />
                </div>
                <div style={{ paddingTop: "30px", paddingLeft: "23px" }}>
                  <span style={{ fontWeight: "700", fontSize: "28px" }}>
                    Good Morning, Adrien Weza!
                  </span>

                  <p
                    style={{
                      color: "#979797",
                      fontWeight: "400",
                      fontSize: "16px",
                    }}
                  >
                    Your today's dashboard | 22 Jan 2022
                  </p>
                  <span>
                    <Link
                      appearance={LINK_APPEARANCE_ARROW}
                      size={SIZE_MEDIUM}
                    ></Link>
                  </span>
                </div>
              </ContentItem>
            </Grid>
            <Grid
              item
              span={6}
              md={{ span: 6 }}
              xs={{ span: 12 }}
              xxs={{ span: 12 }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "25px",
                      color: "#2251FF",
                    }}
                  >
                    &nbsp;&nbsp;&nbsp; 4
                  </p>
                  <p
                    style={{
                      fontWeight: "400",
                      fontSize: "14px",
                      lineHeight: "16px",
                    }}
                  >
                    Approved <br />
                    <b>Leave days</b>
                  </p>
                </div>
                <div style={{ height: "90px", paddingTop: "30px" }}>
                  <Divider type={MEDIUM_DIVIDER} />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "25px",
                      color: "#2251FF",
                    }}
                  >
                    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;0
                  </p>
                  <p
                    style={{
                      fontWeight: "400",
                      fontSize: "14px",
                      lineHeight: "16px",
                    }}
                  >
                    Pending Approved <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Leave days</b>
                  </p>
                </div>
                <div style={{ height: "90px", paddingTop: "30px" }}>
                  <Divider type={MEDIUM_DIVIDER} />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "25px",
                      color: "#2251FF",
                    }}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;20
                  </p>
                  <p
                    style={{
                      fontWeight: "400",
                      fontSize: "14px",
                      lineHeight: "16px",
                    }}
                  >
                    Remaining
                    <br />
                    <b>Leave days</b>
                  </p>
                </div>
                <div style={{ height: "90px", paddingTop: "30px" }}>
                  <Divider type={MEDIUM_DIVIDER} />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "25px",
                      color: "#2251FF",
                    }}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp; 24
                  </p>
                  <p
                    style={{
                      fontWeight: "400",
                      fontSize: "14px",
                      lineHeight: "16px",
                    }}
                  >
                    Total Earned
                    <br />
                    <b>Leave days</b>
                    <Link
                      style={{ marginLeft: "60%", paddingTop: "15%" }}
                      appearance={LINK_APPEARANCE_ARROW}
                      size={SIZE_MEDIUM}
                    ></Link>
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
          {/* ////////////////////////////SECOND ROW GRIDS ////////////////////////////////////// */}
          <Grid
            container
            style={{
              paddingTop: "75px",
            }}
            className="SecondGrid"
          >
            <Grid
              item
              lg={{
                span: 4,
                // direction: "column",
              }}
            >
              <FirstGridWrapper>
                <div>
                  <NewsCard />
                </div>
                <div style={{ paddingTop: "40px" }}>
                  <BenefitsCard />
                </div>
              </FirstGridWrapper>
            </Grid>
            <Grid
              item
              lg={{
                span: 4,
                //  direction: "column"
              }}
            >
              <SecondGridWrapper>
                <div>
                  <DeclarationCard />
                </div>
                <div style={{ display: "flex", paddingTop: "40px" }}>
                  <div>
                    <SmallCard
                      icon="newspaper-outline"
                      name="Payslip"
                      description="Available Payslips"
                      descriptionSecond="June 2022"
                      navigate="/monthly-payslip"
                    />
                  </div>
                  <div style={{ paddingLeft: "35px" }}>
                    <SmallCard
                      icon="accessibility-outline"
                      name="HR Team "
                      descriptionSecond="View Team"
                      navigate="/hr-team"
                    />
                  </div>
                </div>
              </SecondGridWrapper>
            </Grid>
            <Grid
              item
              lg={{
                span: 4,
                // direction: "column"
              }}
            >
              <ThirdGridWrapper>
                <LargeCard />
              </ThirdGridWrapper>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
};
