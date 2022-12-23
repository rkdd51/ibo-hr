import {
  Grid,
  Modal,
  Container,
  hideModal,
  FormElementWrapper,
  Toggle,
  SIZE_MEDIUM,
  SECONDARY_BUTTON,
  SIZE_SMALL,
  Button,
  PRIMARY_BUTTON,
  Input,
} from "@mds/mds-reactjs-library";
import styled from "@emotion/styled";
import React, { useState, useRef } from "react";
import FieldLine from "../../field-line/FieldLine";
import Outline64FileContent from "@mds/mds-icons/icons/svg/outline-64-file-content.svg";
import "./AddTeamStructure.scss";

const AddTeamStructure = () => {
  const handleClose = () => {
    hideModal("addTeamStructure");
  };
  return (
    <>
      <Modal style={{ width: "576px", padding: "30px" }} onClose={handleClose}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "20px 0px 30px 0px",
          }}
        >
          <h3>Add Team structured</h3>
        </div>
        <FieldLine label="Upload new file" icon={Outline64FileContent}>
          {/* <label
            for="myinput"
            style={{ width: "500px", border: "1px solid blue" }}
            placeholder="Select File"
          >
            Select File
          </label> */}
          <Input placeholder="Select File" type="file" id="myinput" />
          {/* <label class="upload" placeholder="Select File">
            <input type="file" />
          </label> */}
          <Button appearance={SECONDARY_BUTTON} size={SIZE_MEDIUM}>
            Upload
          </Button>
        </FieldLine>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            appearance={SECONDARY_BUTTON}
            size={SIZE_SMALL}
            onClick={handleClose}
          >
            Cancel
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button appearance={PRIMARY_BUTTON} size={SIZE_SMALL}>
            Save
          </Button>
        </div>
      </Modal>
    </>
  );
};
export default AddTeamStructure;
