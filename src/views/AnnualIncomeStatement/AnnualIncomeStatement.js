import {
  Container,
  Grid,
  Select,
  Button,
  SIZE_MEDIUM,
  PRIMARY_BUTTON,
} from "@mds/mds-reactjs-library";
import styled from "@emotion/styled";
export const AnnualIncomeStatement = () => {
  const ButtonStyled = styled(Button)`
    margin-left: 12px;
  `;

  const SelectStyled = styled(Select)`
    width: 150px !important;
    height: 40px !important;
    margin-left: 12px;
  `;
  const options = [
    { label: 2010, value: 2010 },
    { label: 2011, value: 2011 },
    { label: 2012, value: 2012 },
    { label: 2013, value: 2013 },
    { label: 2014, value: 2014 },
    { label: 2015, value: 2015 },
    { label: 2016, value: 2016 },
    { label: 2017, value: 2017 },
    { label: 2018, value: 2018 },
    { label: 2019, value: 2019 },
    { label: 2020, value: 2021 },
    { label: 2022, value: 2022 },
  ];

  return (
    <>
      <Container maxWidth="xl">
        <Grid
          lg={12}
          md={{ span: 12 }}
          xs={{ span: 12 }}
          xxs={{ span: 12 }}
          style={{
            marginTop: "120px",
            backgroundColor: "#FBFAF2",
            width: "100%",
          }}
        >
          <h3> Annual Income Statement </h3>
          <i>Please Select the years</i>

          <div style={{ paddingTop: "10px" }}>
            Year :
            <SelectStyled placeholder="Year" options={options} />
            <ButtonStyled appearance={PRIMARY_BUTTON}>Download</ButtonStyled>
          </div>
        </Grid>
      </Container>
    </>
  );
};
