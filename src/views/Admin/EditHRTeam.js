import { useState, useEffect } from "react";
import {
  Card,
  Grid,
  Button,
  Table,
  SplitDropdownButton,
  DropdownItem,
  SECONDARY_BUTTON,
  SIZE_SMALL,
  Modal,
  showModal,
} from "@mds/mds-reactjs-library";

import styled from "@emotion/styled";
import HRTeamTable from "../../components/remote-table/HRTeamTable";
import TeamStructureTable from "../../components/remote-table/TeamStructureTable";
import EditHRModal from "../../components/modal/edit-hr-modal/EditHRModal";
import { CustomTable } from "../../components/remote-table/CustomTable";

const CustomCard = styled(Card)`
  width: 100%;
  margin-bottom: 12px;
`;
export const EditHRTeam = () => {
  const showEditHRModal = () => {
    showModal({
      id: "edithr", // unique id of modal
      isModal: true, // means that modal can be closed by ESC keypress and click on page cover
      children: <EditHRModal />,
      onClose: true,
      scrollable: true, // modal will control height of content and add scrollbar if content is too high
    });
  };

  return (
    <>
      <form>
        <Grid
          container
          maxwidth="xl"
          style={{
            marginTop: "80px",
          }}
        >
          <h3>Edit Iberia HR Team</h3>
          <Grid
            item
            lg={12}
            md={{ span: 12 }}
            xs={{ span: 12 }}
            xxs={{ span: 12 }}
          >
            <CustomCard
              style={{
                padding: "20px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4>
                  <b>HR Team</b>
                </h4>
                <Button
                  onClick={() => {
                    showEditHRModal();
                  }}
                >
                  + Add member
                </Button>
              </div>
              <br />
              <div>
                <HRTeamTable />
                {/* <CustomTable type='hrTeam' itemsPerPage={10}/> */}
              </div>
            </CustomCard>
            <div style={{ marginTop: "20px" }}>
              <CustomCard
                style={{
                  padding: "20px",
                }}
              >
                <div>
                  <h4>
                    <b>Team Structure</b>
                  </h4>
                </div>
                <br />
                <div>
                  <TeamStructureTable />
                  {/* <CustomTable type='teamStructure' itemsPerPage={10}/> */}
                </div>
              </CustomCard>
            </div>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
