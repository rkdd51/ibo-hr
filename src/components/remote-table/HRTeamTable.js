import {
  Card,
  Container,
  Grid,
  Button,
  ThemeProvider,
  ALIGN_RIGHT,
  ALIGN_LEFT,
  Table,
  SplitDropdownButton,
  showModal,
  DropdownItem,
  SECONDARY_BUTTON,
  SIZE_SMALL,
} from "@mds/mds-reactjs-library";
import EditHRModal from "../modal/edit-hr-modal/EditHRModal"
const HRTeamTable = () => {

  // const customTable = {
  //   table: {
  //     lightHeaderBgColor: '#FFFFFF',
  //   },
  // }
  //Edit Iberia HR Team
  const columns = [
    {
      dataKey: "name",
      label: "Name",
      width: 100,
      sortable: false,
      flexGrow: true,ALIGN_RIGHT
    },
    { dataKey: "office", label: "Office", width: 100, flexGrow: true },
    { dataKey: "function", label: "Function", width: 200, flexGrow: true },
    { dataKey: "edit", label: "", width: 100, flexGrow: true ,ALIGN_LEFT},
  ];
  const rows = [
    {
      name: "Maria Mary",
      office: "Lisbon",
      director: "Yes",
      skills: "N/A",
      edit: (
        <SplitDropdownButton
          label="Edit"
          appearance={SECONDARY_BUTTON}
          size={SIZE_SMALL}
          onClick={() => {
            showEditHRModal();
          }}
        >
          <DropdownItem>
            <Button appearance={SECONDARY_BUTTON} size={SIZE_SMALL}>
              Delete
            </Button>
          </DropdownItem>
        </SplitDropdownButton>
      ),
    },
  ];

  //HRTeam Modal

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
     <Table dark={false} columns={columns} rows={rows} />
     
    </>
  );
};

export default HRTeamTable;
