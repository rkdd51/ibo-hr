import {
  Container,
  Grid,
  Select,
  Button,
  SIZE_MEDIUM,
  TERTIARY_BUTTON,
} from "@mds/mds-reactjs-library";
import html2canvas from "html2canvas";
import jsPdf from "jspdf";
import styled from "@emotion/styled";

const P = styled.p`
   {
    display: flex;
    justify-content: center;
  }
`;
const SPAN = styled.span`
   {
    display: flex;
    justify-content: center;
  }
`;
//Conditional Style for PDF
const largeScreenStyle = {
  marginLeft: "20%",
  display: "flex",
  flexDirection: "column",
  width: "100%",
};

const smallScreenStyle = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
};

// var isValid ;
// console.log(window.innerWidth, "window.innerWidth 1");
// window.addEventListener("resize", (event) => {
//   if (window.innerWidth > 768) {
//     console.log(window.innerWidth, "window.innerWidth 2");
//     isValid = true;
//   } else if (window.innerWidth < 768) {
//     console.log(window.innerWidth, "window.innerWidth 3");
//     isValid = false;
//   }
// });

// console.log(window.innerWidth, "window.innerWidth 1");
var isValid;
if (window.screen.width > 767) {
  // console.log(window.innerWidth, "window.innerWidth 2");
  isValid = true;
} else {
  // console.log(window.innerWidth, "window.innerWidth 3");
  isValid = false;
}

export const CompensationReview = () => {
  //Download page as PDF
  const printPDF = () => {
    const domElement = document.getElementById("pdf");
    html2canvas(domElement, {
      onclone: (document) => {
        document.getElementById("print").style.display = "none";
      },
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPdf();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${new Date().toISOString()}.pdf`);
    });
  };

  return (
    <>
      <Container maxWidth="xl" style={{ marginTop: "50px" }}>
        <Grid
          item
          lg={12}
          md={{ span: 12 }}
          xs={{ span: 12 }}
          xxs={{ span: 12 }}
          style={{
            marginTop: "80px",
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
        </Grid>
        <br />
        <Grid
          item
          lg={8}
          md={{ span: 8 }}
          xs={{ span: 12 }}
          xxs={{ span: 12 }}
          style={isValid ? largeScreenStyle : smallScreenStyle}
        >
          <div
            id="pdf"
            style={{
              display: "flex",
              flexDirection: "column",
              border: "2px solid black",
            }}
          >
            <br />
            <P style={{ color: "#9966CC" }}>McKisney&Company</P>
            <br />
            <br />
            <P style={{ color: "#9A9A9A" }}>PRIVATE & CONFIDENTIAL</P>
            <br />
            <SPAN>
              <h3 style={{ color: "#4DDBFF" }}>Compensation Review EY 2018</h3>
            </SPAN>
            <P>Dean , "Name from Backend"</P>
            <P>Please find below details of your 2018/2019 compensation</P>
            <P>
              Your annualized total compensation for CY 2018 is "data from
              backend"
            </P>
            <P>Your bonus for CY 2018 is "data from backend"</P>
            <P>Your Salary for CY 2019 will be "data from backend"</P>
            <P>Which represents 15% increase over CY2018</P>
            <br />
            <P>
              If you have any question about your compensation, please speak to
              IBO HR team.
            </P>
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button appearance={TERTIARY_BUTTON} id="print" onClick={printPDF}>
              Download PDF
            </Button>
          </div>
        </Grid>
      </Container>
    </>
  );
};
