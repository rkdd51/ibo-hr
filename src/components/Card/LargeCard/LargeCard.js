import React from "react";
import {
  ThemeProvider,
  Card,
  TYPE_OUTLINE,
  HORIZONTAL_LAYOUT,
} from "@mds/mds-reactjs-library";
import CustomAccordion from "../../Accordion/CustomAccordian/CustomAccordion";

function LargeCard() {
  return (
    <ThemeProvider>
      <div>
        <Card
          layout={HORIZONTAL_LAYOUT}
          style={{
            width: "378px",
            height: "auto",
            background: "#FFFFFF",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <CustomAccordion />
          </div>
        </Card>
      </div>
    </ThemeProvider>
  );
}
export default LargeCard;
