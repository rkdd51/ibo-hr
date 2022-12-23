import {
  Modal,
  hideModal,
  Toggle,
  SECONDARY_BUTTON,
  SIZE_SMALL,
  Button,
  PRIMARY_BUTTON,
  Input,
  Select,
} from "@mds/mds-reactjs-library";

import React, { useState } from "react";
import FieldLine from "../../field-line/FieldLine";
import Outline64User from "@mds/mds-icons/icons/svg/outline-64-users-mm.svg";
import Outline64Zoom from "@mds/mds-icons/icons/svg/outline-64-zoom.svg";
import Outline64ShoppingTag from "@mds/mds-icons/icons/svg/outline-64-shopping-tag.svg";
import TagsInput from "../../tag-input/TagInput";
import "./EditHRModal.scss";

const EditHRModal = () => {
  //Link Options
  let options = [
    { label: "My Personal Info", value: "myPersonalInfo", group: "My HR" },
    { label: "My PTO", value: "myPto", group: "My HR" },
    { label: "My HR Team", value: "myHrTeam", group: "My HR" },
    {
      label: "Employment Declaration Request",
      value: "employmentDeclarationRequest",
      group: "My HR",
    },
    //My Benefits
    { label: "  Overview", value: "overview", group: "My Benefits" },
    { label: " Cheque Creche", value: "chequeCreche", group: "My Benefits" },
    { label: " Student Check ", value: "studentCheck", group: "My Benefits" },
    { label: "  Car Plan", value: "carPlan", group: "My Benefits" },
    { label: " Pension Fund", value: "pensionFund", group: "My Benefits" },
    //My Compensation
    {
      label: "  My Monthly Payslip",
      value: "myMonthlyPayslip",
      group: "My Compensation",
    },
    {
      label: " My Annual Income Statement",
      value: "myAnnualIncomeStatement",
      group: "My Compensation",
    },
    {
      label: "  My Severance Plan ",
      value: "mySeverancePlan",
      group: "My Compensation",
    },
    {
      label: " My Compensation Memo (OLD)  ",
      value: "myCompensationMemo(old)",
      group: "My Compensation",
    },
  ];

  const handleClose = () => {
    hideModal("edithr");
  };

  //Form

  const [memberName, setMemberName] = useState("");
  const changeMember = (e) => {
    setMemberName(e.target.value);
    // console.log(e.target.value);
  };

  const [optionValue, setOptionvalue] = useState("");
  const optionFunction = (e) => {
    setOptionvalue(e.target.value);
    // console.log(e.target.value);
  };

  //Chip Tag
  const [functions, setFunctions] = useState([]);
  const selectedTags = (tags) => {
    // console.log(tags, "This is Selected Tag (Functions in modal)");
  };
  const addTags = (event) => {
    console.log(event, "This is addTag event");
    if (event.target.value !== "") {
      setFunctions([...functions, event.target.value]);
      // selectedTags([...functions, event.target.value]);
      event.target.value = "";
      console.log("This is clicked inside AddTag");
    }
    console.log("This is clicked outside AddTag");
  };

  const removeTags = (indexToRemove) => {
    setFunctions([...functions.filter((_, index) => index !== indexToRemove)]);
  };

  //Save Button
  const handleSubmit = (event) => {
    let data = {};
    console.log("This is handleSubmit from EditHRModal");
    event.preventDefault();
    console.log(
      (data = { memberName, functions, optionValue }),
      "This is data"
    );
    hideModal("edithr");
  };

  return (
    <>
      <Modal style={{ width: "auto", padding: "20px" }} onClose={handleClose}>
        <div>
          <h3>Add Member HR Team</h3>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: "420px" }}>
            <FieldLine
              label="Member"
              icon={Outline64User}
              iconTwo={Outline64Zoom}
            >
              <Input
                placeholder="Member"
                value={memberName}
                onChange={changeMember}
              />
            </FieldLine>
          </div>
          <div style={{ marginLeft: "20px" }}>
            <FieldLine label="Director">
              <Toggle style={{ paddingTop: "10px" }} />
            </FieldLine>
          </div>
        </div>

        <div>
          <FieldLine label="Functions" icon={Outline64ShoppingTag}>
            {/* Chip Tag */}
            <div
              style={{
                height: "329px",
                width: "430px",
                border: "1px solid #A9A9A9",
                overflow: "auto",
              }}
            >
              <ul id="tags">
                {functions.map((tag, index) => (
                  <li key={index} className="tag">
                    <span className="tag-title">{tag}</span>
                    <span
                      className="tag-close-icon"
                      onClick={() => removeTags(index)}
                    >
                      x
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {/* <TagsInput selectedTags={selectedTags} tags={[]}  style={{ height: "329px" }} data={array}/> */}
          </FieldLine>
        </div>

        <div>
          <FieldLine label="Add Functions">
            <Input
              placeholder="Add Functions"
              onKeyUp={(event) =>
                event.key === "Enter" ? addTags(event) : null
              }
            />
          </FieldLine>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: "340px" }}>
            <FieldLine>
              <Select
                options={options}
                placeholder="Link (optional)"
                value={optionValue}
                onChange={optionFunction}
              />
            </FieldLine>
          </div>
          <div>
            <Button appearance={PRIMARY_BUTTON} onClick={addTags} type="button">
              Add Functions
            </Button>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            appearance={SECONDARY_BUTTON}
            size={SIZE_SMALL}
            onClick={() => handleClose()}
          >
            Cancel
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button
            appearance={PRIMARY_BUTTON}
            size={SIZE_SMALL}
            type="submit"
            onClick={handleSubmit}
          >
            Save
          </Button>
        </div>
      </Modal>
    </>
  );
};
export default EditHRModal;
