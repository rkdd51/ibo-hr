import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CustomAccordion.scss";
// import "./MyBenefits.scss";
// import "./MyCompensation.scss";
import icon3 from "../../../assets/media/AccordionIcons/icon3.png";
import icon2 from "../../../assets/media/AccordionIcons/icon2.png";
import icon1 from "../../../assets/media/AccordionIcons/icon1.png";
const MyHR = () => {
  const [showHR, setShowHR] = useState(false);
  const [showBenefits, setShowBenefits] = useState(false);
  const [showCompensation, setShowCompensation] = useState(false);
  let navigate = useNavigate();

  const myHR = () => {
    setShowHR(!showHR);
    setShowBenefits(false);
    setShowCompensation(false);
  };
  const benefits = () => {
    setShowBenefits(!showBenefits);
    setShowHR(false);
    setShowCompensation(false);
  };
  const compensation = () => {
    setShowCompensation(!showCompensation);
    setShowHR(false);
    setShowBenefits(false);
  };
  return (
    <>
      {/* MyHR Accordion */}
      <div className="main-heading" onClick={myHR}>
        <p>
          {showHR ? (
            <ion-icon
              name="remove-outline"
              size="large"
              style={{ color: "white" }}
            ></ion-icon>
          ) : (
            <ion-icon
              name="add-outline"
              size="large"
              style={{ color: "white" }}
            ></ion-icon>
          )}{" "}
        </p>
        <h3>My HR</h3>
        <div>
          <img
            src={icon1}
            style={{
              width: "60px",
              height: "60px",
              marginLeft: "160%",
              marginTop: "68%",
            }}
          />
        </div>
      </div>
      {showHR && (
        <div className="answers">
          <div className="myPersonalInfoHover" onClick={() => navigate("/")}>
            <div className="child">
              <ion-icon name="person-circle-outline" size="large"></ion-icon>
            </div>
            <p className="details">
              My Personal &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Info
            </p>
          </div>
          <div className="myPtoHover">
            <div className="child">
              <ion-icon name="calendar-outline" size="large"></ion-icon>
            </div>

            <p className="details"> My PTO & Absences</p>
          </div>
          <div className="myHrTeamHover" onClick={() => navigate("/hr-team")}>
            <div className="child">
              <ion-icon name="accessibility-outline" size="large"></ion-icon>
            </div>

            <p className="details"> My HR Team</p>
          </div>
          <div className="employmentDeclarationHover">
            <div className="child">
              <ion-icon name="newspaper-outline" size="large"></ion-icon>
            </div>

            <p className="details">
              Employment declarations <br />
              &nbsp;&nbsp;&nbsp;requests
            </p>
          </div>
        </div>
      )}

      {/* My Benefits Accordion */}
      <div style={{ marginTop: "15px" }}>
        <div className="secondMain-heading" onClick={benefits}>
          <p>
            {showBenefits ? (
              <ion-icon
                name="remove-outline"
                size="large"
                style={{ color: "white" }}
              ></ion-icon>
            ) : (
              <ion-icon
                name="add-outline"
                size="large"
                style={{ color: "white" }}
              ></ion-icon>
            )}{" "}
          </p>
          <h3>My Benefits</h3>
          <div>
            <img
              src={icon2}
              style={{
                width: "60px",
                height: "60px",
                marginLeft: "60%",
                marginTop: "68%",
              }}
            />
          </div>
        </div>
        {showBenefits && (
          <div className="secondAnswers">
            <div className="chequeCrecheHover">
              <div className="secondChild">
                <ion-icon name="card-outline" size="large"></ion-icon>
              </div>

              <p className="secondDetails">Cheque Creche</p>
            </div>

            <div className="studentCheckHover">
              <div className="secondChild">
                <ion-icon name="school-outline" size="large"></ion-icon>
              </div>

              <p className="secondDetails">Student Check</p>
            </div>
            <div className="carPlanHover">
              <div className="secondChild">
                <ion-icon name="car-outline" size="large"></ion-icon>
              </div>
              <p className="secondDetails"> Car Plan</p>
            </div>
            <div className="pensionFundHover">
              <div className="secondChild">
                <ion-icon name="bag-outline" size="large"></ion-icon>
              </div>
              <p className="secondDetails"> Pension fund</p>
            </div>
          </div>
        )}
      </div>

      {/* MyCompensationAccordion */}
      <div style={{ marginTop: "15px" }}>
        <div className="thirdMain-heading" onClick={compensation}>
          <div>
            <p>
              {showCompensation ? (
                <ion-icon
                  name="remove-outline"
                  size="large"
                  style={{ color: "white" }}
                ></ion-icon>
              ) : (
                <ion-icon
                  name="add-outline"
                  size="large"
                  style={{ color: "white" }}
                ></ion-icon>
              )}
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <h3>My Compensation</h3>
            </div>

            <div>
              <img
                src={icon3}
                style={{
                  width: "60px",
                  height: "60px",
                  marginLeft: "82%",
                  // marginTop: "68%",
                }}
              />
            </div>
          </div>
        </div>

        {showCompensation && (
          <div className="thirdAnswers">
            <div
              className="myMonthlyPaySlipHover"
              onClick={() => navigate("/monthly-payslip")}
            >
              <div className="thirdChild">
                <ion-icon name="clipboard-outline" size="large"></ion-icon>
              </div>

              <p className="thirdDetails">
                My Monthly <br /> Payslips
              </p>
            </div>

            <div
              className="myAnnualIncomeHover"
              onClick={() => navigate("/annual-income-statement")}
            >
              <div className="thirdChild">
                {" "}
                <ion-icon name="calendar-outline" size="large"></ion-icon>
              </div>

              <p className="thirdDetails">
                My Annual <br /> Income <br />
                Statement
              </p>
            </div>
            <div
              className="mySeverancePlanHover"
              onClick={() => navigate("/my-severance-plan")}
            >
              <div className="thirdChild">
                <ion-icon name="wallet-outline" size="large"></ion-icon>
              </div>
              <p className="thirdDetails">
                My <br />
                Severance <br />
                Plan
              </p>
            </div>

            <div
              className="myCompensationMemoHover"
              onClick={() => navigate("/my-compensation-memo")}
            >
              <div className="thirdChild">
                <ion-icon name="business-outline" size="large"></ion-icon>
              </div>

              <p className="thirdDetails">
                My <br />
                Compensation <br /> Memos (OLD)
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MyHR;
