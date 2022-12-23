import {
  Container,
  Grid,
  Select,
  Button,
  SIZE_MEDIUM,
  TERTIARY_BUTTON,
} from "@mds/mds-reactjs-library";

import { useNavigate } from "react-router-dom";
export const MyCompensationMemo = () => {
  let navigate = useNavigate();
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
          <h3>COMPENSATION REVIEW </h3>
          <br />
          <div>
            Name:<span style={{ paddingLeft: "20px" }}>Name from Backend</span>
          </div>
          <div>
            FMNO:<span style={{ paddingLeft: "20px" }}>FMNO from Backend</span>
          </div>
          <br />
          <div style={{ paddingTop: "10px" }}>
            Available years
            <br />
            <div style={{ margin: "10px" }}>
              <div>
                <Button
                  appearance={TERTIARY_BUTTON}
                  onClick={() => navigate("/compensation-review")}
                >
                  2018
                </Button>
              </div>
              <br />
              <div>
                <Button
                  appearance={TERTIARY_BUTTON}
                  onClick={() => navigate("/compensation-review")}
                >
                  2017
                </Button>
              </div>
              <br />
              <div>
                <Button
                  appearance={TERTIARY_BUTTON}
                  onClick={() => navigate("/compensation-review")}
                >
                  2016
                </Button>
              </div>
            </div>
          </div>
        </Grid>
      </Container>
    </>
  );
};
